import express, { Application } from 'express'

const app: Application = express()

app.use('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3443, () => {
  console.log('Listening on http://localhost:3443')
})
