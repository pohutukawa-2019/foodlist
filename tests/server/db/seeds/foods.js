exports.seed = (knex) =>
  knex('water_usages').del()
    .then(() => knex('carbon_outputs').del())
    .then(() => knex('foods').del())
    .then(() => knex('categories').del())
    .then(() =>
      knex('categories').insert([
        { id: 1, name: 'Fruits' },
        { id: 2, name: 'Vegetables' },
        { id: 3, name: 'Grains, beans, and legumes' },
        { id: 4, name: 'Fish' },
        { id: 5, name: 'Meat' },
        { id: 6, name: 'Animal byproducts' }
      ]))
    .then(() =>
      knex('foods').insert([
        { id: 1, name: 'Lamb', category_id: 5 },
        { id: 2, name: 'Beef', category_id: 5 },
        { id: 3, name: 'Turkey', category_id: 5 },
        { id: 4, name: 'Broccoli', category_id: 2 },
        { id: 5, name: 'Tuna', category_id: 4 },
        { id: 6, name: 'Salmon', category_id: 4 },
        { id: 7, name: 'Cheese', category_id: 6 },
        { id: 8, name: 'Pork', category_id: 5 },
        { id: 9, name: 'Greek Yogurt', category_id: 6 },
        { id: 10, name: 'Chicken', category_id: 5 },
        { id: 11, name: 'Milk', category_id: 6 },
        { id: 12, name: 'Eggs', category_id: 6 },
        { id: 13, name: 'Rice', category_id: 3 },
        { id: 14, name: 'Potatoes', category_id: 2 },
        { id: 15, name: 'Beans', category_id: 3 },
        { id: 16, name: 'Tomatoes', category_id: 1 },
        { id: 17, name: 'Tofu', category_id: 3 },
        { id: 18, name: 'Lentils', category_id: 3 },
        { id: 19, name: 'Peanut Butter', category_id: 3 },
        { id: 20, name: 'Nuts', category_id: 3 },
        { id: 21, name: 'Oranges', category_id: 1 },
        { id: 22, name: 'Apples', category_id: 1 },
        { id: 23, name: 'Corn', category_id: 2 },
        { id: 24, name: 'Lettuce', category_id: 2 },
        { id: 25, name: 'Strawberries', category_id: 1 },
        { id: 26, name: 'Avocados', category_id: 1 },
        { id: 27, name: 'Plums', category_id: 1 }
      ]))
    .then(() =>
      knex('carbon_outputs').insert([
        { id: 1, food_id: 1, value: 20.85 },
        { id: 2, food_id: 2, value: 13.78 },
        { id: 3, food_id: 3, value: 5.83 },
        { id: 4, food_id: 4, value: 5.71 },
        { id: 5, food_id: 5, value: 5.26 },
        { id: 6, food_id: 6, value: 5.15 },
        { id: 7, food_id: 7, value: 4.47 },
        { id: 8, food_id: 8, value: 4.45 },
        { id: 9, food_id: 9, value: 3.49 },
        { id: 10, food_id: 10, value: 3.37 },
        { id: 11, food_id: 11, value: 3.17 },
        { id: 12, food_id: 12, value: 3.06 },
        { id: 13, food_id: 13, value: 2.08 },
        { id: 14, food_id: 14, value: 1.46 },
        { id: 15, food_id: 15, value: 1.40 },
        { id: 16, food_id: 16, value: 1.39 },
        { id: 17, food_id: 17, value: 1.38 },
        { id: 18, food_id: 18, value: 0.78 },
        { id: 19, food_id: 19, value: 0.42 },
        { id: 20, food_id: 20, value: 0.39 },
        { id: 21, food_id: 21, value: 1.70 },
        { id: 22, food_id: 22, value: 1.20 },
        { id: 23, food_id: 25, value: 7.20 },
        { id: 24, food_id: 23, value: 2.70 },
        { id: 25, food_id: 24, value: 4.72 },
        { id: 26, food_id: 26, value: 2.53 },
        { id: 27, food_id: 27, value: 1.55 }
      ]))
    .then(() =>
      knex('water_usages').insert([
        { id: 1, food_id: 2, value: 15000 },
        { id: 2, food_id: 7, value: 5000 },
        { id: 3, food_id: 8, value: 4800 },
        { id: 4, food_id: 10, value: 3900 },
        { id: 5, food_id: 11, value: 1020 },
        { id: 6, food_id: 13, value: 3400 },
        { id: 7, food_id: 16, value: 180 },
        { id: 8, food_id: 20, value: 3100 },
        { id: 9, food_id: 14, value: 250 },
        { id: 10, food_id: 12, value: 3265 },
        { id: 11, food_id: 1, value: 8763 },
        { id: 12, food_id: 18, value: 4055 },
        { id: 13, food_id: 4, value: 322 },
        { id: 14, food_id: 17, value: 925 },
        { id: 15, food_id: 6, value: 1400 },
        { id: 16, food_id: 9, value: 2000 },
        { id: 17, food_id: 19, value: 625 },
        { id: 18, food_id: 3, value: 5291 },
        { id: 19, food_id: 25, value: 276 },
        { id: 20, food_id: 22, value: 420 },
        { id: 21, food_id: 23, value: 900 },
        { id: 22, food_id: 24, value: 237 },
        { id: 23, food_id: 26, value: 1284 },
        { id: 24, food_id: 27, value: 1612 },
        { id: 25, food_id: 5, value: null },
        { id: 26, food_id: 15, value: null },
        { id: 27, food_id: 21, value: 220 }
      ]))
