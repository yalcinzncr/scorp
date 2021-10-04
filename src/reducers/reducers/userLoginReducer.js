import produce from 'immer';
import {USER_LOGIN, CLEAR_USER_FORM_ACTION} from '../constants/constants.js'

export const initialState = {
    userForm: {
        name: '', 
        email : '' , 
        password : '', 
        isOpen: false,
    }
  };
  
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>
  produce(state, draft => {
    const drafted = draft;
    switch (action.type) {
        case USER_LOGIN:  {
            drafted.userForm = action.data;
            return drafted;
        }

        case CLEAR_USER_FORM_ACTION:  {
          return initialState;
        }
        
        default:
            return state
    }
});
