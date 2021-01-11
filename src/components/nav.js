import React from "react";
import { auth } from "../App";
import { Logo } from "./logo";

const SignOutBtn = () =>
  auth.currentUser && (
    <button className="signout-btn" onClick={() => auth.signOut()}>
      logout
    </button>
  );

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Logo />
        </li>
        <li className="nav-item">
          <SignOutBtn />
        </li>
      </ul>
    </nav>
  );
};
