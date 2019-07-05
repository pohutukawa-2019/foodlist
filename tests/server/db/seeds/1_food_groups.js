exports.seed = knex =>
  knex('food_groups').del()
    .then(() =>
      knex('food_groups').insert([
        { id: 1, name: 'Fruits' },
        { id: 2, name: 'Vegetables' },
        { id: 3, name: 'Grains, beans, and legumes' },
        { id: 4, name: 'Fish' },
        { id: 5, name: 'Meat' },
        { id: 6, name: 'Animal byproducts' }
      ]))
