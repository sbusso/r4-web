import { CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAILED } from '../actions'

export default function register(state={isFetching: false}, action) {
  switch (action.type) {
    case CREATE_USER:
      return Object.assign(
        ...state,
        {
          isFetching: true
        }
      )
    case CREATE_USER_SUCCESS:
      return Object.assign(
        ...state,
        {
          isFetching: false,
          status: 'success',
          data: action.data
        }
      )
    case CREATE_USER_FAILED:
      return Object.assign(
        ...state,
        {
          isFetching: false,
          status: 'fail',
          data: action.data
        }
      )
    default:
      return state
  }
}
