const environment = require('./config/environment');
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const logger = require('debug')('application');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');

// Load the environment variables
environment();

// Create Express application
const app = express();

// Configure Helmet to guard against well-known vulnerabilities
app.use(helmet());

// Enable compression
app.use(compression());

// Configure CORS
app.use(cors());

// Log HTTP requests in file
var accessLogStream = fs.createWriteStream(
  path.join(__dirname, process.env.LOG_FILE),
  {
    flags: 'a'
  }
);
app.use(morgan(process.env.LOG_FORMAT, { stream: accessLogStream }));

// Configure static resources
app.use(express.static(__dirname + '/ui/dist'));

// Start server
app.listen(process.env.APP_PORT, () => {
  logger('Application started');
});
