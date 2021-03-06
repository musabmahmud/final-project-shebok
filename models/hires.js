const mongoose = require('mongoose');


const HireSchema = mongoose.Schema({
    buyerName: {
        type: String,
    },
    buyerEmail: {
        type: String,
    },
    sellerName: {
        type: String,
    },
    sellerEmail: {
        type: String,
    },
    service: {
        type: String,
    },
    from: {
        type: Date,
    },
    to: {
        type: Date,
    },
    duration: {
        type: Number,
    },
    totalCost: {
        type: Number,
    },
    location: {
        type: String,
    },
    address: {
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

module.exports = mongoose.model('hires',HireSchema);