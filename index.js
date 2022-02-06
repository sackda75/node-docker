const express = require('express')
const app = express()
const colors = require('colors')
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
	const url = req.route.path
	console.log(`The path is http://localhost:3000${url}`.yellow)
	res.json({ Backend: 'API Running now', Colors: colors.enabled, Path: `The path is ${url}` })
})

app.listen(port, () => {
	console.log(`Running the on port ${port} ✅✅`.cyan)
})
