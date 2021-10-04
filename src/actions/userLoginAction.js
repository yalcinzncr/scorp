import {USER_LOGIN, CLEAR_USER_FORM_ACTION} from '../constants/constants.js'
export const loginAction = (data) => {
    return {
        type: USER_LOGIN,
        data
    }
}


export const clearUserFormAction = () => {
    return {
        type: CLEAR_USER_FORM_ACTION
    }
}