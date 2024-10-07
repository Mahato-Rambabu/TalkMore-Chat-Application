import React, { useState } from "react";
import axios from "axios"; // Assuming you use axios for API requests
import toast from "react-hot-toast"; // For notifications

function Message({ message, onDelete }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const chatName = itsMe ? " chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-[rgb(255,160,157)]" : "";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleRightClick = (e) => {
    e.preventDefault(); // Prevent default context menu
    setIsHovered(true); // Show delete button on right click
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/message/delete/${message._id}`); // Ensure the endpoint is correct

      if (response.status === 200) {
        toast.success("Message deleted");
        onDelete(message._id); // Notify parent component
        setIsHovered(false); // Hide delete button after deletion
      } else {
        // If status is not 200, consider it an error
        throw new Error("Failed to delete message");
      }
    } catch (error) {
      // console.error("Error deleting message:", error);
    }
  };

  return (
    <div
      onContextMenu={handleRightClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <div className="p-4">
        <div className={`chat ${chatName}`}>
          <div className={`chat-bubble text-white ${chatColor}`}>
            {message.message}
            {itsMe && isHovered && (
              <button
                onClick={handleDelete}
                className="absolute top-[-30px] right-0 text-red-500 hover:text-red-700 cursor-pointer flex items-center space-x-2"
              >
                <span>Delete</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="chat-footer">{formattedTime}</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
