const SEND_MESSAGE = 'SEND-MESSAGE';


type MessageType = {
	id: string
	message: string
}

type DialogType = {
	id: string
	name: string
}

let initialState = {
	messagesData: [
		{ id: "1", message: "Hi, it is my first progect!" },
		{ id: "2", message: "I hope you will like it!" },
		{ id: "3", message: "Good luck!" },
	] as Array<MessageType>,
	dialogsData: [
		{ id: "1", name: "Sasaha" },
		{ id: "2", name: "Pivaha" },
		{ id: "3", name: "Ludaha" },
	] as Array<DialogType>
};

export type InitialStateType = typeof initialState;


export const dialogsReducer = (state = initialState, action: any): InitialStateType => {

	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messagesData: [...state.messagesData, { id: "4", message: body }],
			};

		default:
			return state;
	}
}

type SendMessageCreatorActionType = {
	type: typeof SEND_MESSAGE
	newMessageBody: string
}
//-----Додавання повідомлень------
export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({
	type: SEND_MESSAGE,
	newMessageBody
});


export default dialogsReducer;