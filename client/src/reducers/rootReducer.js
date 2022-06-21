import { combineReducers } from 'redux'

//reducers
import { alert } from './alertReducer'
import { authReducer } from './authReducer'

export const rootReducer = combineReducers({
  // Auth Reducesrs
  auth: authReducer,
  // Alert Reducers
  alert: alert,
})
