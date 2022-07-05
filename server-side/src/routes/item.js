const express = require('express')
const itemController = require('../constoller/item')
const router = express.Router()

router.post('/add-item', itemController.postItem)
router.get('/get-items-to-homepage', itemController.getItems)
//router.post('/delete-item', itemController.deleteItem)

module.exports = router
