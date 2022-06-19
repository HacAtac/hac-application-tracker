const asyncHandler = require('express-async-handler')
const { Application } = require('../../models')

//@desc PUT  update a application
//@route PUT /api/application/:id
//@access Private Authorized or Admin

const putApplication = asyncHandler(async (req, res) => {
  try {
    const application = await Application.update(
      { ...req.body },
      { where: { id: req.params.id } }
    )
    //check if the application exists
    if (!application) {
      return res.status(404).json({
        message: 'Application not found',
      })
    }

    res.status(200).json({
      application: application,
      message: `${req.user.username} updated an application`,
      userId: req.user.id,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: `Server Error: ${error}`,
    })
  }
})

module.exports = putApplication
