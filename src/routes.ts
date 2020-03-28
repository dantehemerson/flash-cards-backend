import { Application } from 'express'
import { messageRouter } from './modules/message/message.network'
import { cardRouter } from './modules/card/card.network'

export function useRoutes(app: Application) {
  app.use('/messages', messageRouter)
  app.use('/cards', cardRouter)
}
