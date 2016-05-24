import { NEW_MESSAGE } from '../actions'

let createMessageData = (data) => (
  {
    id: data.id, 
    content: data.content,
    user_id: data.user_id
  }
)

let messageIsNewInRoom = (room, message) => {
  return room['messages'].findIndex((m) => { return m.id === message.id }) === -1
}

export default function rooms(state = [], action) {
  state = [...state]

  switch (action.type) {
    case NEW_MESSAGE:
      let message = action.data
      let room = state.find((room) => { return room.id === message.room_id })

      if (room === undefined) {
        state.push(
          {
            id: message.room_id,
            messages: [createMessageData(message)]
          }
        )
      } else {
        if (messageIsNewInRoom(room, message)) {
          room['messages'].push(createMessageData(message))
          room['messages'].sort((a,b) => { return a.id > b.id })
        }
      }

      return state

    default:
      return state
  }
}
