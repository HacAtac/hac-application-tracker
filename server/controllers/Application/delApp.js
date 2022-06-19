const asyncHandler = require('express-async-handler')
const { Application } = require('../../models')

//@desc DEL delete a application
//@route DEL /api/application/:id
//@access Private Authorized or Admin

const delApp = asyncHandler(async (req, res) => {
  try {
    const application = await Application.destroy({
      where: { id: req.params.id },
    })
    //check if the application exists
    if (!application) {
      return res.status(404).json({
        message: `Application not found`,
      })
    }

    res.status(200).json({
      message: `${req.user.username} deleted an application with id: ${req.params.id}`,
      userId: req.user.id,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: `Server Error: ${error}`,
    })
  }
})

module.exports = delApp
