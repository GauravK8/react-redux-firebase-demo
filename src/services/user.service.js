import firebase from "../database/firebase";
const db = firebase.firestore();

export default class UserService {

// Method to save data to firebase store
	static saveUser = (user) => {
		return db.collection('users').add(user)
			.then((response) => {
				return response;
			})
			.catch((error) => {
				return {
					isError: true,
					error
				};
			});
	}

	// Method to get data from firebase store
	static getUser = () => {
		return db.collection('users').get()
			.then(snapshot => {
				return snapshot;
			})
			.catch((error) => {
				return {
					isError: true,
					error
				};
			});
	}

	// Method to update data to firebase store
	static updateUser = (user, stateId) => {
		return db.collection('users').doc(stateId).update(user)
			.then(snapshot => {
				return snapshot;
			})
			.catch((error) => {
				return {
					isError: true,
					error
				};
			});
	}
}