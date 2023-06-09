
// const subcribers = {
// 	'messages-received': [] as SubscriberType[],
// 	'satus-changed': [] as StatusChangedSubscriberType[]
// }

// let ws: WebSocket | null = null;
// type EventsNamesType = 'messages-received' | 'satus-changed'

// const closeHandler = () => {
// 	notifySubscribersAboutStatus('pending')
// 	setTimeout(createChennel, 3000);
// }

// const messageHandler = (e: MessageEvent) => {
// 	const newMessages = JSON.parse(e.data)
// 	subcribers['messages-received'].forEach(s => s(newMessages))
// }

// const openHandler = () => {
// 	notifySubscribersAboutStatus('ready')
// }

// const errorHandler = () => {
// 	notifySubscribersAboutStatus('error')
// 	console.error('REFRES PAGE')
// }

// const cleanUp = () => {
// 	ws?.removeEventListener('close', closeHandler)
// 	ws?.removeEventListener('message', messageHandler)
// 	ws?.removeEventListener('open', openHandler)
// 	ws?.removeEventListener('error', errorHandler)
// }

// const notifySubscribersAboutStatus = (status: SatusType) => {
// 	subcribers['satus-changed'].forEach(s => status)
// }

// function createChennel() {
// 	cleanUp();
// 	ws?.close()
// 	ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
// 	notifySubscribersAboutStatus('pending')
// 	ws.addEventListener('close', closeHandler)
// 	ws.addEventListener('message', messageHandler)
// 	ws.addEventListener('open', openHandler)
// 	ws.addEventListener('error', errorHandler)
// }

// export const chatApi = {
// 	start() {
// 		createChennel();
// 	},

// 	stop() {
// 		subcribers['messages-received'] = []
// 		subcribers['satus-changed'] = []
// 		cleanUp();
// 		ws?.close()
// 	},

// 	subscribe(eventName: EventsNamesType, callback: SubscriberType | StatusChangedSubscriberType) {
// 		//@ts-ignore
// 		subcribers[eventName].push(callback)
// 		return () => {
// 			//@ts-ignore

// 			subcribers[eventName] = subcribers[eventName].filter(s => s !== callback)
// 		}
// 	},

// 	unsubscribe(eventName: EventsNamesType, callback: SubscriberType | StatusChangedSubscriberType) {
// 		//@ts-ignore

// 		subcribers[eventName] = subcribers[eventName].filter(s => s !== callback)
// 	},

// 	sendMessage(message: string) {
// 		ws?.send(message)
// 	}
// }


// type SubscriberType = (messages: ChatMessageType[]) => void
// type StatusChangedSubscriberType = (status: SatusType) => void

// export type ChatMessageType = {
// 	message: string
// 	photo: string
// 	userId: number
// 	userName: string
// }

// export type SatusType = 'pending' | 'ready' | 'error'

//-----------------------------------------------


const subscribers = {
	'messages-received': [] as SubscriberType[],
	'status-changed': [] as StatusChangedSubscriberType[]
};

let ws: WebSocket | null = null;
type EventNamesType = 'messages-received' | 'status-changed';

const closeHandler = () => {
	notifySubscribersAboutStatus('pending');
	setTimeout(createChannel, 3000);
};

const messageHandler = (e: MessageEvent) => {
	const newMessages = JSON.parse(e.data);
	subscribers['messages-received'].forEach((s) => s(newMessages));
};

const openHandler = () => {
	notifySubscribersAboutStatus('ready');
};

const errorHandler = () => {
	notifySubscribersAboutStatus('error');
	console.error('REFRESH PAGE');
};

const cleanup = () => {
	ws?.removeEventListener('close', closeHandler);
	ws?.removeEventListener('message', messageHandler);
	ws?.removeEventListener('open', openHandler);
	ws?.removeEventListener('error', errorHandler);
};

const notifySubscribersAboutStatus = (status: StatusType) => {
	subscribers['status-changed'].forEach((s) => s(status));
};

function createChannel() {
	cleanup();
	ws?.close();
	ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
	notifySubscribersAboutStatus('pending');
	ws.addEventListener('close', closeHandler);
	ws.addEventListener('message', messageHandler);
	ws.addEventListener('open', openHandler);
	ws.addEventListener('error', errorHandler);
}

export const chatApi = {
	start() {
		createChannel();
	},

	stop() {
		subscribers['messages-received'] = [];
		subscribers['status-changed'] = [];
		cleanup();
		ws?.close();
	},

	subscribe(eventName: EventNamesType, callback: SubscriberType | StatusChangedSubscriberType) {
		if (subscribers.hasOwnProperty(eventName)) {
			subscribers[eventName].push(callback);
		}
		return () => {
			subscribers[eventName] = subscribers[eventName].filter((s) => s !== callback);
		};
	},

	unsubscribe(eventName: EventNamesType, callback: SubscriberType | StatusChangedSubscriberType) {
		if (subscribers.hasOwnProperty(eventName)) {
			subscribers[eventName] = subscribers[eventName].filter((s) => s !== callback);
		}
	},

	sendMessage(message: string) {
		ws?.send(message);
	}
};

type SubscriberType = (messages: ChatMessageType[]) => void;
type StatusChangedSubscriberType = (status: StatusType) => void;

export type ChatMessageType = {
	message: string;
	photo: string;
	userId: number;
	userName: string;
};

export type StatusType = 'pending' | 'ready' | 'error';
