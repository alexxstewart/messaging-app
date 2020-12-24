import React from 'react';
import chat from "./chat";
import "./room.css";
import { v4 as uuidv4 } from 'uuid';

function Room() {
    const roomId = '123';
    const [text, setText] = React.useState('');
    const { messages, sendMessage } = chat(roomId);

    const sendMessageHandler = () => {
        // generate a random id for the text message and send the message
        sendMessage(text, uuidv4());
        setText('')
    }

    const checkEnterKeySubmit = (event) => {
        if (event.which === 13){
            // enter key was pressed
            sendMessage(text)
            setText('')
        }
    }

    const handleMessageChange = (event) => {
        setText(event.target.value);
        console.log('----------------------------');
    }

    return (
        <div className='messaging-div'>
            <div id='message-display-area'>
                {messages.map((message) => {
                    return <p key={message.messageID} className='message'>{message.body}</p>
                })}
            </div>
            <textarea value={text} id="text-input-area" onChange={handleMessageChange} onKeyDown={checkEnterKeySubmit} placeholder='Enter Message Here...'/>
            <button onClick={sendMessageHandler}>Send Message</button>
        </div>
    )
}

export default Room
