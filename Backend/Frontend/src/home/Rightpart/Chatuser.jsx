import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";
import profile from "../../../public/user.jpg"; 

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className="relative flex items-center h-[10vh] justify-start gap-4 bg-[rgb(43,202,196)]  border-b border-gray-200 px-4">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden relative left-2"
      >
        <CiMenuFries className="text-black-100 text-xl" />
      </label>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full">
            <img src={profile} alt="User Avatar" />
          </div>
        </div>
        <div>
          <h1 className="text-lg text-gray-800 font-semibold">
            {selectedConversation?.fullname}
          </h1>
          <span className="text-sm text-gray-500">
            {getOnlineUsersStatus(selectedConversation?._id)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chatuser;
