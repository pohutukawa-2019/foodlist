import { editFood } from './foods'

jest.mock('./requestor', () => {
  return (endpoint, method, payload) => {
    const id = endpoint.split('/').pop()
    if (payload.id === id) {
      return Promise.resolve(null)
    } else {
      return Promise.reject(new Error('Hit the API error message'))
    }
  }
})

describe('editFood API', () => {
  it('posts the correct food to the database', () => {
    const food = {
      id: '10',
      name: 'Orange',
      category: 'fruits',
      carbon_output: 101,
      water_usage: 88
    }
    return editFood(food)
      .then(res => {
        expect(res).toBe(null)
      })
  })
})
