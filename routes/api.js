const express = require("express")
const router = express.Router()

const database = [{ id: 1, name: "test-name" }]

router.get("/", (req, res, next) => {
	res.send("API -> GETTING RESOURCE")
})

router.post("/", (req, res, next) => {
	console.log("req.body: ", req.body)

	database.push({ id: Math.floor(Math.random() * 100000), ...req.body })

	console.log("DB: ", database)

	res.status(200).json({ success: true, data: "data from endpoint" })
})

module.exports = router
