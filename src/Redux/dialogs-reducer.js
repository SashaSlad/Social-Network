const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	messagesData: [
		{ id: "1", message: "Hi, it is my first progect!" },
		{ id: "2", message: "I hope you will like it!" },
		{ id: "3", message: "Good luck!" },
	],
	dialogsData: [
		{ id: "1", name: "Sasaha" },
		{ id: "2", name: "Pivaha" },
		{ id: "3", name: "Ludaha" },
	]
};

export const dialogsReducer = (state = initialState, action) => {



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

//-----Додавання повідомлень------
export const sendMessageCreator = (newMessageBody) => ({
	type: SEND_MESSAGE,
	newMessageBody
});


export default dialogsReducer;