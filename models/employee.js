const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    project: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model("Employee", employeeSchema)