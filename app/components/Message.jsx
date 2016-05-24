import React, { PropTypes } from 'react'

const Message = ({id, content, user_id}) => (
  <p>{content} by {user_id}</p>
)

Message.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  user_id: PropTypes.string.isRequired
}

export default Message
