import {
    USER_LOADING, 
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types'
import { returnErrors } from './errorActions'
import axiosCall from '../api/axiosCall'

// Check Token And Load User
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING })

    axiosCall.get('/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data 
        }))
        .catch(err => {
            dispatch (returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
}

//Register User
export const register = ({ name, email, password }) => dispatch => {
    // Headers
    const config =  {
        headers: {
            "Content-type": "application/json"
        }
    }

    // Request Body
    const body = JSON.stringify({ name, email, password })

    axiosCall.post('/api/users', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch (
                returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
            )
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

//Login User
export const login = ({ email, password }) => dispatch => {
    // Headers
    const config =  {
        headers: {
            "Content-type": "application/json"
        }
    }

    // Request Body
    const body = JSON.stringify({ email, password })

    axiosCall.post('/api/auth', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch (
                returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
            )
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

// Setup Config/Headers and Token
export const tokenConfig = getState => {
    //Get token from LS
    const token = getState().auth.token

    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    //If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token
    }

    return config
}

// Logout User
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}
