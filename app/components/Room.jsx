import React, { PropTypes } from 'react'
import Message from './Message'

const Room = ({id, messages}) => ( 
  <div>
    <h1>{id}</h1>
    {messages.length === 0 && <p>No messages available</p>}
    {messages.length !== 0 && messages.map((message) => {
      return <Message key={message.id} {...message} />
    })}
  </div>
)

Room.propTypes = {
  id: PropTypes.string.isRequired,
  messages: PropTypes.array
}

export default Room
