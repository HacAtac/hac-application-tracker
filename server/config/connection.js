//import the Sequelize constructor function from the Sequelize library
const Sequelize = require("sequelize");

//require dotenv to read the .env file
require("dotenv").config();

//create connection to our db, passin in your MySQL info for username and pass
//later we will use .env to hide this info
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
