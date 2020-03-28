import { Card } from './card.interface'
import { Model } from '../../mysql/model'

export class CardModel extends Model {
  async create(card: Card) {
    const res = await this.db.query('SELECT * FROM flash_cards.card')
    console.log('Dante: CardModel -> create -> res', res)
  }
}
