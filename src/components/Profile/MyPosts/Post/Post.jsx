import React from "react";
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img alt='' src="https://w1.pngwing.com/pngs/664/825/png-transparent-social-media-icons-avatar-male-man-female-face-facial-hair-facial-expression.png"/>
			<br />
			<span> Post {props.id}</span>
			<br />
			<span>{props.message}</span>
			<div>
				<span>Likes: {props.likes}</span>
			</div>
		</div>
	)
}

export default Post;