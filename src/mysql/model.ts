import { Pool } from 'mysql'
import { db } from './db'

export class Model {
  protected db: Pool

  constructor() {
    this.db = db
  }
}
