const express = require('express');
const { pdfDataController } = require('../controller/uploadFile.controler.js');
const upload = require('../middleware/multer.middleware.js');
const auth = require('../middleware/auth.js');

const uploadRouter = express.Router();

uploadRouter.post('/pdf-data', auth, upload, pdfDataController);

module.exports = uploadRouter;
