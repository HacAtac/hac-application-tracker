import { combineReducers } from 'redux'

// reducers
import { alert } from './alertReducer'
import { authReducer } from './authReducer'

export const rootReducer = combineReducers({
  alert: alert,
  auth: authReducer,
})
