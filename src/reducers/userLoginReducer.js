import produce from 'immer';

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
        case 'USER_LOGIN':  {
            drafted.userForm = action.data;
            return drafted;
        }
        
        default:
            return state
    }
});
