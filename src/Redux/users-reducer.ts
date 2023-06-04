import { AppStateType, InferActionsTypes } from './redux-store';
import { usersAPI } from "../api/api.ts";
import { updateObjectInArray } from "../components/utils/objects-helpers/object-helpers";
import { UserType } from "../types/types";
// import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import { Action } from '@remix-run/router';

// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
// const SET_USERS = 'SET_USERS';
// const SET_CARRENT_PAGE = 'SET_CARRENT_PAGE';
// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
// const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
// const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
	users: [] as Array<UserType>,
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [] as Array<number> // Array of users id
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case 'FOLLOW':
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", { followed: true })

				// users: state.users.map(u => {
				// 	if (u.id === action.userId) {
				// 		return { ...u, followed: true }
				// 	}
				// 	return u;
				// })

			}

		case 'UNFOLLOW':
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
			}

		case 'SET_USERS': {
			return { ...state, users: action.users }
		}

		case 'SET_CARRENT_PAGE': {
			return { ...state, currentPage: action.currentPage }
		}

		case 'SET_TOTAL_USERS_COUNT': {
			return { ...state, totalUsersCount: action.count }
		}

		case 'TOGGLE_IS_FETCHING': {
			return { ...state, isFetching: action.isFetching }
		}

		case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
			return {
				...state, followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			}
		}

		default:
			return state;
	}
};

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
	followSuccess: (userId: number) => ({ type: 'FOLLOW', userId } as const),


	unfollowSuccess: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),


	setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),


	setCurrentPage: (currentPage: number) => ({ type: 'SET_CARRENT_PAGE', currentPage } as const),


	setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount } as const),


	toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),


	toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const)

}

//-----Додавання постів------


//-------------- thunk ---------------

// type GetStateType = () => AppStateType;

type DispatchType = () => AppStateType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
	return async (dispatch, getState) => {
		dispatch(actions.toggleIsFetching(true));
		dispatch(actions.setCurrentPage(currentPage))

		let data = await usersAPI.getUsers(currentPage, pageSize);

		dispatch(actions.toggleIsFetching(false));
		dispatch(actions.setUsers(data.items));
		dispatch(actions.setTotalUsersCount(data.totalCount));
	}
}


const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apimethod: any, ActionCreator: (userId: number) => ActionsTypes) => {
	dispatch(actions.toggleFollowingProgress(true, userId));
	let response = await apimethod(userId);

	if (response.data.resultCode === 0) {
		dispatch(ActionCreator(userId));
	}
	dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
	return async (dispatch) => {
		// let apimethod = usersAPI.follow.bind(usersAPI);
		// let ActionCreator = followSuccess;

		_followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);

	}
}

export const unfollow = (userId: number): ThunkType => {
	return async (dispatch) => {
		_followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
	}
}

export default usersReducer;