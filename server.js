require("dotenv").config()
const express = require("express")
const app = express() // Application-level middleware
const mongoose = require("mongoose")


// Database setup
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on("error", error => console.error(error))
db.once("open", () => console.log("Database connected."))

// Express middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.listen(3000, () => console.log("Server started."))