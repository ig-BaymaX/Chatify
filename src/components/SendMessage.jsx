import React from "react";

const style = {
  form: `h-14 w-full max-w-[100%] flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[200px] rounded-xl bg-green-500`,
};
const SendMessage = () => {
  return (
    <form className={style.form}>
      <input className={style.input} type="text" placeholder="Message" />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
