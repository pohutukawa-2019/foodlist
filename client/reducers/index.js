import { combineReducers } from 'redux'

import foods from './foods'
import error from './error'
import pending from './pending'
import categories from './categories'
import foodDetails from './foodDetails'

export default combineReducers({
  foods,
  error,
  pending,
  categories,
  foodDetails
})
