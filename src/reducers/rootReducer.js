import { combineReducers } from 'redux'
import { TUserState } from '../models/userState.model'
import { UserStateReducer } from './userState.reducer'

export const TCombinedState = {
	userState: TUserState
};

// Combined Reducers
export default combineReducers({
	userState: UserStateReducer
});