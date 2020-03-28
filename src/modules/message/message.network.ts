import { Router } from 'express'
import { response } from '../../response'
import { addMessage, getAllMessages } from './messsage.controller'

export const messageRouter = Router()

messageRouter.get('/', async (req, res) => {
  const messages = await getAllMessages()
  response.success(req, res, messages)
})

messageRouter.post('/', async (req, res) => {
  const { user, message } = req.body
  try {
    const createdMessage = await addMessage(user, message)
    response.success(req, res, createdMessage, 201)
  } catch (error) {
    response.error(req, res, error.message, 500, error)
  }
})
