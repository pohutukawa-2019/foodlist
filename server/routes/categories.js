const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCategories()
    .then(categories => res.status(200).json(categories))
    .catch(() => res.status(500).send('Sorry, we have encountered a server error'))
})

module.exports = router
