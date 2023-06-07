import React, { useEffect, useState } from 'react';
import axios from 'axios';
import s from './friends.module.css';
import { NavLink } from 'react-router-dom';
import styles from '../Users/users.module.css';
import userPhoto from '../../assets/images/user_avatar.jpg';
import { follow, unfollow, requestUsers } from '../../Redux/users-reducer.ts';
import { connect } from 'react-redux';

const Friends = (props) => {
	const [users, setUsers] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://social-network.samuraijs.com/api/1.0/users',
					{
						withCredentials: true,
						headers: {
							'API-KEY': 'bfd52358-f556-49fe-b856-3044468355c0',
						},
						params: {
							page: 1,
							count: 100,
							followed: true,
						},
					}
				);
				setUsers(response.data.items.filter((item) => item.followed === true));
			} catch (error) {
				console.error('Error:', error);
			}
		};

		fetchData();
	}, []);

	const handleFollow = (userId) => {
		props.follow(userId);
	};

	const handleUnfollow = (userId) => {
		props.unfollow(userId);
		setUsers(users.filter((user) => user.id !== userId));
	};

	const handleSearch = (event) => {
		const searchValue = event.target.value.toLowerCase();
		setSearchQuery(searchValue);
	};

	const filteredUsers = users.filter((user) =>
		user.name.toLowerCase().startsWith(searchQuery)
	);

	return (
		<div className={s.wrapper}>
			<div className={s.search}>
				<input
					type="text"
					placeholder="Search friends..."
					value={searchQuery}
					onChange={handleSearch}
				/>
			</div>
			<div className={s.totalfrnds}>Total Friends: {filteredUsers.length}</div>
			{filteredUsers.map((user) => (
				<div className={s.content} key={user.id}>
					<div className={s.photobutton}>
						<div className={s.photoinfo}>
							<NavLink to={'/profile/' + user.id}>
								<img
									src={user.photos.small != null ? user.photos.small : userPhoto}
									className={styles.userPhoto}
									alt=""
								/>
							</NavLink>
						</div>
						<div className={styles.buttoncenter}>
							{user.followed ? (
								<button onClick={() => handleUnfollow(user.id)}>Unfollow</button>
							) : (
								<button onClick={() => handleFollow(user.id)}>Follow</button>
							)}
						</div>
					</div>
					<div className={s.info}>
						<p>Name: {user.name}</p>
						<p>ID: {user.id}</p>
						<p>Followed: {user.followed.toString()}</p>
						<p>Status: {user.status}</p>
					</div>
				</div>
			))}
		</div>
	);
};

const mapStateToProps = (state) => ({
	users: state.users.users,
	currentPage: state.users.currentPage,
	pageSize: state.users.pageSize,
});

export default connect(mapStateToProps, { follow, unfollow, requestUsers })(Friends);
