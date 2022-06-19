const asyncHandler = require('express-async-handler')
const { Application } = require('../../models')

//@desc GET one application
//@route GET /api/application/:id
//@access Private Authorized or Admin

const getApp = asyncHandler(async (req, res) => {
  try {
    const application = await Application.findOne({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      data: application,
      message: `${req.user.username} retrieved one application`,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: `Server Error: ${error}`,
    })
  }
})

module.exports = getApp
