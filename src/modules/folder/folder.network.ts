import { Router } from 'express'
import { getFolders } from './folder.controller'
import { response } from '../../response'

export const folderRouter = Router()

folderRouter.get('/', async (req, res) => {
  try {
    const folders = await getFolders()
    response.success(req, res, folders, 200)
  } catch (error) {
    res.json({
      error
    })
  }
})

folderRouter.post('/', async (req, res) => {})
