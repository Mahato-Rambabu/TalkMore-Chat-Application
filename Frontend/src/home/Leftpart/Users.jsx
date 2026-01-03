import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";
import { motion } from "framer-motion"; // Import motion

function Users() {
  const [allUsers, loading] = useGetAllUsers();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }} // Slight delay for stagger effect
    >
      <h1 className="px-15 py-2 text-gray-800 font-semibold bg-[rgb(43,202,196)] rounded-md text-center">
        Messages
      </h1>
      <div
        className="py-2 flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(84vh - 10vh)" }}
      >
        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </motion.div>
  );
}

export default Users;
