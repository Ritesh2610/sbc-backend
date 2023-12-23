const {pdgDataModel} = require("../model/investor.model.js");
const pdfDataController = async (req, res) => {
    try {
        const file = req.file;
        const body = req.body;
        console.log(body);
        const result = await pdgDataModel.create({
            title: file.originalname,
            filePath: file.path,
            name: body.name,
            pagename: body.pagename,
            added_by: "admin"
        });
       return res.status(200).json({result, message: "File uploaded" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong", err });
    }
};
module.exports = {
    pdfDataController
};
