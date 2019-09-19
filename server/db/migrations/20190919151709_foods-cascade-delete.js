exports.up = function (knex, Promise) {
  return deleteFoodsTable()
    .then(createNewFoodsTable)

  function deleteFoodsTable () {
    return knex.schema.dropTableIfExists('foods')
  }

  function createNewFoodsTable () {
    return knex.schema.createTable('foods', table => {
      table.increments('id').primary()
      table.string('name')
      table.integer('category_id')
        .references('categories.id')
        .onDelete('CASCADE')
    })
  }
}

exports.down = function (knex, Promise) {
  return deleteFoodsTable()
    .then(recreateOriginalFoodsTable)

  function deleteFoodsTable () {
    return knex.schema.dropTableIfExists('foods')
  }

  function recreateOriginalFoodsTable () {
    return knex.schema.createTable('foods', table => {
      table.increments('id').primary()
      table.string('name')
      table.integer('category_id')
        .references('categories.id')
    })
  }
}
