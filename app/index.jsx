import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider  } from 'react-redux'
import App from './app'
import { loadMessages } from './actions'

let store = createStore(reducer)
store.dispatch(loadMessages('this is a new message'))
store.dispatch(loadMessages('this is a new message'))
store.dispatch(loadMessages('this is a new message'))

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)
