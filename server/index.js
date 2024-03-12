import express from 'express'

const app = express()
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express
// eslint-disable-next-line
const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
	res.send('<h1>hello world</h1>')
})

app.listen(PORT, () => {
	console.log(`server listening on port http://localhost:${PORT}`)
})
