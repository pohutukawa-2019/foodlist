const connection = require('./connection')

function getFoods (db = connection) {
  return db('foods')
}

module.exports = {
  getFoods
}
