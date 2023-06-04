import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { follow, unfollow, requestUsers } from "../../Redux/users-reducer.ts";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../Redux/users-selectors.ts";
import { UserType } from "../../types/types";
import Preloader from "../Common/Preloader/Preloader";
import Users from "./Users.tsx";
import { AppStateType } from '../../Redux/redux-store'
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
	currentPage: number
	pageSize: number
	isFetching: boolean
	totalUsersCount: number
	users: Array<UserType>
	followingInProgress: Array<number>
}

type MapDispatchPropsType = {

	requestUsers: (currentPage: number, pageSize: number) => void
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	setCurrentPage: () => void
	toggleFollowingProgress: () => void
}

type PropsType = MapDispatchPropsType & MapStatePropsType

class UsersContainer extends React.Component<PropsType> {

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


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, TMergedProps = {}, State = DefaultState
export default compose(connect<MapStatePropsType, MapDispatchPropsType, AppStateType>(mapStateToProps, { follow, unfollow, requestUsers }))(UsersContainer)
