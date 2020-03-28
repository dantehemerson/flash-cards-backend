import { Router } from 'express'
import { response } from '../../response'
import { createCard } from './card.controller'

export const cardRouter = Router()

cardRouter.get('/', async (req, res) => {
  // const messages = await getAllMessages()
  // response.success(req, res, messages)
})

cardRouter.post('/', async (req, res) => {
  try {
    const createdMessage = await createCard(req.body)
    response.success(req, res, createdMessage, 201)
  } catch (error) {
    response.error(req, res, error.message, 500, error)
  }
})
