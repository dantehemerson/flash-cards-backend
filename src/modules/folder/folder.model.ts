import { Model } from '../../mysql/model'
import { Folder } from './folder.interface'
import { PaginationQuery } from '../../types/pagination.types'
import { parsePaginationOptions } from '../../utils/pagination.utils'

export class FolderModel extends Model {
  static applyKeys = {
    search: 'name'
  }

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

  async getFolders(options: PaginationQuery): Promise<Folder[]> {
    const paginationOptionsStr = parsePaginationOptions(options, FolderModel.applyKeys)
    const folders: any = await this.db.query(`SELECT * FROM ${this.name} WHERE ${paginationOptionsStr}`)

    return folders
  }
}
