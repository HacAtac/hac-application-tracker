const express = require('express')
const router = express.Router()
const application = require('../controllers/Application/application')

const { protect, admin } = require('../middleware/authMiddleware')

/**
 * @Description These Routes are specific to Authorized Users or Admin
 * @Access Protected
 * @Route POST /api/application
 */

router.route('/').post(protect, application)

module.exports = router
