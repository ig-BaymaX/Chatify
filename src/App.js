import React from "react";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  appContainer: `max-w-[100%] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[95vh] rounded-md bg-gray-300 mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  // console.log(user);

  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {/* Chat component */}
        <Chat />
      </section>
    </div>
  );
}

export default App;
