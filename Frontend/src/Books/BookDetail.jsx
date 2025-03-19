import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BookDetail() {
  const { name } = useParams(); // Get book name from URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/book/name/${name}`);
        setBook(res.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
      setLoading(false);
    };

    fetchBook();
  }, [name]);

  const handleProtectedAction = (url) => {
    const user = localStorage.getItem("Users");
    if (!user) {
      document.getElementById("my_modal_3").showModal(); 
    } else {
      window.open(url, "_blank"); // Open link if authenticated
    }
  };

  if (loading) return <p className="text-center">Loading book details...</p>;
  if (!book) return <p className="text-center text-red-500">Book not found</p>;

  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-6 pt-5 pb-10">
        <div className="flex flex-col md:flex-row items-center md:items-start bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <img className="w-64 h-auto rounded-lg shadow-lg" src={book.image} alt={book.name} />
          <div className="ml-6">
            <h1 className="md:text-3xl text-2xl pt-3 font-medium">{book.name}</h1>
            <p className="text-gray-600 mt-2">{book.title}</p>
            <p className="text-lg font-medium mt-2 ">Category: <span className="bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-md">{book.category}</span></p>
            <p className="text-xl font-medium mt-2">Price: ${book.price}</p>
            
            <div className="mt-4 flex space-x-4">
              {book.price === 0 ? (
                <button
                  onClick={() => handleProtectedAction(book.pdf)}
                  className="!px-4 !py-2 !bg-green-500 !text-white !rounded-md"
                >
                  Download PDF
                </button>
              ) : (
                <button
                  onClick={() => handleProtectedAction(book.buyLink)}
                  className="!px-4 !py-2 !bg-blue-500 !text-white !rounded-md"
                >
                  Buy Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookDetail;
