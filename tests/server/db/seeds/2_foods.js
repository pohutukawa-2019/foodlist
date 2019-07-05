exports.seed = knex =>
  knex('foods').del()
    .then(() =>
      knex('foods').insert([
        { name: 'Lamb' },
        { name: 'Beef' },
        { name: 'Turkey' },
        { name: 'Broccoli' },
        { name: 'Tuna' },
        { name: 'Salmon' },
        { name: 'Cheese' },
        { name: 'Pork' },
        { name: 'Yogurt' },
        { name: 'Chicken' },
        { name: 'Milk' },
        { name: 'Eggs' },
        { name: 'Rice' },
        { name: 'Potatoes' },
        { name: 'Beans' },
        { name: 'Tomatoes' },
        { name: 'Tofu' },
        { name: 'Lentils' },
        { name: 'Peanut butter' },
        { name: 'Nuts' }
      ]))
