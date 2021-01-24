import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = event => {
    // `...` to get a copy of the array
    setMessages([...messages, input]);

    setInput('');
  }

  return (
    <div className="App">
      <h1>WRI Messenger</h1>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button onClick={sendMessage}>Send Message</button>

      {
        messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
