const asyncHandler = require('express-async-handler')
const generateToken = require('../../utils/generateToken')
const User = require('../../models/User')

//@desc Auth user & get token
//@route POST /api/auth/login
//@access Public
const login = asyncHandler(async (req, res) => {
  try {
    // Need to make a login function
    const { username, password } = req.body
    const user = await User.findOne({
      where: {
        username,
      },
    })
    if (!user) {
      return res.status(400).json({
        message: 'Invalid credentials',
      })
    }
    const isMatch = await user.checkPassword(password)
    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid credentials',
      })
    }
    const token = generateToken(user)
    res.status(200).json({
      token,
      ...user,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: `Server Error: ${error}`,
    })
  }
})

module.exports = login
