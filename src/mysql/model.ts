import { connection } from './connection'

export class Model {
  protected db

  constructor() {
    this.db = connection
  }
}
