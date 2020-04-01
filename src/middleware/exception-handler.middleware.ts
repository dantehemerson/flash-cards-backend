import { Request, NextFunction, Response } from 'express'
import { HttpException } from '../exceptions/http.exception'
import { isObject } from '../utils/shared.utils'

export const exceptionHandler = (
  errorException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!(errorException instanceof HttpException)) {
    return res.json({
      error: 'Error doesnt exists'
    })
  }

  const response = errorException.getReponse()
  const message = isObject(response)
    ? response
    : {
        statusCode: errorException.getStatus(),
        message: response
      }
  res.status(errorException.getStatus())
  res.json(message)
}
