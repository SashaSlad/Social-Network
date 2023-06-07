// import { addPostActionCreator } from "../../../Redux/pofile-reducer.ts";
// import MyPosts from "./MyPosts";
// import { connect } from "react-redux/es/exports";

// const mapStateToProps = (state) => {
// 	return {
// 		postsData: state.profilePage.postsData,
// 		newPostText: state.profilePage.newPostText
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addPost: (newPostText) => { dispatch(addPostActionCreator(newPostText)) }
// 	}
// }

// const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

// export default MyPostsContainer;

//-----------------------------------------------------------------------------------------------


// import { addPostActionCreator, likePostActionCreator, dislikePostActionCreator, deletePostActionCreator } from "../../../Redux/profile-reducer.ts";
import { addPostActionCreator, likePostActionCreator, dislikePostActionCreator, deletePostActionCreator } from "../../../Redux/pofile-reducer.ts";

import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: (newPostText) => { dispatch(addPostActionCreator(newPostText)) },
		likePost: (postId) => { dispatch(likePostActionCreator(postId)) },
		dislikePost: (postId) => { dispatch(dislikePostActionCreator(postId)) },
		deletePost: (postId) => { dispatch(deletePostActionCreator(postId)) }
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
