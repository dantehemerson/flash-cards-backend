import express, { Application } from 'express'
import { useRoutes } from './routes'
import { exceptionHandler } from './middleware/exception-handler.middleware'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routers
useRoutes(app)

// Exception handler
app.use(exceptionHandler)

app.listen(8001, () => {
  console.log('Listening on http://localhost:8001')
})
