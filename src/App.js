import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ChatRoom } from "./components/chat_room";
import { SignIn } from "./components/sign_in";
import "./design/style.scss";

// initialize firebase
firebase.initializeApp({
  // firebase config
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

const App = () => {
  const [user] = useAuthState(auth);
  return <main>{user ? <ChatRoom /> : <SignIn />}</main>;
};

export default App;
