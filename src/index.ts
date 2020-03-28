import express, { Application } from 'express'
import { useRoutes } from './routes'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routers
useRoutes(app)

app.listen(8001, () => {
  console.log('Listening on http://localhost:8001')
})
