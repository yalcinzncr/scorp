import { combineReducers } from 'redux'
import userLogin from './userLoginReducer'
import appAction from './appReducer'
import userInfo from './userInfoReducer'
import contactUser from './contactReducer'

export default combineReducers({
    userLogin,
    appAction,
    userInfo,
    contactUser
})