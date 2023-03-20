import React from "react";
import s from "../Login/Login.module.css";
import { Field, reduxForm } from 'redux-form';
import { Input } from "../Common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reduser";
import { Link } from 'react-router-dom';
import style from "./../Common/FormsControls/FormsControls.module.css"



const LoginForm = (props) => {
	let maxLength30 = maxLengthCreator(30);

	return (
		<form onSubmit={props.handleSubmit}>
			<div><Field placeholder="Email" name={"email"} component={Input} validate={[required, maxLength30]} /></div>
			<div><Field placeholder="Passwosd" name={"password"} component={Input} validate={[required, maxLength30]} type={"password"} /></div>
			<div><Field type={"checkbox"} name={"rememberMe"} component={Input} />Remember me</div>
			{props.error &&
				<div className={style.formSummaryError}>
					{props.error}
				</div>
			}
			<div><button>Login</button></div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe)
		// console.log(props.login(formData.email, formData.password, formData.rememberMe))
	}

	if (props.isAuth) {
		return (<Link to={"/profile"} />)
	}

	return (
		<div className={s.log}>
			<h1>Please Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div >
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);