const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    status: {
        type: Boolean,
    },
    rate: {
        type: String,
    },
    role: {
        type: String,
    },
    service:{
        type: String,
    },
    sex:{
        type: String,
    },
    age: {
        type: String,
    },
    location: {
        type: String,
    },
    nid: {
        type: String,
    },
    dob:{
        type: Date,
    },
    phone:{
        type: String,
    },
    description:{
        type: String,
    },
    balance:{
        type: String,
    },
    activation_key: {
        type: String,
    },
    otp_key: {
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