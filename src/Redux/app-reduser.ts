import { getAuthUserData } from "./auth-reduser.ts"; // <-like this project work


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateType = {
	initialized: boolean
}

let initialState: InitialStateType = {
	initialized: false
};

const appReduser = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}
		default:
			return state;
	}
}

type InitializedSuccessActionType = {
	type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch: any) => {
	let promise = dispatch(getAuthUserData());
	// dispatch(somethingelse());
	// dispatch(somethingelse());

	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess())
	});
}

export default appReduser;