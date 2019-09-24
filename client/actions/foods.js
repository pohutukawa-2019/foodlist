import { error } from './error'
import fetchFoods from '../api/fetchFoods'
import { fetchFoodsByCategory, appendFood } from '../api/foods'

export const GET_FOOD_PENDING = 'GET_FOOD_PENDING'
export const GET_FOOD_SUCCESS = 'GET_FOOD_SUCCESS'
export const GET_CATEGORY_PENDING = 'GET_CATEGORY_PENDING'
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS'
export const ADD_FOOD_PENDING = 'ADD_FOOD_PENDING'
export const ADD_FOOD_SUCCESS = 'ADD_FOOD_SUCCESS'

export function getFoodsPending () {
  return {
    type: GET_FOOD_PENDING
  }
}

export function getFoodsSuccess (foods) {
  return {
    type: GET_FOOD_SUCCESS,
    foods
  }
}

export function getFoods () {
  return dispatch => {
    dispatch(getFoodsPending())
    return fetchFoods()
      .then(foods => {
        dispatch(getFoodsSuccess(foods))
      })
      .catch(err => {
        dispatch(error(err.message))
      })
  }
}

export function getCategoryPending () {
  return {
    type: GET_CATEGORY_PENDING
  }
}

export function getCategorySuccess (category) {
  return {
    type: GET_CATEGORY_SUCCESS,
    category
  }
}

export function getFoodsByCategory (categoryName) {
  return dispatch => {
    dispatch(getCategoryPending())
    return fetchFoodsByCategory(categoryName)
      .then(foods => dispatch(getCategorySuccess(foods)))
      .catch(err => dispatch(error(err.message)))
  }
}

export function addFoodPending () {
  return {
    type: ADD_FOOD_PENDING
  }
}

export function addFoodSuccess () {
  return {
    type: ADD_FOOD_SUCCESS
  }
}

export function addNewFood (food) {
  return dispatch => {
    dispatch(addFoodPending())
    return appendFood(food)
      .then(() => dispatch(addFoodSuccess()))
      .catch(err => dispatch(error(err.message)))
  }
}
