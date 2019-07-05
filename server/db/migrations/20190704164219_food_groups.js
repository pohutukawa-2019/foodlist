exports.up = knex =>
  knex.schema.createTable('food_groups', (table) => {
    table.increments('id').primary()
    table.string('name')
  })

exports.down = knex => knex.schema.dropTable('food_groups')
