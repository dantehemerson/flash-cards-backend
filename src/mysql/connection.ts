import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sql_store'
})

connection.connect(error => {
  if (error) {
    console.error('Error connecting to MySQL ', error)
  }

  console.error('Connected to MySQL')
})
