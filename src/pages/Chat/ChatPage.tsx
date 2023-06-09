import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { ChatMessageType } from "../../api/chat-api"
import s from './chatPage.module.css'
import { startMessagesListening, stopMessagesListening, sendMessage } from '../../Redux/chat-reduser.ts'


const ChatPage: React.FC = () => {
	return (
		<div><Chat /></div>
	)
}

const Chat: React.FC = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startMessagesListening())
		return () => {
			dispatch(stopMessagesListening())
		}
	}, [dispatch]) // не впевнений на рахунок цього діспатч

	return (
		<div>
			<Messages />
			<AddMessageForm />
		</div>
	)
}

const Messages: React.FC = () => {
	const messages = useSelector((state: any) => state.chat.messages)

	return (
		<div style={{ height: '500px', overflowY: 'auto' }}>
			{messages.map((m, index) => <Message key={index} message={m} />)}
		</div>
	)
}

const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
	return (
		<div>
			<div>
				<img alt="#" src={message.photo} className={s.imgLogo} /> <b>{message.userName}</b>
			</div>
			<div>
				{message.message}
			</div>
			<hr />
		</div >
	)
}

const AddMessageForm: React.FC = () => {
	const [message, setMessage] = useState('')
	// const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

	const dispatch = useDispatch()

	const sendMessageHandler = () => {
		if (!message) {
			return;
		}
		dispatch(sendMessage(message))
		setMessage('')
	}

	return (
		<div>
			<div>
				<textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
			</div>
			<div>
				<button disabled={false} onClick={sendMessageHandler}>Send</button>
			</div>
		</div>
	)
}

export default ChatPage;
