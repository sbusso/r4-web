import React from 'react'
import { connect } from 'react-redux'
import websocket from './websocket'
import { newMessage } from './actions'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router'

class App extends React.Component {
  componentDidMount() {
    this.subscription = websocket.subscriptions.create('MessagesChannel', {
      received: (response) => {
        this.props.dispatch(newMessage(response.data.new_val))
      }
    })
  }

  componentWillUnmount() {
    this.subscription.unsubscribe()
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/chat'>Chatroom</Link></li>
          </ul>

          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default connect()(App)
