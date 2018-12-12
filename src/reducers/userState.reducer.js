import * as userActiontypes from "../actions/user.action";

// Initial state
const initialState = {
    firstName: '',
    lastName: '',
    company:'',
    department: '',
    position: '',
    email: ''
};

// User state Reducer
export const UserStateReducer =
    (state = initialState, action) => {
        let newState;

        switch (action.type) {

            case userActiontypes.LOAD_USERSTATE_SUCCESS:
                return action.userState;

            case userActiontypes.SAVE_USERSTATE_SUCCESS:
                return Object.assign({}, state, action.userState);

            case userActiontypes.LOAD_USERSTATE_FAILURE:
                newState = Object.assign({}, state);
                newState.Error = action.Error;
                return newState;

            case userActiontypes.UPDATE_USERSTATE_SUCCESS:
                return Object.assign({}, state, action.userState);

            default:
                return state;
        }
    };