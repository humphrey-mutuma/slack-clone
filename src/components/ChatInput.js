import { Button } from "@material-ui/core";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase";
import { useState } from "react";

const ChatInput = ({ channelName, channelId, chatRef  }) => {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Humphrey Mutuma",
      userImage:
        "https://www.google.com/search?q=images&sxsrf=ALeKk023fGONl40tMaMoqsrzZqhzLWVQdA:1620752947996&tbm=isch&source=iu&ictx=1&fir=1E4Z16ujrn_JRM%252C27q4HQp-2Qmx0M%252C_&vet=1&usg=AI4_-kQ21-p1-AVGl_LsLl2eWiPQVJwdHw&sa=X&ved=2ahUKEwj69-6dj8LwAhXwhP0HHZnKDWQQ9QF6BAgrEAE#imgrc=1E4Z16ujrn_JRM",
    });

     chatRef?.current?.scrollIntoView({
       behavior: "smooth",
     });

     setInput('')
  };

  return (
    <ChatInputComponent>
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Message #${channelName}`}
        />
        <Button onClick={sendMessage} hidden type="submit">
          Send
        </Button>
      </form>
    </ChatInputComponent>
  );
};

export default ChatInput;

const ChatInputComponent = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none;
  }
`;
