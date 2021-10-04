import {IS_USER_OPEN, CHANGE_PAGE_NAME} from '../constants/constants.js'

export const isUserOpenAction = (data) => {
    return {
        type: IS_USER_OPEN,
        data
    }
}

export const changePageNameAction = (data) => {
    return {
        type: CHANGE_PAGE_NAME,
        data
    }
}

