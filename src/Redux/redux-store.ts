//import { combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
//@ts-ignore
import profileReducer from "./pofile-reducer.ts";
import dialogsReducer from "./dialogs-reducer.ts";
import usersReducer from './users-reducer.ts';
import authReduser from './auth-reduser.ts';
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReduser from './app-reduser.ts';
// import appReduser from './app-reduser';


let rootReduser = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReduser,
	form: formReducer,
	app: appReduser
});

type RootReduserType = typeof rootReduser; // (globalstate: AppStateType) => AppStateType 
export type AppStateType = ReturnType<RootReduserType>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReduser, composeEnhancers(applyMiddleware(thunkMiddleware)));
//@ts-ignore
window.__store__ = store;


// let store = createStore(redusers, applyMiddleware(thunkMiddleware));
// window.store = store;

export default store;