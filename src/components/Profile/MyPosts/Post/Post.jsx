// import React from "react";
// import s from './Post.module.css';
// // import userPhoto from "../../../../assets/images/user_avatar.jpg";


// const Post = (props) => {
// 	return (
// 		<div className={s.item}>
// 			<img alt='' src="https://w1.pngwing.com/pngs/664/825/png-transparent-social-media-icons-avatar-male-man-female-face-facial-hair-facial-expression.png" />
// 			{/* <img src={props.profile.photos.large || userPhoto} alt="#" /> */}
// 			{/* <img src={userPhoto} /> */}
// 			<br />
// 			<span> Post {props.id}</span>
// 			<br />
// 			<span>{props.message}</span>
// 			<div>
// 				<span>Likes: {props.likes}</span>
// 			</div>
// 		</div>
// 	)
// }

// export default Post;

//---------------------------------------this is good below--------------------------------------------------------


// import React from "react";
// import s from './Post.module.css';

// const Post = (props) => {
// 	const handleDelete = () => {
// 		props.deletePost(props.id);
// 	}

// 	return (
// 		<div className={s.item}>
// 			<img alt='' src="https://w1.pngwing.com/pngs/664/825/png-transparent-social-media-icons-avatar-male-man-female-face-facial-hair-facial-expression.png" />
// 			<br />
// 			<span> Post {props.id}</span>
// 			<br />
// 			<span>{props.message}</span>
// 			<div>
// 				<span>Likes: {props.likes}</span>
// 				<button onClick={handleDelete}>Delete</button>
// 				<button>Like</button>
// 				<button>Dislike</button>
// 			</div>
// 		</div>
// 	)
// }

// export default Post;


//--------------------------------this with ava--------------------------------------------

import React, { useState, useEffect } from "react";
import axios from "axios";
import s from './Post.module.css';

const Post = (props) => {
	const [userPhoto, setUserPhoto] = useState('');
	const [userId, setUserId] = useState('');

	const handleDelete = () => {
		props.deletePost(props.id);
	}

	const handleLike = () => {
		props.likePost(props.id);
	};

	const handleDislike = () => {
		props.dislikePost(props.id);
	};

	useEffect(() => {
		const fetchUserPhoto = async () => {
			try {
				const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
					headers: {
						"API-KEY": "bfd52358-f556-49fe-b856-3044468355c0"
					}
				});
				const user = response.data;
				setUserPhoto(user.photos.small || ''); // Set user's photo or empty string if photo is not available
			} catch (error) {
				console.log(error);
			}
		};

		fetchUserPhoto();
	}, [userId]);

	useEffect(() => {
		const fetchUserId = async () => {
			try {
				const response = await axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
					withCredentials: true,
					headers: {
						"API-KEY": "bfd52358-f556-49fe-b856-3044468355c0"
					}
				});
				const { data } = response;
				if (data.resultCode === 0) {
					const { id } = data.data; // Assuming the response data has the 'id' property
					setUserId(id);
				}
			} catch (error) {
				console.log(error);
			}
		};

		fetchUserId();
	}, []);

	return (

		<div className={s.item}>
			<div className={s.items}>
				<div className={s.photo}>
					<img alt='' src={userPhoto} />
				</div>

				<div className={s.postinfo}>
					<br />
					<span>Post {props.id}</span>
					<br />
					<span>{props.message}</span>
					<br />
					<span>Likes: {props.likes}</span>
				</div>
			</div>

			<div className={s.btns}>
				<button onClick={handleLike}>💓</button>
				<button onClick={handleDislike}>👎</button>
				<button className={s.trashbtn} onClick={handleDelete}>Delete&#128465;</button>
			</div>
		</div >

	);
}

export default Post;


//-------------------------------------------------------------

