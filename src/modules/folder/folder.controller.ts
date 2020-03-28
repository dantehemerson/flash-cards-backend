import { Folder } from './folder.interface'
import { FolderModel } from './folder.model'

const folderModel = new FolderModel()

export async function getFolders(): Promise<any> {
  return await folderModel.getFolders()
}

export async function createFolder(folder: Folder): Promise<Folder> {
  return await folderModel.create(folder)
}
