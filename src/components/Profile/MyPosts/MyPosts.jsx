import React from "react";
//import { addPostActionCreator, updateNewPostActionCreator } from "../../../Redux/pofile-reducer";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormsControls";


const MyPosts = React.memo(props => {

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return nextProps !== this.nextProps || nextState !== this.nextState;
	// }

	let postsElements = props.postsData.map(post => <Post message={post.message} likes={post.likes} id={post.id} />);

	//let newPostElement = React.createRef();

	let onaddPost = (values) => {
		props.addPost(values.newPostText);
	}

	const maxLength10 = maxLengthCreator(10);

	const addNewPostForm = (props) => {
		return (
			<form onSubmit={props.handleSubmit}>
				<Field component={Textarea}
					name={"newPostText"}
					placeholder='Send post'
					validate={[required, maxLength10]}
				/>
				<button >Add post</button>
				<button>Remove</button>
			</form>
		)
	}

	const AddPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(addNewPostForm);

	return (
		<div className={s.myposts}>
			<br />
			<div className={s.textar}>
				<AddPostFormRedux onSubmit={onaddPost} />
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div >
	)
}
)
export default MyPosts;