import { HttpException } from './http.exception'
import { HttpStatus } from 'src/enums/http-status.enum'

export class BadRequestException extends HttpException {
  constructor(
    objectOrError?: string | object | any,
    description: string = 'Bad Request'
  ) {
    super(
      HttpException.createBody(objectOrError, description, HttpStatus.BAD_REQUEST),
      HttpStatus.BAD_REQUEST
    )
  }
}
