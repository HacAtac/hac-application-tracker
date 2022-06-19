const asyncHandler = require('express-async-handler')
const Application = require('../../models/Application')

//@desc POST new application
//@route POST /api/application
//@access Private Authorized or Admin

const application = asyncHandler(async (req, res) => {
  try {
    const application = await Application.create({
      ...req.body,
    })

    res.status(200).json({
      data: application,
      message: `Application created successfully`,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: `Server Error: ${error}`,
    })
  }
})

module.exports = application
