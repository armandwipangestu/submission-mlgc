const express = require("express")
const predictsRouter = require("./router/predicts.router")

const app = express()

app.use(predictsRouter)

module.exports = app