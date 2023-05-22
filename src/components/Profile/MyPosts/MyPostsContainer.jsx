import { addPostActionCreator } from "../../../Redux/pofile-reducer.ts";
import MyPosts from "./MyPosts";
import { connect } from "react-redux/es/exports";

const mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: (newPostText) => { dispatch(addPostActionCreator(newPostText)) }
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;