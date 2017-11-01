import axios from 'axios'

axios.defaults.baseURL = 'http://rp.rentuff.id/api'

export const REFRESH_CONTENT = 'REFRESH_CONTENT'

// ACTIVITY
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES'
export const GET_ACTIVITY = 'GET_ACTIVITY'
export const SELECTED_ACTIVITY = 'SELECTED_ACTIVITY'
export const CHANGE_PHOTO = 'CHANGE_PHOTO'

// USER
export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'
export const LOG_OUT = 'LOG_OUT'
export const GET_PROFILE = 'GET_PROFILE'
export const UPDATE_DATA_PROFILE = 'UPDATE_DATA_PROFILE'

// TRANSACTION
export const GET_ALL_TRANSACTION = 'GET_ALL_TRANSACTION'
export const PAYMENT_CONFIRMATION = 'PAYMENT_CONFIRMATION'
