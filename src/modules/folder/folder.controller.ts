import { FolderModel } from './folder.model'

const folderModel = new FolderModel()

export async function getFolders(): Promise<any> {
  return await folderModel.getFolders()
}
