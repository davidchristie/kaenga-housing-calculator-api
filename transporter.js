const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD
  }
})

module.exports = transporter
