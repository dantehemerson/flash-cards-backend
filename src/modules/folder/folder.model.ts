import { Model } from '../../mysql/model'

export class FolderModel extends Model {
  constructor() {
    super('folder')
  }

  async getFolders() {
    const folders: any = await this.db.query(`SELECT * FROM ${this.name}`)

    return folders
  }
}
