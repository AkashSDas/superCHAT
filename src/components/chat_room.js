import "firebase/auth";
import "firebase/firestore";
import React, { useEffect, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../App";
import { ChatForm } from "./chat_form";
import { ChatMessage } from "./chat_message";
import { NavBar } from "./nav";

export const ChatRoom = () => {
  // referencing the message collection in firestore
  const messagesRef = firestore.collection("messages");

  // making query for subset of documents
  const query = messagesRef.orderBy("createdAt").limit(25);

  // listening to data with a hook for realtime updates
  const [messages] = useCollectionData(query, { idField: "id" });

  const chatMessagesJsx = () =>
    messages &&
    messages.map((msg) => <ChatMessage key={msg.id} message={msg} />);

  // reference for scrolling to the bottom of chat even when new message arrive
  const chatBottomRef = useRef();

  useEffect(() => {
    chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section>
      <NavBar />

      <div className="chats-container">
        <div className="chats">
          {chatMessagesJsx()}
          <span ref={chatBottomRef}></span>
        </div>
      </div>

      <ChatForm messagesRef={messagesRef} chatBottomRef={chatBottomRef} />
    </section>
  );
};
