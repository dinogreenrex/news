import {reducer} from "./reducers/index";
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux';


const logger = store => next => action => {
	console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}



const mymiddleware = applyMiddleware(
	thunk,
	logger,
);

export const store = createStore(
	reducer,
	compose(
		mymiddleware,
		window.devToolsExtension ? window.devToolsExtension() : f => f),

);




