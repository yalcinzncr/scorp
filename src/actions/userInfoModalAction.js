
import {OPEN_USER_INFO} from '../constants/constants.js'
export const openUserInfo = (data) => {
    return {
        type: OPEN_USER_INFO,
        data
    }
}