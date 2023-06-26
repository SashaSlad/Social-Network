import React, { useState } from "react";
import s from "./Registration.module.css";
import { NavLink } from "react-router-dom";

const Registration = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [acceptTerms, setAcceptTerms] = useState(false);

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleConfirmPasswordChange = (e) => {
		setConfirmPassword(e.target.value);
	};

	const handleAcceptTermsChange = (e) => {
		setAcceptTerms(e.target.checked);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Виконати логіку для обробки даних форми (наприклад, відправити їх на сервер)
		// ...

		// Скинути значення полів після успішної обробки форми
		setName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
		setAcceptTerms(false);
	};

	return (
		<div className={s.wrapper}>
			<h2>Registration</h2>
			<form onSubmit={handleSubmit}>
				<div className={s.input_box}>
					<input
						type="text"
						placeholder="Enter your name"
						className={s.input_name}
						value={name}
						onChange={handleNameChange}
						required
					/>
				</div>
				<div className={s.input_box}>
					<input
						type="text"
						placeholder="Enter your email"
						value={email}
						onChange={handleEmailChange}
						required
					/>
				</div>
				<div className={s.input_box}>
					<input
						type="password"
						placeholder="Create password"
						value={password}
						onChange={handlePasswordChange}
						required
					/>
				</div>
				<div className={s.input_box}>
					<input
						type="password"
						placeholder="Confirm password"
						value={confirmPassword}
						onChange={handleConfirmPasswordChange}
						required
					/>
				</div>
				<div className={s.policy}>
					<input
						type="checkbox"
						checked={acceptTerms}
						onChange={handleAcceptTermsChange}
					/>
					<h3>I accept all terms & condition</h3>
				</div>
				<div className={s.inputbutton}>
					<button type="submit" disabled={!acceptTerms}>
						Register now
					</button>
				</div>
				<div className={s.text}>
					<h3>Already have an account? </h3>
					<div className={s.block}>
						<NavLink to='/login' className={s.btnReg}>Login now</NavLink>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Registration;
