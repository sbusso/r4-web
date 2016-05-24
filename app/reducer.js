import { combineReducers } from 'redux'
import rooms from './reducers/rooms'
import register from './reducers/register'
import login from './reducers/login'

const reducer = combineReducers({rooms, register, login})
export default reducer
