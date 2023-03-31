const express = require('express')
const router = express.Router()

const controller = require('../controller/controller')

router.get('/', controller.getHomePage)

router.get('/register', controller.getRegisterPage)

router.get('/login', controller.getLoginPage)

router.get('/post', controller.getCreatePostPage)

router.post('/post', controller.createNewPost)

module.exports = router
