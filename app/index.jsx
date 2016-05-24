import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider  } from 'react-redux'
import { loadMessages } from './actions'
import ActionCable from 'actioncable'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './app'
import LoginContainer from './containers/Login'
import RegisterContainer from './containers/Register'
import MessageContainer from './containers/Message'

import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap - http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin()

let store = createStore(reducer, {}, window.devToolsExtension ? window.devToolsExtension() : undefined)

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={MessageContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/register' component={RegisterContainer} />
        <Route path='/chat' component={MessageContainer} />
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('root')
)
