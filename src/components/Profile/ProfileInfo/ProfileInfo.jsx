import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from "../ProfileInfo/ProfileInfo.module.css";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user_avatar.jpg";


const ProfileInfo = (props) => {

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

	return (
		<div>
			<div className={s.img_wrapp}>
				{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZLImuUEHycl_TYLJuhMzx4sJKmGCCVaQfw&usqp=CAU" alt="#" /> */}
				{/* <img src="https://www.innovationnewsnetwork.com/wp-content/uploads/2020/12/the-stars-in-the-Milky-Way-800x450.jpg" alt="#" /> */}

			</div>
			<div className={s.profile}>
				<div>
					<img src={props.profile.photos.large || userPhoto} alt="#" />
					{props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} className={s.uploadPhoto}  />}
				</div>
				{/* <br />
				<span>Hi! It's my first project on React! I really hope you like it! ♥ </span>
				<br /> */}
				<div className={s.info}>
					<div>Hi! It's my first project on React! I really hope you like it! ♥ </div>
					<div>{props.profile.aboutMe} </div>
					<div> ID = {props.profile.userId} </div>
					<div>{props.profile.fullName} </div>

					{/* <ProfileStatus status={props.status} updateStatus={props.updateStatus} /> */}
					<div>Status (double click to edit):</div>
					<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;