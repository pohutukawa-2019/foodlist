export default {
  get: (path) => {
    switch (path) {
      case '/api/v1/foods/3':
        return Promise.resolve({
          id: 3,
          name: 'Turkey',
          category: 'Meat',
          carbon_output: 403,
          water_usage: 52
        })
      case '/api/v1/foods/33':
        return Promise.reject(new Error('Fake network error.'))
      case '/api/v1/foods/category/meat':
        return Promise.resolve({
          body: [
            {
              id: 1,
              name: 'Lamb'
            },
            {
              id: 2,
              name: 'Beef'
            }
          ]
        })
      case '/api/v1/foods/category/does-not-exist':
        return Promise.reject(new Error('Fake error'))
    }
  }
}
