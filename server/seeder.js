import sequelize from 'sequelize'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import connectDB from './config/db.js'
import User from './models/User.js'

dotenv.config()

const importData = async () => {
  try {
    await User.deleteMany()

    const createdUsers = await User.bulkCreate(users)

    // const adminUser = createdUsers[0]

    console.log('Data successfully loaded!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`Error: ${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany()

    console.log('Data successfully destroyed!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`Error: ${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
