import { combineReducers } from 'redux'

import foods from './foods'
import error from './error'
import pending from './pending'

export default combineReducers({
  foods,
  error,
  pending
})
