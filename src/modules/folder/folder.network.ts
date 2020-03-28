import { Router } from 'express'
import { findFolders, createFolder } from './folder.controller'
import { response } from '../../response'

export const folderRouter = Router()

folderRouter.get('/', async (req, res) => {
  try {
    const folders = await findFolders(req.body)
    response.success(req, res, folders, 200)
  } catch (error) {
    response.error(req, res, error, 500)
  }
})

folderRouter.post('/', async (req, res) => {
  try {
    const createdFolder = await createFolder(req.body)

    response.success(req, res, createdFolder, 200)
  } catch (error) {
    response.error(req, res, error, 500)
  }
})
