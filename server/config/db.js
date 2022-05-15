import Sequelize from 'sequelize'
//import errorHandler from middleware/errorMiddleware.js
//import { notFound, errorHandler } from '../middleware/errorMiddleware.js'

const connectDB = async () => {
  try {
    const sequelize = process.env.JAWSDB_URL
      ? new Sequelize(process.env.JAWSDB_URL)
      : new Sequelize(
          process.env.DB_NAME,
          process.env.DB_USER,
          process.env.DB_PW,
          {
            host: process.env.DB_HOST,
            dialect: 'mysql',
            port: 3306,
          }
        )

    await sequelize.authenticate()
    console.log('Connection has been established successfully.'.green.bold)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
  }
}

export default connectDB
