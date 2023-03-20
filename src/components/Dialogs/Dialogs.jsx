import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from "../Common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../utils/validators/validators";

const Dialogs = (props) => {

	let state = props.dialogsPage;

	let dialogsElements = state.dialogsData.map(dialogs => <DialogItem name={dialogs.name} key={dialogs.id} id={dialogs.id} />);
	let messagesElements = state.messagesData.map(messages => <Message message={messages.message} key={messages.id} id={messages.id} />);
	//let newMessageBody = state.newMessageBody;

	const maxLength15 = maxLengthCreator(15);


	const AddMessageForm = (props) => {
		return (
			<form onSubmit={props.handleSubmit}>
				<Field component={Textarea}
					name={"newMessageBody"}
					placeholder='Enter your message'
					validate={[required, maxLength15]} />

				<button> Send </button>

			</form>
		)
	}
	const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>

			<div className={s.line}></div>

			<div className={s.messages}>
				<div>{messagesElements}</div>
				<div className={s.sendMessageWrapp}>

					<AddMessageFormRedux onSubmit={addNewMessage} />

				</div>
			</div>
		</div >
	)
}

export default Dialogs;