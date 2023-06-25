import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { auth } from "../firebase";

const style = {
  button: `flex items-center bg-red-800 px-4 py-2 hover:bg-blue-600 rounded-md text-white font-semibold`,
};

const LogOut = () => {
  const [loading, setLoading] = useState(false);

  const signOut = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Add a delay of 1000 milliseconds (1 second)
      await auth.signOut();
      // Redirect the user to the sign-in page or perform any other necessary actions
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={signOut} className={style.button}>
      {loading ? (
        <>
          Logging out.. &nbsp;
          <AiOutlineLoading3Quarters className="animate-spin text-red-600" />
        </>
      ) : (
        <>
          Logout &nbsp;
          <FiLogOut />
        </>
      )}
    </button>
  );
};

export default LogOut;
