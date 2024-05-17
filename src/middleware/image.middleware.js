const multer = require("multer")
const path = require("path")

const storage = multer.memoryStorage()

const upload = multer({
    storage,
    limits: {
        fileSize: 1 * 1024 * 1024
    }
})

module.exports = upload