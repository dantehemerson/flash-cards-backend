import { PaginationQuery } from 'src/types/pagination.types'

const defaults = {
  search: term => `"%${term}%"`
}

export function parsePaginationOptions(options: PaginationQuery, applyKeys) {
  return Object.keys(options).reduce((query, key) => {
    if (defaults[key]) {
      return query + applyKeys[key] + ' LIKE ' + defaults[key](options[key])
    }
  }, '')
}
