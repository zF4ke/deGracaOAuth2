const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    ipAddress:  { type: String, required: true }
})

const PageRequest = module.exports = new mongoose.model('Request', RequestSchema)