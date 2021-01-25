import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

import './App.css';
import Message from './Message';

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
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}>
              Send Message
          </Button>
        </FormControl>
      </form>

      {
        messages.map((message, index) => (
          <Message text={message} key={index} />
        ))
      }
    </div>
  );
}

export default App;
