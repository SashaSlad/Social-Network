import { FormAction } from 'redux-form';
import { ChatMessageType, chatApi } from './../api/chat-api.ts';
import { InferActionsTypes, BaseThunkType } from './redux-store';





let initialState = {
	messages: [] as ChatMessageType[]
};


const chatReducer = (state = initialState, action: ActionsType) => {
	switch (action.type) {
		case 'SN/chat/MESSAGES_RECEIVED':
			return {
				...state,
				messages: [...state.messages, ...action.payload.messages]
			}
		default:
			return state;
	}
}

export const actions = {
	messagesReceived: (messages: ChatMessageType[]) => ({
		type: 'SN/chat/MESSAGES_RECEIVED', payload: { messages }
	} as const)
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch) => {
	if (_newMessageHandler === null) {
		_newMessageHandler = (messages) => {
			dispatch(actions.messagesReceived(messages))
		}
	}
	return _newMessageHandler
}

export const startMessagesListening = () => async (dispatch): ThunkType => {
	chatApi.start()
	chatApi.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessagesListening = () => async (dispatch): ThunkType => {
	chatApi.unubscribe(newMessageHandlerCreator(dispatch))
	chatApi.stop()
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
	chatApi.sendMessage(message)
}


export default chatReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>


