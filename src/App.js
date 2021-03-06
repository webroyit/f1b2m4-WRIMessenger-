import React, { useState, useEffect } from 'react';
import { FormControl, Input, IconButton } from '@material-ui/core';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

import './App.css';
import db from './firebase';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // Run once when the app component loads
  useEffect(() => {
    // 'onSnapshot()' get the data from firebase in realtime 
    db
      .collection('messages')
      // Sort the messages by date
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
      
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name'));

    // if its blank inside [], this code runs ONCE when the app component loads
  }, [])   // Condition

  const sendMessage = event => {
    event.preventDefault();

    db.collection('messages').add({
      text: input,
      username: username,
      // Use the timezone that is set on firebase
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <h1>WRI Messenger</h1>
      <h2>Welcome {username || "Guest"}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}>
              <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      {/* Each element must have key for FlipMove to work*/}
      <FlipMove>
        {
          messages.map(({message, id}) => (
            <Message username={username} message={message} key={id} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
