import React from "react";
import s from "../Login/Login.module.css";
import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, Input } from "../Common/FormsControls/FormsControls.tsx";
import { maxLengthCreator, required } from "../utils/validators/validators.ts";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reduser.ts";
// import { Link, redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import style from "./../Common/FormsControls/FormsControls.module.css";
import { AppStateType } from "../../Redux/redux-store.ts"

type LoginFormOwnProps = {
	captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
	let maxLength30 = maxLengthCreator(30);

	return (
		<div className={s.log_container}>

			<form onSubmit={props.handleSubmit}>
				{createField<LoginFormValuesTypeKeys>("Email", "email", [required, maxLength30], Input)}
				{createField<LoginFormValuesTypeKeys>("Passwosd", "password", [required, maxLength30], Input, { type: "password" })}
				<div className={s.remme}>
					{createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, { type: "checkbox" }, "")} <b>Remember me</b>
				</div>

				{/* 	<div><Field placeholder="Email" name={"email"} component={Input} validate={[required, maxLength30]} /></div>
			<div><Field placeholder="Passwosd" name={"password"} component={Input} validate={[required, maxLength30]} type={"password"} /></div>
			<div className={s.remme}><Field type={"Checkbox"} name={"rememberMe"} component={Input} />Remember me</div> */}

				{props.captchaUrl && <img alt="4" src={props.captchaUrl} />}
				{props.captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from captcha", "captcha", [required], Input, {})}


				{props.error &&
					<div className={style.formSummaryError}>
						{props.error}
					</div>
				}
				<div className={s.btn}><button>Login</button></div>
			</form>

			<div className={s.log}>
				<p>
					Email: sashachebyrasha16@gmail.com
					<br />
					Password: sasha1604
				</p>
			</div>

		</div>
	)
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm)


type MapStatePropsType = {
	captchaUrl: string | null
	isAuth: boolean
}

type MapDispatchPropsType = {
	login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}


export type LoginFormValuesType = {
	email: string
	password: string
	rememberMe: boolean
	captcha: string
}

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>


const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
	const onSubmit = (formData: LoginFormValuesType) => {
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
		// console.log(props.login(formData.email, formData.password, formData.rememberMe))
	}

	let navigate = useNavigate();
	if (props.isAuth) {
		return (
			// redirect("/profile") 
			navigate("/profile")
			// <Link to={"/profile"} />
		)
	}

	return (
		<div className={s.log}>
			<h1>Please Login</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
		</div >
	)
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login);