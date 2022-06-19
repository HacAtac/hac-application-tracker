const asyncHandler = require('express-async-handler')
const generateToken = require('../../utils/generateToken')
const User = require('../../models/User')

//@desc Auth user & get token
//@route POST /api/auth/login
//@access Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  // Check if user exists
  const user = await User.findOne({ where: { email } })
  if (!user) {
    return res.status(400).json({
      success: false,
      message: 'Invalid credentials',
    })
  }
  // Check if password is correct
  const isMatch = await user.matchPassword(password)
  if (!isMatch) {
    return res.status(400).json({
      success: false,
      message: 'Invalid credentials',
    })
  }
  // Generate token
  const token = generateToken(user)
  // Respond with token
  res.status(200).json({
    success: true,
    token,
  })
})

module.exports = login
