import firebase from "firebase";
import React, { useState } from "react";
import { auth } from "../App";

export const ChatForm = ({ messagesRef, chatBottomRef }) => {
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    // clearing the form before add the msg to
    // firestore to avoid any latency in visuals
    setFormValue("");

    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={sendMessage}>
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Enter your message"
        />
        <button type="submit" disabled={!formValue}>
          <i className="fad fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};
