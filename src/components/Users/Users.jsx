import React from "react";
import styles from './users.module.css';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = (props) => {

	return <div className={styles.wrapper}>

		<Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
			totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
		<div>
			{
				props.users.map(u =>
					<User key={u.id} user={u}
						followingInProgress={props.followingInProgress}
						follow={props.follow}
						unfollow={props.unfollow} />)
			}
		</div>
	</div >
}

export default Users;