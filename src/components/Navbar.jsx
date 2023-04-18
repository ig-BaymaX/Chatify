import React from "react";
import SignIn from "./SignIn";
import LogOut from "./LogOut";
// import Icon from "../assets/logo.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  nav: `flex flex-row justify-between items-center rounded-md bg-gray-800 h-[95px] p-4`,
  heading: `text-4xl font-semibold text-white`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>CHAT App</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
