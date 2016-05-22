import { combineReducers } from 'redux'
import messages from './reducers/message'
import register from './reducers/register'
import login from './reducers/login'

const reducer = combineReducers({messages, register, login})
export default reducer
