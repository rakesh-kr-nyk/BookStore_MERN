import React from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto max-w-screen-2xl px-4 md:px-20 flex flex-col-reverse md:flex-row items-center md:items-start mt-10">
      
      {/* Left Section - Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 md:space-y-10">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Hello & Welcome! Join us to learn something{" "}
          <span className="text-[#62beff]">new every day.</span>
        </h1>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Discover a world of books at your fingertips! Whether you’re a fan of fiction, 
          a seeker of knowledge, or looking for the perfect study companion, we have something for everyone.
        </p>
        <div className="flex justify-center md:justify-start">
          <button
            onClick={() => navigate("/books")}
            className="bg-[#62beff] hover:bg-[#4aaae4] text-white font-medium text-lg md:text-xl px-6 py-3 rounded-full transition-all duration-300"
          >
            Discover All Books
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 flex justify-center mb-5 md:mb-0">
        <img
          className="w-100"
          src="/logo.png"
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Banner;
