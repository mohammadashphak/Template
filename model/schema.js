const mongoose = require('mongoose');
const db = require('./db');

const schemaName = new mongoose.Schema({
    name: String
});

module.exports = schemaName;