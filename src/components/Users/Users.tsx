import React from "react";
import styles from './users.module.css';
import Paginator from "../Common/Paginator/Paginator.tsx";
import User from "./User";
import { UserType } from "../../types/types.ts";


type PropsType = {
	currentPage: number
	totalUsersCount: number
	pageSize: number
	onPageChanged: (pageNumber: number) => void
	users: Array<UserType>
	followingInProgress: Array<number>
	follow: (userId: number) => void
	unfollow: (userId: number) => void
}


let Users: React.FC<PropsType> = (props) => {

	return <div className={styles.wrapper}>
		<div className={styles.paginator}>
			<Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
				totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} />
		</div>
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