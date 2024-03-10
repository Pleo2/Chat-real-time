import express from 'express'

const app = express()
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express
// eslint-disable-next-line
const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
	console.log(`server listening on port http://localhost:${PORT}`)
})
