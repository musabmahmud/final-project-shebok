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
        type: String,
    },
    to: {
        type: String,
    },
    duration: {
        type: Number,
    },
    totalCost: {
        type: Number,
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