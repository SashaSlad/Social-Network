import React, { useEffect, useState } from 'react';
import axios from 'axios';
import s from "./friends.module.css"
import { NavLink } from "react-router-dom";
import styles from "../Users/users.module.css"
import userPhoto from "../../assets/images/user_avatar.jpg";
import { follow, unfollow } from "../../Redux/users-reducer.ts";



const Friends = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://social-network.samuraijs.com/api/1.0/users', {
					withCredentials: true,
					headers: {
						'API-KEY': 'bfd52358-f556-49fe-b856-3044468355c0'
					},
					params: {
						page: 1,
						count: 7,
						followed: true
					}
				});
				setUsers(response.data.items.filter(item => item.followed === true));
			} catch (error) {
				console.error('Error:', error);
			}
		};

		fetchData();
	}, []);


	return (
		// <div className={s.wrapper}>
		// 	{users.map(user => (
		// 		<div key={user.id}>
		// 			<p>Name: {user.name}</p>
		// 			<p>ID: {user.id}</p>
		// 			<p>Followed: {user.followed.toString()}</p>
		// 			{/* <p>Followed: {setUsers(response.data.items.filter(item => item.followed === true))} </p> */}

		// 			<hr />
		// 		</div>
		// 	))}
		// </div>


		<div className={s.wrapper}>
			{users.map(user => (
				<div className={s.content} key={user.id}>

					<div className={styles.w1}>
						<div>
							<NavLink to={'/profile/' + user.id}>
								<img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="" />
							</NavLink>
						</div>
						<div className={styles.buttoncenter}>
							{user.followed
								? <button onClick={() => { unfollow(user.id) }}>Unfollow</button>
								: <button onClick={() => { follow(user.id) }}>Follow</button>}
						</div>
					</div>

					<div className={s.info}>
						<p>Name: {user.name}</p>
						<p>ID: {user.id}</p>
						<p>Followed: {user.followed.toString()}</p>
						<p>Status: {user.status}</p>
						{/* <p>Followed: {setUsers(response.data.items.filter(item => item.followed === true))} </p> */}
					</div>

					<hr />
				</div>
			))}
		</div>
	);
};






export default Friends;