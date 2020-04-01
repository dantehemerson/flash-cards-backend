import { HttpException } from './http.exception'
import { HttpStatus } from '../enums/http-status.enum'

export class ConflictException extends HttpException {
  constructor(objectOrError?: string | object | any, description: string = 'Conflict') {
    super(
      HttpException.createBody(objectOrError, description, HttpStatus.CONFLICT),
      HttpStatus.CONFLICT
    )
  }
}
