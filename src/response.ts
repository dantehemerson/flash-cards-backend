import { Response, Request } from 'express'

function success(req: Request, res: Response, message: any, status?: number) {
  res.status(status || 200).send({
    error: '',
    body: message
  })
}

function error(req: Request, res: Response, message: any, status?: number, details?: string) {
  console.error(details)

  res.status(status || 500).send({
    error: message,
    body: ''
  })
}

export const response = {
  error,
  success
}
