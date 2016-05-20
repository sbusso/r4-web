import { LOAD_MESSAGES } from '../actions'

export default function messages(state = [], action) {
  switch (action.type) {
    case LOAD_MESSAGES:
      return [
        ...state,
        action.message
      ]
    default:
      return state
  }
}
