import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/authConstants'
import { setAlert } from './alert'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const { data } = await axios.post('/api/auth/login', {
      email,
      password,
    })
    console.log(data)
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('user', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
    dispatch(
      setAlert(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        'danger'
      )
    )
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('user')
  localStorage.removeItem('users')
  localStorage.removeItem('subs')
  dispatch({ type: USER_LOGOUT })
  document.location.href = '/login'
}

export const register =
  ({ user, subscription }, partner = '') =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })
      const { data } = await axios.post(
        `/api/auth/register?partnerid=${partner}`,
        {
          user,
          subscription,
        }
      )

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      })
      localStorage.setItem('user', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
      dispatch(
        setAlert(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
          'danger'
        )
      )
    }
  }