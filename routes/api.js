const express = require("express")
const router = express.Router()

const database = [{ id: 1, employee_name: "test-name" }]

router.get("/", (req, res, next) => {
	return res
		.status(200)
		.json({ success: true, data: "data from GET endpoint" })
})

router.post("/", (req, res, next) => {
	console.log("req.body: ", req.body)

	const hasKeys = obj => !!Object.keys(obj).length

	if (!hasKeys(req.body)) {
		return res
			.status(422)
			.json({ success: true, data: "incorrect payload" })
	}

	database.push({ id: Math.floor(Math.random() * 100000), ...req.body })

	console.log("DB: ", database)

	return res
		.status(200)
		.json({ success: true, data: "data from POST endpoint" })
})

module.exports = router
