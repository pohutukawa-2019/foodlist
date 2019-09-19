exports.up = function (knex, Promise) {
  return deleteCarbonOutputsTable()
    .then(createNewCarbonOutputsTable)

  function deleteCarbonOutputsTable () {
    return knex.schema.dropTableIfExists('carbon_outputs')
  }

  function createNewCarbonOutputsTable () {
    return knex.schema.createTable('carbon_outputs', table => {
      table.increments('id').primary()
      table.integer('food_id')
        .references('foods.id')
        .onDelete('CASCADE')
      table.decimal('value', null, 2)
    })
  }
}

exports.down = function (knex, Promise) {
  return deleteCarbonOutputsTable()
    .then(recreateOriginalCarbonOutputsTable)

  function deleteCarbonOutputsTable () {
    return knex.schema.dropTableIfExists('carbon_outputs')
  }

  function recreateOriginalCarbonOutputsTable () {
    return knex.schema.createTable('carbon_outputs', table => {
      table.increments('id').primary()
      table.integer('food_id')
        .references('foods.id')
      table.decimal('value', null, 2)
    })
  }
}
