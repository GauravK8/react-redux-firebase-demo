import { TUserState } from "../models/userState.model";
import UserService from "../services/user.service"


export const LOAD_USERSTATE_SUCCESS = "LOAD_USERSTATE_SUCCESS";
export const LOAD_USERSTATE_FAILURE = "LOAD_USERSTATE_FAILURE";
export const SAVE_USERSTATE_SUCCESS = "SAVE_USERSTATE_SUCCESS";
export const SAVE_USERSTATE_FAILURE = "SAVE_USERSTATE_FAILURE";
export const UPDATE_USERSTATE_SUCCESS = "UPDATE_USERSTATE_SUCCESS";
export const UPDATE_USERSTATE_FAILURE = "UPDATE_USERSTATE_FAILURE";


export const TLoadUserStateSuccess = {
	type: typeof LOAD_USERSTATE_SUCCESS,
	userState: TUserState
};

export const TLoadUserStateFailure = {
	type: typeof LOAD_USERSTATE_FAILURE
};

export const TSaveUserStateSuccess = {
	type: typeof SAVE_USERSTATE_SUCCESS,
	userState: TUserState
};

export const TSaveUserStateFailure = {
	type: typeof SAVE_USERSTATE_FAILURE
};

export const TUpdateUserStateSuccess = {
	type: typeof UPDATE_USERSTATE_SUCCESS,
	userState: TUserState
};

export const TUpdateUserStateFailure = {
	type: typeof UPDATE_USERSTATE_FAILURE
};


export const TUserStateAction =
	TLoadUserStateSuccess |
	TLoadUserStateFailure |
	TSaveUserStateFailure |
	TSaveUserStateSuccess |
	TUpdateUserStateSuccess |
	TUpdateUserStateFailure


// These are the action creators
export const loadUserStateSuccess = (userState) => ({
	type: LOAD_USERSTATE_SUCCESS,
	userState
});

export const loadUserStateFailure = () => ({
	type: LOAD_USERSTATE_FAILURE
});

export const saveUserStateSuccess = (userState) => ({
	type: SAVE_USERSTATE_SUCCESS,
	userState
});

export const saveUserStateFailure = (userState) => ({
	type: SAVE_USERSTATE_FAILURE,
	userState
});

export const updateUserStateSuccess = (userState) => ({
	type: UPDATE_USERSTATE_SUCCESS,
	userState
});

export const updateUserStateFailure = () => ({
	type: UPDATE_USERSTATE_FAILURE
});

// Action to save user information
export const saveState = (userState) => (dispatch) => {
	UserService.saveUser(userState).then((response) => {
		userState.id = response.id;
		UserService.updateUser(userState, userState.id).then((res) => {
			dispatch(saveUserStateSuccess(userState));
		});
	})
		.catch((error) => {
			dispatch(saveUserStateFailure());
		});
};

// Action to get user information
export const getState = () => (dispatch) => {
	UserService.getUser().then((response) => {
		response.forEach(doc => {
			if (doc && doc.exists) {

				dispatch(loadUserStateSuccess(doc.data()));
			}
		});

	})
		.catch((error) => {
			dispatch(loadUserStateFailure());
		});
};

// Action to update user information
export const updateState = (userState, stateId) => (dispatch) => {
	UserService.updateUser(userState, stateId).then((response) => {
		dispatch(updateUserStateSuccess(userState));
	})
		.catch((error) => {
			dispatch(updateUserStateFailure());
		});

};