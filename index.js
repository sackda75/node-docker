const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config');

mongoose
	.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.log('Failed to connect to MongoDB, ' + err.message))

app.get('/', (req, res) => {
	const url = req.route.path
	console.log(`The path is http://localhost:3000${url}`)
	res.json({
		Backend: 'API Running now ✅✅',
		Path: `The path is ${url} ✅✅`
	})
})

app.listen(port, () => {
	console.log(`Running on port ${port}`)
})
