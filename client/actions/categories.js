import request from 'superagent'

export const GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const ERROR = 'ERROR'

export function getCategoriesPending () {
  return {
    type: GET_CATEGORIES_PENDING
  }
}

export function getCategoriesSuccess (categories) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    categories
  }
}

export function getCategoriesError (error) {
  return {
    type: ERROR,
    message: error
  }
}

export function getCategories (categories) {
  return (dispatch) => {
    dispatch(getCategoriesPending())
    return request
      .get(`api/v1/categories/${categories}`)
      .then(res => {
        dispatch(getCategoriesSuccess(res.body))
      })
      .catch(err => {
        dispatch(getCategoriesError(err.message))
      })
  }
}
