import express from 'express'
import logger from 'morgan'

import { Server } from 'socket.io'
import { createServer } from 'node:http'

const app = express()
const server = createServer(app) // crear un servido
const io = new Server(server)

io.on('connection', () => {
	console.log('a user has connect')
})

app.use(logger('dev'))

app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express
// eslint-disable-next-line
const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
	// res.sendFile(process.cwd() + 'client/index.html')	
	
	res.sendFile(process.cwd() + '/client/index.html')
})

app.get('/output.css', (req,res) => {
	res.sendFile(process.cwd() + '/client/output.css')
})

app.get('/index.js', (req,res) => {
	res.sendFile(process.cwd() + '/client/index.js')
})

server.listen(PORT, () => {
	console.log(`server listening on port http://localhost:${PORT}`)
})
