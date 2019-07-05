exports.up = knex =>
  knex.schema.createTable('water_usages', (table) => {
    table.increments('id').primary()
    table.integer('foods_id')
      .references('foods.id')
    table.decimal('value', null, 2)
  })

exports.down = knex => knex.schema.dropTable('water_usages')
