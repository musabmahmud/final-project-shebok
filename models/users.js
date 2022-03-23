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
    img: {
        type: String,
    },
    status: {
        type: Boolean,
    },
    rate: {
        type: Number,
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
        type: Number,
    },
    jobs:{
        type: Number,
    },
    location: {
        type: String,
    },
    nid: {
        type: Number,
    },
    dob:{
        type: Date,
    },
    phone:{
        type: Number,
    },
    description:{
        type: String,
    },
    balance:{
        type: Number,
    },
    activation_key: {
        type: String,
    },
    otp_key: {
        type: Number,
    },
    reviews:[
        {
            userId: {type: mongoose.Schema.Types.ObjectId, ref: 'users'}, 
            review: String
        }
    ],
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