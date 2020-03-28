import { CardModel } from './card.model'
import { Card } from './card.interface'
import { PaginationQuery } from '../../types/pagination.types'

const cardModel = new CardModel()

export async function createCard(card: Card): Promise<Card> {
  return await cardModel.create(card)
}

export async function findCards(options: PaginationQuery): Promise<Card[]> {
  return await cardModel.findCards(options)
}
