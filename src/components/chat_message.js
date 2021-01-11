import React from "react";
import { auth } from "../App";

export const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;

  // to distinguish between user's and other's msgs
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>
  );
};
