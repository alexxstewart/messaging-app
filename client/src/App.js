import React from 'react'
import './App.css';

function App() {

  const [newMessage, setNewMessage] = React.useState('')

  const sendMessageHandler = () => {
    console.log(newMessage)
  }

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  return (
  <div>
    <h3>Enter your message here</h3>
    <textarea value={newMessage} onChange={handleNewMessageChange}>Write message here...</textarea>
    <button onClick={sendMessageHandler}>Send Message</button>
  </div>
  )
}

export default App;
