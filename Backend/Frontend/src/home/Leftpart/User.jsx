import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import profile from "../../../public/user.jpg";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      className={`hover:bg-[#f0f0f0] duration-300 ${
        isSelected ? "bg-[#e0e0e0]" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-4 py-3 items-center cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={profile} />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-left">{user.fullname}</h1>
          <span className="text-left">{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
