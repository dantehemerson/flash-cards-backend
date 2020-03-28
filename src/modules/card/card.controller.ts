import { CardModel } from './card.model'
import { Card } from './card.interface'

const cardModel = new CardModel()

export async function createCard(card: Card): Promise<any> {
  return await cardModel.create(card)
}
