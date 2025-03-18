import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-5">
        <div className="w-full max-w-2xl p-8 mb-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800 mb-5">
          <h2 className="text-3xl text-center text-gray-900 dark:text-white">About Us</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Welcome to our bookstore! This project is developed as my final year BCA project by <strong>Rakesh Nayak</strong>. 
            The goal of this platform is to provide a seamless experience for book lovers to browse and purchase their favorite books online.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            This bookstore offers a vast collection of books across various genres, making it easy for readers to find what they love. 
            Our platform is designed to be user-friendly, fast, and efficient, ensuring a smooth experience for customers.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I built this project using the latest web technologies and a robust backend to manage books, orders, and user data efficiently. 
            Your support and feedback are always welcome!
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Thank you for visiting!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
