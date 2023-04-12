import React from "react";
import { FiLogOut } from "react-icons/fi";
import { auth } from "../firebase";

const style = {
  button: `flex items-center bg-red-800 px-4 py-2 hover:bg-blue-600 rounded-md text-white font-semibold`,
};

const LogOut = () => {
  const signOut = () => {
    signOut();
  };
  return (
    <button onClick={() => auth.signOut()} className={style.button}>
      Logout &nbsp;
      {<FiLogOut />}
    </button>
  );
};

export default LogOut;
