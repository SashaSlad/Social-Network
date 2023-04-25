import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from "../../Redux/users-reducer";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../Redux/users-selectors";
import Preloader from "../Common/Preloader/Preloader";
import Users from "./Users";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";



class UsersContainer extends React.Component {

	// constructor(props) {
	// 	super(props);
	// }

	componentDidMount() {
		const { currentPage, pageSize } = this.props
		this.props.requestUsers(currentPage, pageSize);
	}

	onPageChanged = (pageNumber) => {
		const { pageSize } = this.props
		this.props.requestUsers(pageNumber, pageSize);
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users 
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		);
	}
}


// let mapStateToProps = (state) => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress
// 	}
// }


let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default compose(connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers }))(UsersContainer)
