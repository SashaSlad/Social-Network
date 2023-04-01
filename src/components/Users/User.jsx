import React from "react";
import styles from './users.module.css';
import userPhoto from "../../assets/images/user_avatar.jpg";
import { NavLink } from "react-router-dom";

let User = (props) => {

	let u = props.user;

	return (
		<div>
			<div className={styles.wflex}>
				<div className={styles.w1}>
					<div>
						<NavLink to={'/profile/' + u.id}>
							<img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt="" />
						</NavLink>
					</div>

					<div className={styles.buttoncenter}>
						{u.followed

							? <button disabled={props.followingInProgress.some(id => id === u.id)}
								onClick={() => { props.unfollow(u.id) }}>Unfollow</button>

							: <button disabled={props.followingInProgress.some(id => id === u.id)}
								onClick={() => { props.follow(u.id) }}>Follow</button>}
					</div>
				</div>

				<div className={styles.w2}>
					{/* <div>{u.fullname}</div> */}
					<div>{u.name}</div>
					<div>{u.status}</div>
				</div>
				<div className={styles.w3}>
					<div>{"u.location.country,"}</div>
					<div>{"u.location.city"}</div>
				</div>
			</div>
		</div>
	)
}

export default User;