const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  //custom sequelize error handler
  if (err.name === 'SequelizeValidationError') {
    res.status(400).json({
      status: 400,
      message: err.message,
      errors: err.errors,
    })
  } else if (err.name === 'JsonWebTokenError') {
    res.status(401).json({
      status: 401,
      message: err.message,
    })
  } else if (err.name === 'SequelizeUniqueConstraintError') {
    res.status(400).json({
      status: 400,
      message: err.message,
    })
  } else {
    res.status(statusCode).json({
      status: statusCode,
      message: err.message,
    })
  }
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  })
}

export { notFound, errorHandler }
