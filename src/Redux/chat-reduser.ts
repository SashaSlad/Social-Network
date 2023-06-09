// import { FormAction } from 'redux-form';
// import { ChatMessageType, chatApi, SatusType } from './../api/chat-api.ts';
// import { InferActionsTypes, BaseThunkType } from './redux-store';



// // type SatusType = 'pending' | 'ready'

// let initialState = {
// 	messages: [] as ChatMessageType[],
// 	status: 'pending' as SatusType
// };


// const chatReducer = (state = initialState, action: ActionsType) => {
// 	switch (action.type) {
// 		case 'SN/chat/MESSAGES_RECEIVED':
// 			return {
// 				...state,
// 				messages: [...state.messages, ...action.payload.messages]
// 			}
// 		case 'SN/chat/STATUS_CHANGED':
// 			return {
// 				...state,
// 				status: action.payload.status
// 			}
// 		default:
// 			return state;
// 	}
// }

// export const actions = {
// 	messagesReceived: (messages: ChatMessageType[]) => ({
// 		type: 'SN/chat/MESSAGES_RECEIVED', payload: { messages }
// 	} as const),
// 	StatusChaged: (status: SatusType) => ({
// 		type: 'SN/chat/STATUS_CHANGED', payload: { status }
// 	} as const)
// }

// let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
// const newMessageHandlerCreator = (dispatch) => {
// 	if (_newMessageHandler === null) {
// 		_newMessageHandler = (messages) => {
// 			dispatch(actions.messagesReceived(messages))
// 		}
// 	}
// 	return _newMessageHandler
// }

// let _statusChangedHandler: ((status: SatusType[]) => void) | null = null
// const statusChangedHandlerCreator = (dispatch) => {
// 	if (_statusChangedHandler === null) {
// 		_statusChangedHandler = (status) => {
// 			dispatch(actions.StatusChaged(status))
// 		}
// 	}
// 	return _statusChangedHandler
// }

// export const startMessagesListening = () => async (dispatch): ThunkType => {
// 	chatApi.start()
// 	chatApi.subscribe('message-received', newMessageHandlerCreator(dispatch))
// 	chatApi.subscribe('satus-changed', statusChangedHandlerCreator(dispatch))

// }

// export const stopMessagesListening = () => async (dispatch): ThunkType => {
// 	chatApi.unubscribe('message-received', newMessageHandlerCreator(dispatch))
// 	chatApi.unsubscribe('satus-changed', statusChangedHandlerCreator(dispatch))
// 	chatApi.stop()
// }

// export const sendMessage = (message: string): ThunkType => async (dispatch) => {
// 	chatApi.sendMessage(message)
// }


// export default chatReducer;

// export type InitialStateType = typeof initialState;
// type ActionsType = InferActionsTypes<typeof actions>
// type ThunkType = BaseThunkType<ActionsType | FormAction>

//----------------------------------------------------------------

import { FormAction } from 'redux-form';
import { ChatMessageType, chatApi, StatusType } from './../api/chat-api.ts';
import { InferActionsTypes, BaseThunkType } from './redux-store';

let initialState = {
	messages: [] as ChatMessageType[],
	status: 'pending' as StatusType
};

const chatReducer = (state = initialState, action: ActionsType) => {
	switch (action.type) {
		case 'SN/chat/MESSAGES_RECEIVED':
			return {
				...state,
				messages: [...state.messages, ...action.payload.messages]
			};
		case 'SN/chat/STATUS_CHANGED':
			return {
				...state,
				status: action.payload.status
			};
		default:
			return state;
	}
};

export const actions = {
	messagesReceived: (messages: ChatMessageType[]) => ({
		type: 'SN/chat/MESSAGES_RECEIVED',
		payload: { messages }
	} as const),
	statusChanged: (status: StatusType) => ({
		type: 'SN/chat/STATUS_CHANGED',
		payload: { status }
	} as const)
};

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
	if (_newMessageHandler === null) {
		_newMessageHandler = (messages) => {
			dispatch(actions.messagesReceived(messages));
		};
	}
	return _newMessageHandler;
};

let _statusChangedHandler: ((status: StatusType) => void) | null = null;
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
	if (_statusChangedHandler === null) {
		_statusChangedHandler = (status) => {
			dispatch(actions.statusChanged(status));
		};
	}
	return _statusChangedHandler;
};

export const startMessagesListening = (): ThunkType => async (dispatch) => {
	chatApi.start();
	chatApi.subscribe('messages-received', newMessageHandlerCreator(dispatch));
	chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
};

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
	chatApi.unsubscribe('messages-received', newMessageHandlerCreator(dispatch));
	chatApi.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch));
	chatApi.stop();
};

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
	chatApi.sendMessage(message);
};

export default chatReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;

