import React, { useState } from 'react';
import { Button } from '@material-ui/core';
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
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}>
            Send Message
        </Button>
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
