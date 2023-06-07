// import React from "react";
// //import { addPostActionCreator, updateNewPostActionCreator } from "../../../Redux/pofile-reducer";
// import s from './MyPosts.module.css';
// import Post from "./Post/Post";
// import { Field, reduxForm } from 'redux-form';
// import { maxLengthCreator, required } from "../../utils/validators/validators.ts";
// import { Textarea } from "../../Common/FormsControls/FormsControls.tsx";


// const MyPosts = React.memo(props => {

// 	// shouldComponentUpdate(nextProps, nextState) {
// 	// 	return nextProps !== this.nextProps || nextState !== this.nextState;
// 	// }

// 	let postsElements = props.postsData.map(post => <Post key={post.id} message={post.message} likes={post.likes} id={post.id} />);

// 	//let newPostElement = React.createRef();

// 	let onaddPost = (values) => {
// 		props.addPost(values.newPostText);
// 	}

// 	const maxLength10 = maxLengthCreator(10);

// 	const addNewPostForm = (props) => {
// 		return (
// 			<form onSubmit={props.handleSubmit}>
// 				<Field component={Textarea}
// 					name={"newPostText"}
// 					placeholder='Send post'
// 					validate={[required, maxLength10]}
// 				/>
// 				<button >Add post</button>
// 				<button>Remove</button>
// 			</form>
// 		)
// 	}

// 	const AddPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(addNewPostForm);

// 	return (
// 		<div className={s.myposts}>
// 			<br />
// 			<div className={s.textar}>
// 				<AddPostFormRedux onSubmit={onaddPost} />
// 			</div>
// 			<div className={s.posts}>
// 				{postsElements}
// 			</div>
// 		</div >
// 	)
// }
// )
// export default MyPosts;


//-----------------------------------------------------------------------------------------------



// import React from "react";
// import s from './MyPosts.module.css';
// import Post from "./Post/Post";
// import { Field, reduxForm } from 'redux-form';
// import { maxLengthCreator, required } from "../../utils/validators/validators.ts";
// import { Textarea } from "../../Common/FormsControls/FormsControls.tsx";

// const MyPosts = React.memo(props => {
// 	let postsElements = props.postsData.map(post => (
// 		<Post
// 			key={post.id}
// 			message={post.message}
// 			likes={post.likes}
// 			id={post.id}
// 			deletePost={props.deletePost}
// 		/>
// 	));

// 	let onAddPost = (values) => {
// 		props.addPost(values.newPostText);
// 	}

// 	const maxLength10 = maxLengthCreator(10);

// 	const addNewPostForm = (props) => {
// 		return (
// 			<form onSubmit={props.handleSubmit}>
// 				<Field
// 					component={Textarea}
// 					name="newPostText"
// 					placeholder="Send post"
// 					validate={[required, maxLength10]}
// 				/>
// 				<button>Add post</button>
// 			</form>
// 		)
// 	}

// 	const AddPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(addNewPostForm);

// 	return (
// 		<div className={s.myPosts}>
// 			<div className={s.textArea}>
// 				<AddPostFormRedux onSubmit={onAddPost} />
// 			</div>
// 			<div className={s.posts}>
// 				{postsElements}
// 			</div>
// 		</div>
// 	)
// });

// export default MyPosts;


//----------------------------------------------------------------------------



import React, { useState } from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from "../../utils/validators/validators.ts";
import { Textarea } from "../../Common/FormsControls/FormsControls.tsx";
// import { profileAPI } from "../../../api/api.ts";


const MyPosts = React.memo(props => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = (event) => {
		setSearchQuery(event.target.value);
	}

	const filteredPosts = props.postsData.filter(post =>
		post.message.toLowerCase().includes(searchQuery.toLowerCase())
	);

	let postsElements = filteredPosts.map(post => (
		<Post
			key={post.id}
			message={post.message}
			likes={post.likes}
			id={post.id}
			// userId={userId}
			deletePost={props.deletePost}
			likePost={props.likePost}
			dislikePost={props.dislikePost}
		/>
	));

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	}

	const maxLength10 = maxLengthCreator(50);

	const addNewPostForm = (props) => {
		return (

			<form onSubmit={props.handleSubmit}>
				<Field
					component={Textarea}
					name="newPostText"
					placeholder="Send post"
					validate={[required, maxLength10]}
					className={s.textarea}
				/>
				<button className={s.addpostbtn}>Add post</button>
			</form>
		)
	}

	const AddPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(addNewPostForm);

	return (
		<div className={s.myPosts}>
			<div className={s.search}>
				<input
					type="text"
					placeholder="Search posts..."
					value={searchQuery}
					onChange={handleSearch}
					className={s.textarea}
				/>
			</div>
			<div className={s.textArea}>
				<AddPostFormRedux onSubmit={onAddPost} />
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
});

export default MyPosts;
