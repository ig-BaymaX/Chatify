import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";

const style = {
  main: `flex flex-col p-[10px] relative`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  return (
    <>
      <main className={style.main}>
        {/* Chat message component */}
        <Message />
      </main>
      {/* Send message component */}
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
