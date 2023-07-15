import React from "react";
import SignIn from "./SignIn";
import LogOut from "./LogOut";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Background from "../assets/bg2.jpg";

const style = {
  nav1: `flex flex-row justify-between items-center rounded-md bg-gray-800 h-[95px] p-4`,
  nav2: `ml-10 flex flex-col justify-center items-center rounded-md bg-gray-800 w-[500px] h-screen p-6`,
  heading1: `text-4xl font-semibold text-white`,
  heading2: `text-8xl font-semibold text-white mb-8`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <html>
      <head>
        <title>My Title</title>
      </head>
      <div style={{ position: "fixed" }}>
        <img
          src={Background}
          alt="background"
          className="fixed inset-0 object-cover blur-[0px] brightness-50 w-full h-full"
        />

        <nav
          className="static flex flex-col justify-center items-center"
          style={{ backdropFilter: "blur(3px)" }}
        >
          <div className={user ? style.nav1 : style.nav2}>
            <div className={user ? style.heading1 : style.heading2}>
              <h1 class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
                ChatROOM
              </h1>
            </div>
            {user ? <LogOut /> : <SignIn />}
          </div>
        </nav>
      </div>
    </html>
  );
};

export default Navbar;
