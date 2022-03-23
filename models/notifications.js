const mongoose = require('mongoose');


const NotificationSchema = mongoose.Schema({
    buyerName: {
        type: String,
    },
    email: {
        type: String,
    },
    sellerName: {
        type: String,
    },
    message: {
        type: String,
    },
    status: {
        type: Boolean,
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

module.exports = mongoose.model('notifications', NotificationSchema);