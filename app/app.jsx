import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MessageList from './messageList'

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <MessageList />
  </MuiThemeProvider>
)

export default App
