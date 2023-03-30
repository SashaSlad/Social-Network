import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from "../ProfileInfo/ProfileInfo.module.css";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

	if (!props.profile) {
		return (
			<Preloader />
		)
	};

	return (
		<div>
			<div className={s.img_wrapp}>
				{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZLImuUEHycl_TYLJuhMzx4sJKmGCCVaQfw&usqp=CAU" alt="#" /> */}
				{/* <img src="https://www.innovationnewsnetwork.com/wp-content/uploads/2020/12/the-stars-in-the-Milky-Way-800x450.jpg" alt="#" /> */}

			</div>
			<div className={s.profile}>
				<img src={props.profile.photos.large} alt="#" />
				<br />
				<span>ava + discription</span>
				<br />
				<div>{props.profile.aboutMe} </div>
				<div> ID = {props.profile.userId} </div>
				<div>{props.profile.fullName} </div>
				{/* <ProfileStatus status={props.status} updateStatus={props.updateStatus} /> */}

				<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />

			</div>
		</div>
	)
}

export default ProfileInfo;