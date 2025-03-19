import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from "axios";
import toast from 'react-hot-toast';
function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
  
    await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Signup Successfully!');
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
  
        // Retrieve stored page URL or default to homepage
        const previousPage = localStorage.getItem("previousPage") || "/";
        localStorage.removeItem("previousPage"); // Clear stored URL
  
        navigate(previousPage); // Redirect user back to previous page
        window.location.reload();
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900">
        <div className="relative w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          {/* Close Button */}
          <button 
            onClick={() => navigate('/')} 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Create an Account
          </h2>

          {/* Form Start */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Full Name</label>
              <input
                {...register("fullname", { required: "Full Name is required" })}
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.fullname && <span className="text-red-500">{errors.name.message}</span>}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Password</label>
              <input
                {...register("password", { 
                  required: "Password is required", 
                  minLength: { value: 6, message: "Password must be at least 6 characters" } 
                })}
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </form>

          {/* Additional Links */}
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Already have an account? {" "}
            <Link onClick={() => document.getElementById('my_modal_3').showModal()} className="text-blue-600 dark:text-blue-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
