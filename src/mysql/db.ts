import mysql, { Pool, QueryFunction } from 'mysql'
import { promisify } from 'util'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'flash_cards'
})

pool.getConnection((error, connection) => {
  if (error) {
    if (error.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (error.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has to many connections')
    }
    if (error.code === 'ECONNREFUSED') {
      console.error('Database connection was refused')
    }
  }

  if (connection) connection.release()
  console.log('Connected to MySQL')

  return
})

pool.query = promisify<QueryFunction>(pool.query as any)

export const db: Pool = pool
