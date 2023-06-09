
let subcribers = [] as SubscriberType[]

let ws: WebSocket | null = null;

const closeHandler = () => {
	setTimeout(createChennel, 3000);
}

const messageHandler = (e: MessageEvent) => {
	const newMessages = JSON.parse(e.data)
	subcribers.forEach(s => s(newMessages))
}

function createChennel() {
	ws?.removeEventListener('close', closeHandler)
	ws?.close()

	ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
	ws.addEventListener('close', closeHandler)
	ws.addEventListener('message', messageHandler)

}

export const chatApi = {
	start() {
		createChennel();
	},

	stop() {
		subcribers = []
		ws?.removeEventListener('close', closeHandler)
		ws?.removeEventListener('message', messageHandler)
		ws?.close()
	},

	subscribe(callback: SubscriberType) {
		subcribers.push(callback)
		return () => {
			subcribers = subcribers.filter(s => s !== callback)
		}
	},

	unsubscribe(callback: SubscriberType) {
		subcribers = subcribers.filter(s => s !== callback)
	},

	sendMessage(message: string) {
		ws?.send(message)
	}
}


type SubscriberType = (messages: ChatMessageType[]) => void

export type ChatMessageType = {
	message: string
	photo: string
	userId: number
	userName: string
}


