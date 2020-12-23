import React from 'react';
import chat from "./chat";
import "./room.css";

function Room() {

    const roomId = '123';
    const [text, setText] = React.useState('');
    const { messages, sendMessage } = chat(roomId);

    const sendMessageHandler = () => {
        sendMessage(text);
        setText('')
    }

    const handleMessageChange = (event) => {
        setText(event.target.value);
        console.log('----------------------------');
    }

    return (
        <div className='messaging-div'>
            <div id='message-display-area'>
                {messages.map((message) => {
                    console.log(message.body)
                })}
            </div>
            <textarea value={text} id="text-input-area" onChange={handleMessageChange} placeholder='Enter Message Here...'/>
            <button onClick={sendMessageHandler}>Send Message</button>
        </div>
    )
}

export default Room
