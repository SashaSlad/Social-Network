import React, { useEffect, useRef, useState } from "react"
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
	const status = useSelector((state: any) => state.chat.status)

	useEffect(() => {
		dispatch(startMessagesListening())
		return () => {
			dispatch(stopMessagesListening())
		}
	}, [dispatch]) // не впевнений на рахунок цього діспатч

	return (
		<div>
			{status === 'error' && <div>Some Error occured. Please refresh the page </div>}
			<>
				<Messages />
				<AddMessageForm />
			</>

		</div>
	)
}

const Messages: React.FC = () => {
	const messages = useSelector((state: any) => state.chat.messages)
	const messagesAnchorRef = useRef<HTMLDivElement>(null);
	const [isAutoIsScroll, setIsAutoScroll] = useState(true)
	const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
		const element = e.currentTarget;
		if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
			!isAutoIsScroll && setIsAutoScroll(true)
		} else {
			!isAutoIsScroll && setIsAutoScroll(false)
		}
	}

	useEffect(() => {
		if (isAutoIsScroll) {
			messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' })
		}
	}, [messages])

	return (
		<div style={{ height: '500px', overflowY: 'auto' }} onScroll={scrollHandler}>
			{messages.map((m, index) => <Message key={m.id} message={m} />)}
			<div ref={messagesAnchorRef}></div>
		</div>
	)
}

const Message: React.FC<{ message: ChatMessageType }> = React.memo(({ message }) => {
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
})

const AddMessageForm: React.FC = () => {
	const [message, setMessage] = useState('')
	// const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')
	const dispatch = useDispatch()
	const status = useSelector((state: any) => state.chat.status)

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
				<button disabled={status !== 'ready'} onClick={sendMessageHandler}>Send</button>
			</div>
		</div>
	)
}

export default ChatPage;
