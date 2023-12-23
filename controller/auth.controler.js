const jwt = require('jsonwebtoken');
const userModel = require('../model/user.model.js');

const secret = "test";

const signup = async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body;
        console.log(req.body);
        // Validate input fields
        if (!name) return res.status(400).json({ message: "Please enter Name" });
        if (!email) return res.status(400).json({ message: "Please enter email" });
        if (!mobile) return res.status(400).json({ message: "Please enter mobile" });
        if (!password) return res.status(400).json({ message: "Please enter password" });

        // Check if the user already exists
        const oldUser = await userModel.findOne({ email });

        if (oldUser) {
            return res.status(409).json({ message: "User already exists" });
            // 409 Conflict status code is more appropriate for a situation where a resource already exists.
        }

        // Create a new user
        const result = await userModel.create({
            name, email, mobile, password
        });

        // Generate a JWT token
        const token = jwt.sign({ email, mobile }, secret);

        res.status(201).json({ result, token, message: "Account Created" });
        // 201 Created status code is more appropriate for a successful creation operation.

    } catch (err) {
        console.error("Error during account creation:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const oldUser = await userModel.findOne({ email });

        if (!oldUser) {
            return res.status(400).json({ message: "User does not exist" });
        }

        // Check if the password is correct
        const isPasswordCorrect = password === oldUser.password;

        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Please enter the correct password" });
        }

        // Generate a JWT token
        const token = jwt.sign({ email, userId: oldUser._id }, secret);

        // Update the user with the new token
        const authUser = await userModel.findOneAndUpdate(
            { email },
            { $set: { token } },
            { new: true, useFindAndModify: false }
        );

        // Send response
        res.status(200).json({ authUser, token, message: "Successfully Login" });

    } catch (error) {
        // Log the error and send a detailed error response
        res.status(500).json({ error: error.message, message: "Internal Server Error" });
    }
};

module.exports = {
    signup,
    signin
};
