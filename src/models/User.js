const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    balance: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('User', UserSchema)