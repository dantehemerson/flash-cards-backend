import { Application } from 'express'
import { messageRouter } from './modules/message/message.network'

export function useRoutes(app: Application) {
  app.use('/messages', messageRouter)
}
