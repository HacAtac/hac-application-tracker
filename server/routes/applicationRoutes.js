const express = require('express')
const router = express.Router()
const application = require('../controllers/Application/application')
const putApplication = require('../controllers/Application/putApplication')
const delApp = require('../controllers/Application/delApp')

const { protect, admin } = require('../middleware/authMiddleware')

/**
 * @Description These Routes are specific to Authorized Users or Admin
 * @Access Protected
 * @Route POST /api/application
 */

router.route('/').post(protect, application)
router.route('/:id').put(protect, putApplication).delete(protect, admin, delApp)

module.exports = router
