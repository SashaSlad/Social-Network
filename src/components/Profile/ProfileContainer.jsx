import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import p from './Profile.module.css';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../Redux/pofile-reducer";
// import { withRouter } from 'react-router-dom';
import withRouter from "../Common/withRouter/withRouter";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";



class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId
			// userId = 14166;
			if (!userId) {
				window.location.replace("/login");
			}
			// 27905   -> my 28218
			// 27214
			// 14166
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}


	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.params.userId !== prevProps.params.userId) {
			this.refreshProfile();
		}
	}

	render() {
		return (
			<div className={p.content} >
				<Profile {...this.props}
					isOwner={!this.props.params.userId}
					profile={this.props.profile}
					status={this.props.status}
					updateStatus={this.props.updateStatus}
					savePhoto={this.props.savePhoto} />
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
export default compose(connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }), withRouter, withAuthRedirect,)(ProfileContainer);