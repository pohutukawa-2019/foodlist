exports.up = knex =>
  knex.schema.createTable('carbon_outputs', (table) => {
    table.increments('id').primary()
    table.integer('foods_id')
      .references('foods.id')
    table.decimal('value', null, 2)
  })

exports.down = knex => knex.schema.dropTable('carbon_outputs')
