import produce from 'immer';
import {IS_USER_OPEN, CHANGE_PAGE_NAME} from '../constants/constants.js'

export const initialGlobalState = {
    globalStates: {
      isUserLogin: false,
      pageName : "home"
    }
  };
  
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialGlobalState, action) =>
  produce(state, draft => {
    const drafted = draft;
    switch (action.type) { 
        case IS_USER_OPEN:  {
            drafted.globalStates.isUserLogin = action.data.isUserLogin;
            return drafted;
        }   
        case CHANGE_PAGE_NAME:  {
          drafted.globalStates.pageName = action.data.pageName;
          return drafted;
      } 
        default:
            return state;
    }
});
