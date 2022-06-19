const Sequelize = require('sequelize')

require('dotenv').config()

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    })

// console log a message to let us know if the connection is successful
console.log(`Connected to ${process.env.DB_NAME}`.rainbow)
console.log(`Connected to ${process.env.DB_USER}`.rainbow)
console.log(`Connected to ${process.env.DB_PW}`.rainbow)
console.log(`Connected to ${process.env.JAWSDB_URL}`.rainbow)
console.log(`Connected to ${process.env.DB_HOST}`.rainbow)
console.log(`Welcome, and happy Hacking!!`.red)

module.exports = sequelize
