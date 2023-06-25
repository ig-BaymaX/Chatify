import React from "react";
import SignIn from "./SignIn";
import LogOut from "./LogOut";
// import Icon from "../assets/logo.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  nav1: `flex flex-row justify-between items-center rounded-md bg-gray-800 h-[95px] p-4`,
  nav2: `flex flex-col justify-center items-center rounded-md bg-gray-800 h-screen p-4`,
  heading1: `text-4xl font-semibold text-white`,
  heading2: `text-8xl font-semibold text-white mb-5`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <nav className={user ? style.nav1 : style.nav2}>
      <div className={user ? style.heading1 : style.heading2}>
        <h1>ChatNet</h1>
      </div>
      {user ? <LogOut /> : <SignIn />}
    </nav>
  );
};

export default Navbar;
