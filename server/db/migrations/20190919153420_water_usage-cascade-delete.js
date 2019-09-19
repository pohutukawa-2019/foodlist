exports.up = function (knex, Promise) {
  return deleteWaterUsageTable()
    .then(createNewWaterUsageTable)

  function deleteWaterUsageTable () {
    return knex.schema.dropTableIfExists('water_usages')
  }

  function createNewWaterUsageTable () {
    return knex.schema.createTable('water_usages', (table) => {
      table.increments('id').primary()
      table.integer('food_id')
        .references('foods.id')
        .onDelete('CASCADE')
      table.decimal('value', null, 2)
    })
  }
}

exports.down = function (knex, Promise) {
  return deleteWaterUsageTable()
    .then(recreateOriginalWaterUsageTable)

  function deleteWaterUsageTable () {
    return knex.schema.dropTableIfExists('water_usages')
  }

  function recreateOriginalWaterUsageTable () {
    return knex.schema.createTable('water_usages', (table) => {
      table.increments('id').primary()
      table.integer('food_id')
        .references('foods.id')
      table.decimal('value', null, 2)
    })
  }
}
