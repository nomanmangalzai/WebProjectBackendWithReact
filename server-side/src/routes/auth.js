const express = require('express')
const authController = require('../constoller/auth')
const router = express.Router()

router.post('/sign-up', authController.SignUp)
router.put('/change-passoword', authController.changePassword)
router.post('/login', authController.login)
// router.post('/homepage,'authController.login)
// router.put('/change-email', authController.changeEmail)

module.exports = router
