import React from "react";
import s from "../Login/Login.module.css";
import { reduxForm } from 'redux-form';
import { createField, Input } from "../Common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reduser.ts";
// import { Link, redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import style from "./../Common/FormsControls/FormsControls.module.css"



const LoginForm = (props) => {
	let maxLength30 = maxLengthCreator(30);

	return (
		<div className={s.log_container}>

			<form onSubmit={props.handleSubmit}>
				{createField("Email", "email", [required, maxLength30], Input)}
				{createField("Passwosd", "password", [required, maxLength30], Input, { type: "password" })}
				<div className={s.remme}>
					{createField(null, "rememberMe", [], Input, { type: "checkbox" }, "")} <b>Remember me</b>
				</div>

				{/* 	<div><Field placeholder="Email" name={"email"} component={Input} validate={[required, maxLength30]} /></div>
			<div><Field placeholder="Passwosd" name={"password"} component={Input} validate={[required, maxLength30]} type={"password"} /></div>
			<div className={s.remme}><Field type={"Checkbox"} name={"rememberMe"} component={Input} />Remember me</div> */}

				{props.captchaUrl && <img alt="4" src={props.captchaUrl} />}
				{props.captchaUrl && createField("Symbols from captcha", "captcha", [required], Input, {})}


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

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
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

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login);