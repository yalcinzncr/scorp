import produce from 'immer';
import {CONTACT_USER_SUBMIT} from '../constants/constants.js'

export const initialState = {
    contactUserForm: {
        name: '', 
        email : '' , 
        phoneNumber : '',
        country : 'TR',
        text : ''

    }
  };
  
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>
  produce(state, draft => {
    const drafted = draft;
    switch (action.type) {
        case CONTACT_USER_SUBMIT:  {
            drafted.contactUserForm = action.data;
            return drafted;
        }        
        default:
            return state
    }
});
