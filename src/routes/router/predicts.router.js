const express = require('express')
const upload = require('../../middleware/image.middleware')
const { predict } = require('../../controller/predicts.controller')

const router = express.Router()

router.post("/predict", upload.single('image'), predict)
router.get("/predict/histories")

module.exports = router