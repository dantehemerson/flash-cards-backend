import { Router } from 'express'
import { response } from '../../response'
import { createCard, findCards } from './card.controller'
import { ConflictException } from '../../exceptions/conflict.exception'
import { HttpException } from '../../exceptions/http.exception'

export const cardRouter = Router()

cardRouter.get('/', async (req, res) => {
  try {
    const cards = await findCards(req.body)
    response.success(req, res, cards, 200)
  } catch (error) {
    response.error(req, res, error, 500)
  }
})

cardRouter.post('/', async (req, res, next) => {
  try {
    let createdMessage
    try {
      createdMessage = await createCard(req.body)
    } catch (err) {
      throw new ConflictException('Error creating....')
    }
    response.success(req, res, createdMessage, 201)
  } catch (error) {
    next(error)
  }
})
