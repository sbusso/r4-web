import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Message from '../components/Message'

class MessageContainer extends React.Component {
  render() {
    const { messages } = this.props

    if (messages.length === 0) {
      return <p>No messages</p>
    } else {
      return (
        <div>
          {messages.map((message) => { 
            return <Message key={message.id} {...message} />
          })}
        </div>
      )
    }
  }
}

MessageContainer.propTypes = {
  messages: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(MessageContainer)
