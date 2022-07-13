const knex = require('knex')
const config = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "coderhouse",
  },
  pool: { min: 0, max: 7 },
}
const databaseConnectionMySql = knex(config)

const configSQLite3 = {
    client: "sqlite3",
    connection: { filename: './db/mydb.sqlite' },
    useNullAsDefault: true
  }
  
  const databaseConnectionSqlite3 = knex(configSQLite3)


module.exports = {
    databaseConnectionMySql, 
    databaseConnectionSqlite3
}