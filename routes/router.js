const express = require("express")
const router = express.Router()

const contactController = require("../controller/contact.controller")

router.get("/", contactController.getAll)
router.post("/", contactController.create)

module.exports = router