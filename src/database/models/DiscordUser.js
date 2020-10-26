const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    discordId: { type: String, required: true },
    username:  { type: String, required: true },
    email:  { type: String, required: true },
    mfa_enabled: { type: Boolean, required: true },
    premium_type: { type: Number },
    guilds:  { type: Array, required: true },
})

const DiscordUser = module.exports = new mongoose.model('User', UserSchema)