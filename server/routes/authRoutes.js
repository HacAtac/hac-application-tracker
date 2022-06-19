const express = require('express')
const router = express.Router()
const login = require('../controllers/Auth/login')
const register = require('../controllers/Auth/register')

const { protect } = require('../middleware/authMiddleware')

/**
 * @Description These Routes are specific to Authorized Users `Protected by JWT`
 * @Access Public
 * @Route POST /api/auth/login
 */

router.route('/login').post(login)
router.route('/register').post(register)

module.exports = router
