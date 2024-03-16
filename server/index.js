import express from 'express'
import logger from 'morgan'

import { Server } from 'socket.io'
import { createServer } from 'node:http'

const app = express()
const server = createServer(app) // crear un servido
const io = new Server(server, {
	connectionStateRecovery: {
		
	}
})

io.on('connection', (socket) => {
	console.log('an user has connect')
	socket.on('disconnect', () => {
		console.log('an user has disconnect')
	})

	socket.on('chat message', (msg) => {
		io.emit('chat message', msg)
	})
})

app.use(logger('dev'))

app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express
// eslint-disable-next-line
const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
	res.sendFile(process.cwd() + '/client/index.html')
})

app.get('/output.css', (req, res) => {
	res.sendFile(process.cwd() + '/client/output.css')
})

app.get('/index.js', (req, res) => {
	res.sendFile(process.cwd() + '/client/index.js')
})

app.get('/public/image.webp', (req, res) => {
	res.sendFile(process.cwd() + '/client/public/image.webp')
})

server.listen(PORT, () => {
	console.log(`server listening on port http://localhost:${PORT}`)
})
