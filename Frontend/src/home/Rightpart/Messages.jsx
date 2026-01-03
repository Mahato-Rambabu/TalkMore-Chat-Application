import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx";
import useGetSocketMessage from "../../context/useGetSocketMessage.js";
import axios from "axios"; // Assuming you're using axios
import { toast } from "react-hot-toast"; // For error notifications

function Messages() {
  const { loading, messages } = useGetMessage(); // Update hook to include messages
  useGetSocketMessage(); // Listening for incoming messages

  const [messageList, setMessageList] = useState(messages); // Local state for messages

  useEffect(() => {
    setMessageList(messages); // Update local state when messages prop changes
  }, [messages]);

  const handleDeleteMessage = async (id) => {
    try {
      await axios.delete(`/api/message/delete/${id}`);
      setMessageList((prevMessages) =>
        prevMessages.filter((message) => message._id !== id)
      );
    } catch (error) {
      console.error("Error deleting message", error);
      // toast.error("Error deleting message");
    }
  };
  

  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messageList]);

  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: "calc(92vh - 8vh)" }}
    >
      {loading ? (
        <Loading />
      ) : (
        messageList.length > 0 &&
        messageList.map((message) => (
          <div key={message._id} ref={lastMsgRef}>
            <Message message={message} onDelete={handleDeleteMessage} />
          </div>
        ))
      )}

      {!loading && messageList.length === 0 && (
        <div>
          <p className="text-center mt-[20%]">
            Say! Hi to start the conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default Messages;
