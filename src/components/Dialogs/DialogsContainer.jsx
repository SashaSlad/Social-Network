import { sendMessageCreator } from "../../Redux/dialogs-reducer.ts";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";




let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (newMessageBody) => { dispatch(sendMessageCreator(newMessageBody)) },
	}
}
export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;

