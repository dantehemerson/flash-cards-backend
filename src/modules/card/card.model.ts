import { Card } from './card.interface'
import { Model } from '../../mysql/model'
import { PaginationQuery } from '../../types/pagination.types'
import { parsePaginationOptions } from '../../utils/pagination.utils'

export class CardModel extends Model {
  static applyKeys = {
    search: 'title'
  }

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

  async findCards(options: PaginationQuery): Promise<Card[]> {
    const paginationOptionsStr = parsePaginationOptions(options, CardModel.applyKeys)
    const cards: any = await this.db.query(`SELECT * FROM ${this.name} ${paginationOptionsStr}`)

    return cards
  }
}
