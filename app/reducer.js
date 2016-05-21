import { combineReducers } from 'redux'
import messages from './reducers/message'
import register from './reducers/register'

const reducer = combineReducers({messages, register})
export default reducer
