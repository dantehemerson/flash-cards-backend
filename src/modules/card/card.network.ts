import { Router } from 'express'
import { response } from '../../response'
import { createCard, findCards } from './card.controller'

export const cardRouter = Router()

cardRouter.get('/', async (req, res) => {
  try {
    const cards = await findCards(req.body)
    response.success(req, res, cards, 200)
  } catch (error) {
    response.error(req, res, error, 500)
  }
})

cardRouter.post('/', async (req, res) => {
  try {
    const createdMessage = await createCard(req.body)
    response.success(req, res, createdMessage, 201)
  } catch (error) {
    response.error(req, res, error.message, 500, error)
  }
})
