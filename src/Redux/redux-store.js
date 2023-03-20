//import { combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from "./pofile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from './users-reducer';
import authReduser from './auth-reduser';
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";


let redusers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReduser,
	form: formReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;