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
		<div className={s.chatItems}>
			{status === 'error' && <div>Some Error occured. Please refresh the page </div>}
			<div className={s.chat}>
				<Messages />
				<AddMessageForm />
			</div>

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
		<div className={s.messagesitems} style={{ height: '500px', overflowY: 'auto' }} onScroll={scrollHandler}>
			{messages.map((m, index) => <Message key={m.id} message={m} />)}
			<div ref={messagesAnchorRef}></div>
		</div>
	)
}

const Message: React.FC<{ message: ChatMessageType }> = React.memo(({ message }) => {
	return (
		<div className={s.messageWrapper}>
			<div className={s.userInfo}>
				<img alt="#" src={message.photo} className={s.imgLogo} /> 
				<div className={s.messUser}>{message.userName}</div>
			</div>
			<div className={s.messageText}>
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
		<div className={s.addmessageForm}>
			<div>
				<textarea className={s.sendmes} onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
			</div>
			<div>
				<button className={s.sendbtn} disabled={status !== 'ready'} onClick={sendMessageHandler}>Send</button>
			</div>
		</div>
	)
}

export default ChatPage;
