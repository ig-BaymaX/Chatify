import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  form: `h-14 w-full max-w-[100%] flex rounded-lg text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 text-white bg-gradient-to-r from-[#172154] to-[#14991f] rounded-lg opacity-75`,
  button: `ml-2 flex items-center px-4 rounded-full font-semibold opacity-80 bg-green-500`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please type a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Type a message"
      />
      <button className={style.button} type="submit">
        {<AiOutlineSend />}
      </button>
    </form>
  );
  setInput("");
};

export default SendMessage;
