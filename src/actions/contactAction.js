import {CONTACT_USER_SUBMIT} from '../constants/constants.js'
export const contactAction = (data) => {
    return {
        type: CONTACT_USER_SUBMIT,
        data
    }
}