const mongoose = require('mongoose');


const FoodSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    contact: {
        type: Number,
    },
    foodType: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    location: {
        type: String,
    },
    address:{
        type: String,
    },
    note: {
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

module.exports = mongoose.model('foods',FoodSchema);