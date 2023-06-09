import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../api/api.ts";
import { PhotosType, PostType, ProfileType } from "../types/types";

const ADD_POST = 'ADD-POST';

//----------------------
const LIKE_POST = 'LIKE_POST';
const DISLIKE_POST = 'DISLIKE_POST';
const DELETE_POST = 'DELETE_POST';
//----------------------

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
// const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
	postsData: [
		{ id: 1, message: "Hi, it is my first progect!", likes: 7 },
		{ id: 2, message: "I hope you will like it!", likes: 16 },
		{ id: 3, message: "Good luck!", likes: 23 },
	] as Array<PostType>,
	profile: null as ProfileType | null,
	status: "",
	newPostText: ''
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		// case ADD_POST: {
		// 	let newPost = {
		// 		id: 4,
		// 		message: action.newPostText,
		// 		likes: 0,
		// 	};

		case ADD_POST:
			return {
				...state,
				postsData: [
					...state.postsData,
					{
						id: state.postsData.length + 1,
						message: action.newPostText,
						likes: 7
					}
				]
			};

		// 		return {
		// 			...state,
		// 			postsData: [...state.postsData, newPost],
		// 			newPostText: '',
		// 		};
		// }

		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			};
		}

		case SET_STATUS: {
			return {
				...state,
				status: action.status
			};
		}

		// 		case DELETE_POST: {
		// 	return {
		// 		...state,
		// 		postsData: state.postsData.filter(p => p.id !== action.postId)
		// 	};
		// }

		//------------------------------
		case LIKE_POST:
			return {
				...state,
				postsData: state.postsData.map((post) =>
					post.id === action.postId ? { ...post, likes: post.likes + 1 } : post
				)
			};
		case DISLIKE_POST:
			return {
				...state,
				postsData: state.postsData.map((post) =>
					post.id === action.postId ? { ...post, likes: post.likes - 1 } : post
				)
			};
		case DELETE_POST:
			return {
				...state,
				postsData: state.postsData.filter((post) => post.id !== action.postId)
			};
		///----------------------------------
		case SAVE_PHOTO_SUCCESS: {
			return {
				...state,
				profile: { ...state.profile, photos: action.photos } as ProfileType
			};
		}

		default:
			return state;
	}
}
//-----action creators------
type AddPostActionCreatorActionType = {
	type: typeof ADD_POST
	newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({ type: ADD_POST, newPostText });

type SetUserProfileActionType = {
	type: typeof SET_USER_PROFILE
	profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });

type SetStatusActionType = {
	type: typeof SET_STATUS
	status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });

type DeletePostActionType = {
	type: typeof DELETE_POST
	postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId });

type SavePhotoSuccessActionType = {
	type: typeof SAVE_PHOTO_SUCCESS
	photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos });

//----------------------------------------
export const likePostActionCreator = (postId) => ({
	type: LIKE_POST,
	postId
});

export const dislikePostActionCreator = (postId) => ({
	type: DISLIKE_POST,
	postId
});

export const deletePostActionCreator = (postId) => ({
	type: DELETE_POST,
	postId
});
//----------------------------------------

// ----- sunk -----

export const getUserProfile = (userId: number) => async (dispatch: any) => {
	let response = await usersAPI.getProfile(userId);

	dispatch(setUserProfile(response.data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
	let response = await profileAPI.getStatus(userId);

	dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
	let response = await profileAPI.updateStatus(status);

	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};

export const savePhoto = (file: any) => async (dispatch: any) => {
	let response = await profileAPI.savePhoto(file);

	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
	const userId = getState().auth.userId;
	const response = await profileAPI.saveProfile(profile);

	if (response.data.resultCode === 0) {
		dispatch(getUserProfile(userId));
	} else {
		// dispatch(stopSubmit("edit-profile", { "contacts": { "facebook": response.data.messages[0] } })) тре запарсити строку правильно
		dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
		return Promise.reject(response.data.messages[0]);
	}
};



export default profileReducer;