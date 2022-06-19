const asyncHandler = require('express-async-handler')
const generateToken = require('../../utils/generateToken')
const User = require('../../models/User')

//@desc Auth user & get token
//@route POST /api/auth/login
//@access Public

const register = asyncHandler(async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
      isAdmin: req.body.isAdmin,
    })
    console.log('user', user)
    //check if user is already in the database
    if (!user) {
      return res.status(400).json({
        success: false,
        error: 'User already exists',
      })
    }

    //generate token
    const token = generateToken(user.id, user.role)
    res.status(200).json({
      token,
      data: user,
      message: `Welcome ${user.name}`,
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      success: false,
      error: `Server Error: ${error}`,
    })
  }
})

module.exports = register
