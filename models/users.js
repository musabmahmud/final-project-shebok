const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
    },
    role: {
        type: String,
        required: true,
    },
    activation_key: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },

})

module.exports = mongoose.model('users',PostSchema);