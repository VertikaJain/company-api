const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    projectKey: { type: String, required: true, unique: true },
}, { timestamps: true })

module.exports = mongoose.model("Project", projectSchema)