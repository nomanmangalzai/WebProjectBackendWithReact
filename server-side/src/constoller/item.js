const express = require('express')
const res = require('express/lib/response')
const items = require('../models/item')

exports.postItem = async (req, res) => {
  console.log('Posting item API is being called')

  const { itemName, itemPrice } = req.body

  const check = await items.findOne({ ItemName: itemName })

  if (check) {
    return res.status(201).json({ message: 'duplicate items' })
  }

  const item = new items({
    ItemName: itemName,
    ItemPrice: itemPrice,
  })

  item
    .save()
    .then((result) => {
      return res
        .status(201)
        .json({ message: 'item stored', storedItems: result })
    })
    .catch((err) => {
      console.log('errror occured', err)
    })
}

// getting items from the database
exports.getItems = (request, response) => {
  console.log('get items API  has been called')
  items.find().then((result) => {
    console.log(result)
    return response
      .status(201)
      .json({ message: 'Items from db to home page!', storedItems: result })
  })
}

// The is delete API
// exports.deleteItem = async (req, res) => {
//   console.log('This is delete item API')
//   items.findOne(req.email).then((result) => {
//     console.log('The Item will be deleted')
//     item.delete().then((result) => {
//       return res
//         .status(201)
//         .json(
//           { message: 'The data has beens successfully deleted', storedItems: result }),
//         )
//     })
//   })
// }
