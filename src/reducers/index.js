import { combineReducers } from 'redux'
import wallet from './wallet'
import login from './login'

export default combineReducers({ wallet, login })
