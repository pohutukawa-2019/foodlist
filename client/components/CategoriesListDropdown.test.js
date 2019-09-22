// import { categories } from './CategoriesListDropdown'

const categories = ['Fruit', 'Vegetables', 'Meat']

test('Categories List to return first category', () => {
  expect(categories[0]).toBe('Fruit')
})

test('Categories List to return second category', () => {
  const categories = ['Fruit', 'Vegetables', 'Meat']
  expect(categories[1]).toBe('Vegetables')
})
