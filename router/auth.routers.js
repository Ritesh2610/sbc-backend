const express = require('express');
const { signin, signup } = require('../controller/auth.controler.js');

const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/signin', signin);

module.exports = authRouter;
