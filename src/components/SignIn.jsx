import React from "react";
import GoogleButton from "react-google-button";

import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const style = {
  wrapper: `flex flex-col justify-center`,
};

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const Signin = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSignIn} className="font-semibold" />
    </div>
  );
};

export default Signin;
