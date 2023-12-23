const express = require('express');
const cors = require('cors');
const router = require('./router/Routers.js');
const morgan = require('morgan');
const uploadRouter = require('./router/upload.router.js');
const mongoose = require('mongoose');
const authRouter = require('./router/auth.routers.js');
require('dotenv').config();
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/data', router);
app.use('/upload', uploadRouter);
app.use('/auth', authRouter);

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  w: 'majority',  // Specify the correct write concern here
  j: true,        // Journaling
  wtimeout: 10000 // Timeout for write concern
})
  .then(() => {
    app.listen(port, () => console.log("Server is running on 5000"));
  })
  .catch((err) => console.log(`Server not connected: ${err}`));
