const express = require('express')
const bodyParser = require('body-parser')

const transporter = require('./transporter')

const server = express()

server.use(bodyParser.json())

server.post('/v1/register', (req, res) => {
  const message = {
    to: process.env.NOTIFIED_EMAIL,
    subject: 'Kaenga Housing Calculator Registration',
    text: JSON.stringify(req.body)
  }

  transporter.sendMail(message, (error, info) => {
    if (error) return console.log(error)
    console.log('Message %s sent: %s', info.messageId, info.response)
  })

  res.send('Successfully registered with Kaenga.')
})

module.exports = server
