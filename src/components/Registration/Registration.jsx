import React from "react";
import s from "./Registration.module.css"
import { NavLink } from "react-router-dom";



const Registration = () => {
	return (
		<div className={s.wrapper}>
			<h2>Registration</h2>
			<form action="#">
				<div className={s.input_box}>
					<input type="text" placeholder="Enter your name" className={s.input_name} required />
				</div>
				<div className={s.input_box}>
					<input type="text" placeholder="Enter your email" required />
				</div>
				<div className={s.input_box}>
					<input type="password" placeholder="Create password" required />
				</div>
				<div className={s.input_box}>
					<input type="password" placeholder="Confirm password" required />
				</div>
				<div className={s.policy}>
					<input type="checkbox" />
					<h3>I accept all terms & condition</h3>
				</div>
				<div className={s.inputbutton}>
					{/* <input type="Submit" value="Register Now" /> */}
					<button><NavLink to='/login' className={s.btnReg}>Register now</NavLink></button>
				</div>
				<div className={s.text}>
					<h3>Already have an account? </h3>
					<div className={s.block}>
						<button><NavLink to='/login' className={s.btnReg}>Login now</NavLink></button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Registration;