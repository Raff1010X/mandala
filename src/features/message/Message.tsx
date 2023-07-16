import { createPortal } from 'react-dom'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { sendMessage, selectMessage } from './messageSlice'

import './message.css'

export default function Message() {
    const message = useAppSelector(selectMessage)

    const dispatch = useAppDispatch()

    const handleClickOK = () => {
        dispatch(sendMessage(''))
    }

    const container = (
        <div className="message" onClick={handleClickOK}>
            <div className="message__container">
                <div className="message__text">{message}</div>
                <button id="message__button" onClick={handleClickOK}>
                    OK
                </button>
            </div>
        </div>
    )
    if (message === '') return null

    return createPortal(container, document.getElementById('message') as HTMLDivElement)
}
