import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const style = {
  form: `h-14 w-full max-w-[100%] flex rounded-lg text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `flex items-center px-4 w-[125px] rounded-lg font-semibold bg-green-500`,
};
const SendMessage = () => {
  return (
    <form className={style.form}>
      <input className={style.input} type="text" placeholder="Type a message" />
      <button className={style.button} type="submit">
        Send &nbsp; {<AiOutlineSend />}
      </button>
    </form>
  );
};

export default SendMessage;
