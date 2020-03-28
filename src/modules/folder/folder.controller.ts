import { Folder } from './folder.interface'
import { FolderModel } from './folder.model'
import { PaginationQuery } from 'src/types/pagination.types'

const folderModel = new FolderModel()

export async function findFolders(options: PaginationQuery): Promise<any> {
  return await folderModel.findFolders(options)
}

export async function createFolder(folder: Folder): Promise<Folder> {
  return await folderModel.create(folder)
}
