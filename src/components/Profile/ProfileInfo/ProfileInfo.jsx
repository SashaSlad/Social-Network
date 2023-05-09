import React, { useState } from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from "../ProfileInfo/ProfileInfo.module.css";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user_avatar.jpg";
import ProfileDataForm from "./ProfileDataForm";
// import ProfileDataFormReduxForm from "./ProfileDataForm";


const ProfileInfo = (props) => {

	let [editMode, setEditMode] = useState(false);



	if (!props.profile) {
		return (
			<Preloader />
		)
	};

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0]);
		}
	};

	const onSubmit = (formData) => {
		props.saveProfile(formData).then(
			() => {
				setEditMode(false);
			}
		)
	}


	return (
		<div>
			<div className={s.img_wrapp}>
				{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZLImuUEHycl_TYLJuhMzx4sJKmGCCVaQfw&usqp=CAU" alt="#" /> */}
				{/* <img src="https://www.innovationnewsnetwork.com/wp-content/uploads/2020/12/the-stars-in-the-Milky-Way-800x450.jpg" alt="#" /> */}

			</div>
			<div className={s.profile}>
				<div>
					<img src={props.profile.photos.large || userPhoto} alt="#" />
					{props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} className={s.uploadPhoto} />}
				</div>

				<div className={s.info}>
					{/* <div>Hi! It's my first project on React! I really hope you like it! ♥ </div> */}
					{editMode
						? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
						: <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}

					<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
				</div>
			</div>
		</div>
	)
}

const ProfileData = (props) => {
	return (
		<>
			{props.isOwner && <div><button onClick={props.goToEditMode}>Edit:</button></div>}
			<div> ID = {props.profile.userId} </div>
			<div>
				<div>
					<b>Full name:</b>{props.profile.fullName}
				</div>
				<div>
					<b>Looking for a job:</b>{props.profile.lookingForAJob ? "yes" : "no"}
				</div>
				{props.profile.lookingForAJob &&
					<div>
						<b>My prfessional skills:</b>{props.profile.lookingForAJobDescription}
					</div>
				}
				<div>
					<b>About me:</b>{props.profile.aboutMe}
				</div>
				<div>
					<b>Contacts:</b>{Object.keys(props.profile.contacts).map(key => {
						return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
					})}
				</div>
			</div>
		</>
	)
}

const Contact = ({ contactTitle, contactValue }) => {
	return (
		<div className={s.contacts}><b>{contactTitle}</b>:{contactValue}</div>
	)
}




export default ProfileInfo;