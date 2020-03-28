import { Application } from 'express'
import { cardRouter } from './modules/card/card.network'
import { folderRouter } from './modules/folder/folder.network'
import { messageRouter } from './modules/message/message.network'

export function useRoutes(app: Application) {
  app.use('/messages', messageRouter)
  app.use('/cards', cardRouter)
  app.use('/folders', folderRouter)
}
