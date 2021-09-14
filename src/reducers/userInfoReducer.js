import produce from 'immer';

export const initialState = {
    userInfoForm: {
        isOpen: false,
    }
  };
  
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>
  produce(state, draft => {
    const drafted = draft;
    switch (action.type) {
        case 'OPEN_USER_INFO':  {
            drafted.userInfoForm = action.data;
            return drafted;
        }
        
        default:
            return state;
    }
});