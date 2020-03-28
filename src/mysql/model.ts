import { Pool } from 'mysql'
import { db } from './db'

export class Model {
  protected db: Pool
  protected name: string

  constructor(name: string) {
    this.db = db
    this.name = name
  }
}
