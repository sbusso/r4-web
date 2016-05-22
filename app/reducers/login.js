import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED } from '../actions'

export default function(state = {isFetching: false}, action) {
  switch(action.type) {
    case LOGIN_USER:
      return Object.assign(
        ...state,
        {
          isFetching: true
        }
      )
    case LOGIN_USER_SUCCESS:
      return Object.assign(
        ...state,
        {
          isFetching: false,
          status: 'success',
          token: action.token
        }
      )
    case LOGIN_USER_FAILED:
      return Object.assign(
        ...state,
        {
          isFetching: false,
          status: 'failed',
          error: action.response
        }
      )
    default:
      return state
  }
}
