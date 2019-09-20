export const foods = [
  {
    id: 1,
    name: 'Lamb'
  },
  {
    id: 2,
    name: 'Beef'
  }
]

export function getFoodsByCategory (category) {
  switch (category) {
    case 'meat':
      return Promise.resolve(
        foods
      )
    default:
      return Promise.reject(new Error('Category does not exist'))
  }
}
