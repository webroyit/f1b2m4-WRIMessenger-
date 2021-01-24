import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = event => {
    event.preventDefault();

    // `...` to get a copy of the array
    setMessages([...messages, input]);

    setInput('');
  }

  return (
    <div className="App">
      <h1>WRI Messenger</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button type="submit" onClick={sendMessage}>Send Message</button>
      </form>

      {
        messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
