import { ProfileType } from './../types/types';
import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "bfd52358-f556-49fe-b856-3044468355c0"
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 7) {
		return (
			instance.get(`users?page=${currentPage}&count=${pageSize}`,
			).then(response => { return response.data })
		)
	},

	follow(userId: number) {
		return (
			instance.post(`follow/${userId}`)
		)
	},

	unfollow(userId: number) {
		return (
			instance.delete(`follow/${userId}`)
		)
	},

	getProfile(userId: number) {
		console.warn('Obsolete method. Please use profileAPI object!');
		return (
			profileAPI.getProfile(userId)
		)
	}
}

export const profileAPI = {
	getProfile(userId: number) {
		return (
			instance.get(`profile/` + userId)
		)
	},
	getStatus(userId: number) {
		return (
			instance.get(`profile/status/` + userId)
		)
	},
	updateStatus(status: string) {
		return (
			instance.put(`profile/status`, { status: status })
		)
	},
	savePhoto(photoFile: any) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return (
			instance.put(`profile/photo`, formData, {
				headers: {
					'Content-type': 'multipart/form-data'
				}
			})
		)
	},
	saveProfile(profile: ProfileType) {
		return (
			instance.put(`profile`, profile)
		)
	},

}


export enum ResultCodesEnum {
	Success = 0,
	Error = 1,
}

export enum ResultCodeForCaptcha {
	CaptchaIsRequired = 10
}

type MeResponseType = {
	data: { id: number, email: string, login: string }
	resultCode: ResultCodesEnum
	messages: Array<string>
}

type LoginResponseType = {
	data: { userId: number }
	resultCode: ResultCodesEnum | ResultCodeForCaptcha
	userId: Array<string>
}

export const authAPI = {
	me() {
		return (
			instance.get<MeResponseType>(`auth/me`).then(res => res.data)
		)
	},
	login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
		return (
			instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha }).then(res => res.data)
		)
	},
	logOut() {
		return (
			instance.delete(`auth/login`)
		)
	},

}

export const securityAPI = {
	getCaptchaUrl() {
		return (
			instance.get(`security/get-captcha-url`)
		)
	}

}
