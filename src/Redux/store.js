import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./pofile-reducer";

let store = {
	_state: {

		profilePage: {

			postsData: [
				{ id: "1", message: "Hi, it is my first progect!", likes: "7" },
				{ id: "2", message: "I hope you will like it!", likes: "16" },
				{ id: "3", message: "Good luck!", likes: "23" },
			],
			newPostText: 'it-kam',
		},

		dialogsPage: {

			messagesData: [
				{ id: "1", message: "Hi, it is my first progect!" },
				{ id: "2", message: "I hope you will like it!" },
				{ id: "3", message: "Good luck!" },
			],
			dialogsData: [
				{ id: "1", name: "Sasaha" },
				{ id: "2", name: "Pivaha" },
				{ id: "3", name: "Ludaha" },
			],
			newMessageBody: '',
		},

	},

	_callSubscriber() {
		console.log('state changed');
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer; //патрон
	},

	dispath(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		this._callSubscriber(this._state);
	}

}

window.state = store;
export default store; 