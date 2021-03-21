const mongoose = require('mongoose');
const db = require('./db');

const schemaName = new mongoose.Schema({
    name: String
});

const modelName = mongoose.model('collectionName', schemaName);

module.exports = modelName;