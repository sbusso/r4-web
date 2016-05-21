import React from 'react'
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const MessageList = ({messages}) => (
  <List>
    <Subheader>Chat</Subheader>
    {messages.map((message, n) =>
      <ListItem key={n} primaryText={message} />
    )}
  </List>
)

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(MessageList)
