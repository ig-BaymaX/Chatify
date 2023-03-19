import React from "react";
import { auth } from "../firebase";

const style = {
  button: `bg-blue-400 px-4 py-2 hover:bg-blue-800 rounded-md text-white font-semibold`,
};

const LogOut = () => {
  const signOut = () => {
    signOut();
  };
  return (
    <button onClick={() => auth.signOut()} className={style.button}>
      Logout
    </button>
  );
};

export default LogOut;
