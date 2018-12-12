import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

export function configureStore() {
	let middleware = applyMiddleware(thunk);
	try {
		const store = createStore(rootReducer, {}, middleware);
		return store;
	} catch (ex) {
		throw ex;
	}
}
