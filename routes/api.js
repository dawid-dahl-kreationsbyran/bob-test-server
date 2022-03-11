const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
	res.send("API -> GETTING RESOURCE")
})

router.post("/", (req, res, next) => {
	res.send("API -> POSTING RESOURCE")
})

module.exports = router
