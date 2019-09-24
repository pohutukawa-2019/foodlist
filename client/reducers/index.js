import { combineReducers } from 'redux'

import foods from './foods'
import error from './error'
import pending from './pending'
import categories from './categories'
import foodDetails from './foodDetails'
import sortType from './sortType'
import addedFood from './addedFood'

export default combineReducers({
  foods,
  error,
  pending,
  categories,
  foodDetails,
  sortType,
  addedFood
})
