import React from 'react';
import chat from "./chat";
import "./room.css";
import { v4 as uuidv4 } from 'uuid';

function Room() {
    const roomId = '123';
    const [text, setText] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const { messages, sendMessage } = chat(roomId);

    const sendMessageHandler = () => {
        // generate a random id for the text message and send the message
        console.log(userName);
        sendMessage(text, uuidv4(), userName);
        setText('');
    }

    const checkEnterKeySubmit = (event) => {
        if (event.which === 13){
            // enter key was pressed
            sendMessage(text, uuidv4(), userName);
            setText('');
        }
    }

    const handleMessageChange = (event) => {
        setText(event.target.value);
    }

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }
    return (
        <div className='messaging-div'>
            <div id='message-display-area'>
                {messages.map((message) => {
                    return <Message message={message}/>
                })}
            </div>
            <input id='userNameInput' type='text' value={userName} onChange={handleUserNameChange} placeholder='Handle/UserName'/>
            <textarea value={text} id='text-input-area' onChange={handleMessageChange} onKeyDown={checkEnterKeySubmit} placeholder='Enter Message Here...'/>
            <button onClick={sendMessageHandler}>Send Message</button>
        </div>
    )
}

function Message(props) {
    const message = props.message;
    console.log(message);
    if (message.ownedByCurrentUser){
        return (
            <div id='myMessage'>
                <p>{message.body}</p>
                <p>{message.userName}</p>
            </div>
        );
    }else{
        return (
            <div id='notMyMessage'>
                <p>{message.body}</p>
                <p>{message.userName}</p>
            </div>
        );
    }
}

export default Room
