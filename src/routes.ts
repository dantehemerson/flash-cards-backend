import { Application } from 'express'
import { messageRouter } from './components/message/message.network'

export function useRoutes(app: Application) {
  app.use('/messages', messageRouter)
}
