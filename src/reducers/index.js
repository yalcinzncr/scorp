import { combineReducers } from 'redux'
import userLogin from './userLoginReducer'
import appAction from './appReducer'
import userInfo from './userInfoReducer'

export default combineReducers({
    userLogin,
    appAction,
    userInfo
})