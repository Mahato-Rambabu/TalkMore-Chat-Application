import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 h-[10vh] bg-none px-4">
        {/* Input field */}
        <input
          type="text"
          placeholder="Type here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="grow border border-gray-300 bg-gray-100 text-gray-600 rounded-full outline-none px-6 py-3"
        />
        {/* Send button */}
        <button
          type="submit"
          className="bg-gray-300 p-3 rounded-full hover:bg-gray-400 transition duration-200"
        >
          <IoSend className="text-2xl text-gray-600" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;
