const mongoose = require('mongoose');

const userShema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    mobile: { type: String, require: true },
    password: { type: String, require: true },
    token: { type: String, default: "" },
    createAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("User", userShema);
