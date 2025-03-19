import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const modalRef = useRef(null);
  const [closing, setClosing] = useState(false);

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    
    await axios.post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Login Successfully!');
          window.location.reload();
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        closeModal();
      }).catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  const closeModal = () => {
    setClosing(true); // Start fade-out animation
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.close();
        setClosing(false); // Reset for next use
      }
    }, 300); // Matches the CSS transition time
  };

  return (
    <>
      <div>
        <dialog ref={modalRef} id="my_modal_3" className={`modal bg-white/30 backdrop-blur-xs transition-opacity duration-300 ${closing ? 'opacity-0' : 'opacity-100'}`}>
          <div className="modal-box dark:bg-slate-900 transition-transform duration-300 transform scale-100">
            {/* Close Button */}
            <button 
              onClick={closeModal} 
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <div className="flex items-center justify-center dark:bg-slate-900">
              <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-slate-900">
                <h2 className="text-2xl font-bold text-center dark:bg-slate-900 dark:text-white">
                  Login to Your Account
                </h2>

                {/* Form Starts Here */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                      {...register("password", { required: "Password is required" })}
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Login
                  </button>
                </form>

                {/* Additional Links */}
                <div className="text-center">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  Don't have an account?{" "}
                  <a href="/Signup" className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => localStorage.setItem("previousPage", window.location.pathname)}>
                    Sign up
                  
                  </a>
                </p>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
