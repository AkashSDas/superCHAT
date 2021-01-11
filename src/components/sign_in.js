import React from "react";
import { signInWithGoogle } from "../App";
import { Logo } from "./logo";

const SignInBtn = () => (
  <div className="sign-in-btn" onClick={signInWithGoogle}>
    <i className="fab fa-google"></i>
    <span>Sign in with Google</span>
  </div>
);

export const SignIn = () => {
  return (
    <section className="sign-in">
      <Logo />
      <div className="description">
        <span>build with</span>
        <img src="/react-logo.svg" />
        <img src="/firebase-logo.svg" />
      </div>
      <SignInBtn />
    </section>
  );
};
