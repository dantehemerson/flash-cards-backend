import { Card } from './card.interface'
import { Model } from '../../mysql/model'

export class CardModel extends Model {
  async create(card: Card) {
    const res: any = await this.db.query('INSERT INTO card SET ?', card)
    return {
      ...card,
      id: res.insertedId
    }
  }
}
