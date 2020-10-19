const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    discordId: { type: String, required: true },
    username:  { type: String, required: true }
})

const DiscordUser = module.exports = new mongoose.model('User', UserSchema)