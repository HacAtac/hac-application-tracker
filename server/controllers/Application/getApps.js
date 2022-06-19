const asyncHandler = require('express-async-handler')
const { Application } = require('../../models')

//@desc GET all applications
//@route GET /api/application
//@access Private Authorized or Admin

const getApps = asyncHandler(async (req, res) => {
  try {
    const applications = await Application.findAll()
    res.status(200).json({
      data: applications,
      message: `${req.user.username} retrieved all applications`,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: `Server Error: ${error}`,
    })
  }
})

module.exports = getApps
