import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import p from './Profile.module.css';
import { getUserProfile, getStatus, updateStatus } from "../../Redux/pofile-reducer";
// import { withRouter } from 'react-router-dom';
import withRouter from "../Common/withRouter/withRouter";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";



class ProfileContainer extends React.Component {

	componentDidMount() {

		let userId = this.props.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId
			// userId = 27905;
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}

	render() {
		return (
			<div className={p.content} >
				<Profile {...this.props}
					profile={this.props.profile}
					status={this.props.status}
					updateStatus={this.props.updateStatus} />
			</div>
		)
	}
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.userId,
		isAuth: state.auth.isAuth
	}
}

// let WitUrlDataContainerComponent = withRouter(AuthRedirectComponent)



// export default connect(mapStateToProps, { getUserProfile })(WitUrlDataContainerComponent);
export default compose(connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }), withRouter, withAuthRedirect,)(ProfileContainer);