const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    nin: String,
    age: Number,
    vehicle: String,
    downpayment: String
});

module.exports = mongoose.model("customer", customerSchema);