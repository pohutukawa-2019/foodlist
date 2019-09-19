import { combineReducers } from 'redux'

import foods from './foods'
import error from './error'
import pending from './pending'
import categories from './categories'

export default combineReducers({
  foods,
  error,
  pending,
  categories
})
