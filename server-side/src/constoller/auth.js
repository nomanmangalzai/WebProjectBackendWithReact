const express = require('express')
const res = require('express/lib/response')
const users = require('../models/auth')

//The variable "users" has your database schema in itself

exports.SignUp = async (req, res, next) => {
  console.log('The signup API has been called')

  const { email, password, confirmPassword } = req.body //destructure the given data in these variables

  const check = await users.findOne({ Email: email }) // Compare Email of database with email inserted in the signup page
  if (check) {
    return res.status(201).json({ message: 'User already exists!' }) // Return and stop code execution after the
  } //if condition

  if (password != confirmPassword) {
    //comparing password and confirm password entered in signup form
    return res
      .status(201)
      .json({ message: 'Password and confrim password dont match!' })
  }

  //console.log("email",email);

  // detecting duplicate users

  const user = new users({
    //  FullName:name,
    Email: email,
    Password: password,

  })

  user.save().then((result) => {
    res
      .status(201)
      .json({ message: 'User registered successfully!', User: result })
  })
}

//Update profile
//This is update API
exports.changePassword = (req, res) => {
  console.log('hello this is change password API')
  const id1 = req.body.id1
  const oldPassword = req.body.oldPassword
  const newPassword = req.body.newPassword
  const confirmNewPassword = req.body.confirmNewPassword

  if (newPassword != confirmNewPassword) {
    return res
      .status(400)
      .json({ message: 'newPassword and confrim password not match' })
  }

  users
    .findOne({ _id: id1 })
    .then((user) => {
      if (users.Password == oldPassword) {
        return res.status(201).json({ message: 'incorrected old password' })
      }

      user.Password = newPassword
      return user.save().then((result) => {
        res.status(201).json({
          message: 'password updated successfully',
          UpdatedPassword: result.newPassword,
        })
      })
    })
    .catch((err) => {
      console.log('error occured', err)
    })
}

// exports.changeEmail = (req, res) => {
//   console.log('change email API is called.')
//   const id1 = req.body.id
//   const oldEmail = req.body.oldEmail
//   const newEmail = req.body.newEmail
//   const confirmNewEmail = req.body.confirmNewEmail

//   users.findOne({ _id: id1 }).then((user) => {
//     //This condition is to check prohibit saving of the new email if it matches with the old email
//     if (newEmail === user.Email) {
//       return res
//         .status(201)
//         .json({ message: 'Sorry your new email matches with your old email' })
//       console.log('Sorry, email match.')
//     }

//     if (confirmNewEmail != newEmail) {
//       res
//         .status(201)
//         .json({ message: 'Confirm Email does not match new email' })
//     }
//     user.Email = newEmail
//     return user.save().then((result) => {
//       res.status(201).json({ message: 'Email Updated Successfully' })
//     })
//   })
// }

//get data from database for login
exports.login = async (req, res, nesxt) => {
  console.log('The login API has been called')
  const { email, password } = req.body //destructure the given data in these variables
  const check = await users.findOne({ Email: email })
  const check2 = await users.findOne({ Password: password })
  if (!check) {
    res.status(201).json({ message: 'Incorrect password or email address!' })
  }
  if (!check2) {
    res.status(201).json({ message: 'Incorrect password or email address!' })
  }
  if (check && check2) {
    console.log('email & password = ok')
    res.status(201).json({ message: 'Congratualtions! You have logged in' })
  }
} // SignIn API finishes here.
