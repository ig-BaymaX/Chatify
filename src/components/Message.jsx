import React from "react";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full `,
  name: `fixed mt-[-4rem] text-gray-600 text-xs`,
};
const Messages = () => {
  return (
    <div>
      <div className={style.message}>
        <p className={style.name}>Dave</p>
        <p>I am learning React</p>
      </div>
    </div>
  );
};

export default Messages;
