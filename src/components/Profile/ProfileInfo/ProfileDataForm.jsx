import React from "react"
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../Common/FormsControls/FormsControls.tsx";
import s from "../ProfileInfo/ProfileInfo.module.css";
import style from "../../Common/FormsControls/FormsControls.module.css"


const ProfileDataForm = (props, { initialValues }) => {
	return (
		<form onSubmit={props.handleSubmit} >
			<div><button>Save:</button></div>
			{
				props.error && <div className={style.formSummaryError}>
					{props.error}
				</div>
			}
			<div> ID = {props.profile.userId} </div>
			<div>
				<div>
					<b>Full name:</b> {createField("Full name", "fullName", [], Input)}
				</div>
				<div>
					<b>Looking for a job:</b> {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
				</div>
				<div>
					<b>My prfessional skills:</b> {createField("My prfessional skills", "lookingForAJobDescription", [], Textarea)}
				</div>
				<div>
					<b>About me:</b> {createField("About me", "aboutMe", [], Textarea)}
				</div>
				<div>
					<b>Contacts:</b>{Object.keys(props.profile.contacts).map(key => {
						return (
							<div key={key} className={s.contacts}>
								<b>{key}:</b>{createField(key, "contacts." + key, [], Input)}
							</div>
						)
					})}
				</div>
			</div>

		</form >
	)
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;