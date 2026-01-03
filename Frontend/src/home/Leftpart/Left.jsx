import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";
import { motion } from "framer-motion";

function Left() {
  // Animation variants
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },  // Starts off-screen to the left
    visible: { opacity: 1, x: 0 },    // Moves into view
  };

  return (
    <motion.div
      className="w-full bg-[rgb(251,239,229)] text-gray-900 flex flex-col"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeOut" }}
      variants={leftVariants}
    >
      <Search />
      <div
        className="flex-1 overflow-y-auto"
        style={{ minHeight: "calc(84vh - 10vh)" }}
      >
        <Users />
      </div>
      <Logout />
    </motion.div>
  );
}

export default Left;
