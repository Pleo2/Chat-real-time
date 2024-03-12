import express from 'express'
import logger from 'morgan'

const app = express()
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

app.listen(PORT, () => {
	console.log(`server listening on port http://localhost:${PORT}`)
})
