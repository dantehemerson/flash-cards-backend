import { Model } from '../../mysql/model'
import { Folder } from './folder.interface'

export class FolderModel extends Model {
  constructor() {
    super('folder')
  }

  async create(folder: Folder): Promise<Folder> {
    const insertInfo: any = await this.db.query(`INSERT INTO ${this.name} SET ?`, folder)
    return {
      ...folder,
      folder_id: insertInfo.insertId
    }
  }

  async getFolders(): Promise<Folder[]> {
    const folders: any = await this.db.query(`SELECT * FROM ${this.name}`)

    return folders
  }
}
