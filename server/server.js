const path = require('path')
const express = require('express')

const foods = require('./routes/foods')
const categories = require('./routes/categories')

const server = express()

server.use(express.json())
server.use('/api/v1/foods', foods)
server.use('/api/v1/categories', categories)
server.use(express.static(path.join(__dirname, './public')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
