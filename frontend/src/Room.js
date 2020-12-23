import React from 'react'
import chat from "./chat";

function Room() {

    const roomId = '123';
    const [text, setText] = React.useState('');
    const { messages, sendMessage } = chat(roomId);

    const clickHandler = () => {
        console.log(text)
        sendMessage('hello there')
    }

    return (
        <div>
            <h1>{text}</h1>
            <h2>Hello there</h2>
            <button onClick={clickHandler}>Click Me!</button>
        </div>
    )
}

export default Room
