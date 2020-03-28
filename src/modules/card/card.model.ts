import { Card } from './card.interface'
import { Model } from 'src/mysql/model'

export class CardModel extends Model {
  async create(card: Card) {
    this.db.sql('INSERT INTO card ')
  }
}
