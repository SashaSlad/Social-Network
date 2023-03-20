import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from "../../Redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import Users from "./Users";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";



class UsersContainer extends React.Component {

	// constructor(props) {
	// 	super(props);
	// }

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
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

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

export default compose(connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }))(UsersContainer)

// ------- з перевіркою на логін -------
// export default compose(connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }), withAuthRedirect)(UsersContainer)


// export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })(UsersContainer);

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => {
// 			dispatch(followAC(userId));
// 		},
// 		unfollow: (userId) => {
// 			dispatch(unfollowAC(userId));
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users));
// 		},
// 		setCurrentPage: (pageNumber) => {
// 			dispatch(setCurrentPageAC(pageNumber));
// 		},
// 		setTotalUsersCount: (totalCount) => {
// 			dispatch(setTotalUsersCountAC(totalCount));
// 		},
// 		toggleIsFetching: (isFetching) => {
// 			dispatch(toggleIsFetchingAC(isFetching));
// 		}
// 	}
// }



//export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);