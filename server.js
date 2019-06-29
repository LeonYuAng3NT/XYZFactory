const express = require('express');
const os = require('os');

const app = express();
require('./routes')(app)
const PORT = process.env.PORT || 3000