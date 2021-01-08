import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import db from "./firebase";
import Message from "./Message";
import "./App.css";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import image from "./a.png";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);



  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="App">
      <img
        src={image}
        style={{ width: "50px", height: "50px", padding: "20px" }}
      />
      <h1>Facebook Messenger app </h1>
      <h2>Welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_formcontrol">
          <InputLabel>Enter a meassage</InputLabel>
          <Input
          className='app_input'  
          value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app_iconButton"
            disabled={!input}
            type="submit"
            color="primary"
            variant="contained"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, data }) => (
          <Message key={id} username={username} msg={data} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
