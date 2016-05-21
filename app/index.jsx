import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider  } from 'react-redux'
import { loadMessages } from './actions'
import ActionCable from 'actioncable'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './app'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import MessageList from './MessageList'

import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap - http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin()

let store = createStore(reducer, {}, window.devToolsExtension ? window.devToolsExtension() : undefined)

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={MessageList} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
        <Route path='/chat' component={MessageList} />
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('root')
)

var consumer = ActionCable.createConsumer('ws://localhost:3000/cable')
var subscription = consumer.subscriptions.create('MessagesChannel', {
  received: (data) => {
    store.dispatch(loadMessages(data.message.new_val.content))
  }
})
