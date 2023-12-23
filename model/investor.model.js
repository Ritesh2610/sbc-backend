const mongoose = require('mongoose');

const pdfData = mongoose.Schema({
    title: { type: String, require: true },
    name: { type: String, require:true },
    filePath: { type: String, require: true },
    pagename: { type: String, require: true },
    added_by: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now }
});
exports.pdgDataModel = mongoose.model("pdfData", pdfData);



