import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion"; // Import Framer Motion

function Login() {
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    axios
      .post("/api/user/login", userInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Login successful");
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error);
        }
      });
  };

  // Variants for animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const buttonHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/setbg.jpg')` }}
    >
      <div className="bg-none p-8 rounded-lg shadow-lg w-[90%]  max-w-md">
        {/* Heading Animation */}
        <motion.h1
          className="text-3xl font-semibold text-center mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <span className=" text-[rgb(10,66,24)]">Talk</span>
          <span className="text-[rgb(43 202 196)]">More...</span>
        </motion.h1>

        <motion.h2
          className="text-xl font-bold text-[rgb(255,160,157)] text-center mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Login
        </motion.h2>

        {/* Form Animation */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* Email */}
          <motion.div className="flex flex-col" variants={fadeInUp}>
            <label className="text-sm font-semibold text-black mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-lg p-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
            )}
          </motion.div>

          {/* Password */}
          <motion.div className="flex flex-col" variants={fadeInUp}>
            <label className="text-sm font-semibold text-black mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border rounded-lg p-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>
            )}
          </motion.div>

          {/* Button and Link */}
          <motion.div
            className="flex flex-col space-y-3"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {/* Animated Button */}
            <motion.button
              type="submit"
              className="bg-[rgb(10,66,24)] text-white py-2 rounded-lg shadow-md hover:[rgb(43 202 196)] focus:outline-none focus:ring-2 focus:ring-green-500"
              whileHover="hover"
              variants={buttonHover}
            >
              Login
            </motion.button>

            <p className="text-center">
              New user?
              <Link to="/signup" className="text-blue-500 underline ml-1">
                Signup
              </Link>
            </p>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}

export default Login;
