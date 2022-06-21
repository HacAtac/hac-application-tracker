const path = require('path')
const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const colors = require('colors')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

const authRoutes = require('./routes/authRoutes')
const applicationRoutes = require('./routes/applicationRoutes')

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

const sequelize = require('./config/config')

app.use(express.json())
//app.use(express.urlencoded({ extended: false }))

app.use('/api/auth', authRoutes)
app.use('/api/application', applicationRoutes)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`.yellow)
  sequelize.sync({ force: false })
})
