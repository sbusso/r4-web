import { NEW_MESSAGE } from '../actions'

export default function messages(state = [], action) {
  switch (action.type) {
    case NEW_MESSAGE:
      let isAlreadyLoaded = state.findIndex((element) => {
        return element.id === action.data.id
      }) !== -1

      if (isAlreadyLoaded) {
        return state
      } else {
        return [
          ...state,
          {
            id: action.data.id,
            content: action.data.content,
            user_id: action.data.user_id
          }
        ]
      }
    default:
      return state
  }
}
