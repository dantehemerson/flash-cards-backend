import { Card } from './card.interface'
import { Model } from '../../mysql/model'

export class CardModel extends Model {
  constructor() {
    super('card')
  }

  async create(card: Card): Promise<Card> {
    const res: any = await this.db.query(`INSERT INTO ${this.name} SET ?`, card)
    return {
      ...card,
      card_id: res.insertId
    }
  }
}
