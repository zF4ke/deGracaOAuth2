const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/degracaauth', { useNewUrlParser: true, useUnifiedTopology: true })