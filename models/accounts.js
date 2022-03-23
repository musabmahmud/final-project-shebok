const mongoose = require('mongoose');


const AccountSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

module.exports = mongoose.model('accounts',AccountSchema);