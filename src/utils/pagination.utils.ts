import { PaginationQuery } from 'src/types/pagination.types'

const defaults = {
  search: (term: string, key: string) => `${key} LIKE "%${term}%"`,
  limit: (limit: number) => `LIMIT ${limit}`,
  skip: (skip: number) => `OFFSET ${skip}`
}

export function parsePaginationOptions(options: PaginationQuery, applyKeys) {
  const keys = Object.keys(options)
  return keys.length
    ? keys.reduce((query, key) => {
        if (defaults[key]) {
          return `${query} ${defaults[key](options[key], applyKeys[key])}`
        }
      }, 'WHERE ')
    : ''
}
