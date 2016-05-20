import React from 'react'
import { connect } from 'react-redux'
import Message from './message'

const MessageList = ({messages}) => (
  <ul>
  {messages.map((message, n) =>
      <p key={n}>{message}</p>
      )}
  </ul>
)

const mapProps = (state) => {
  return {
    messages: state.messages
  }
}

const mapDispatch = (dispatch) => {
  return {}
}

export default connect(mapProps, mapDispatch)(MessageList)
