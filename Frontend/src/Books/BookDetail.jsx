import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BookDetail() {
  const { name } = useParams(); // Get book name from URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p className="text-center">Loading book details...</p>;
  if (!book) return <p className="text-center text-red-500">Book not found</p>;

  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg  mx-auto px-6 md:py-40 py-20">
      <div className="flex flex-col md:flex-row items-center md:items-start bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <img className="w-64 h-auto rounded-lg shadow-lg" src={book.image} alt={book.name} />
        <div className="ml-6">
          <h1 className="text-3xl pt-3 font-medium">{book.name}</h1>
          <p className="text-gray-600 mt-2">{book.title}</p>
          <p className="text-lg font-medium mt-2">Category: <span className="badge badge-secondary font-medium">{book.category}</span></p>
          <p className="text-xl font-medium mt-2">Price: ${book.price}</p>
          
          <div className="mt-4 flex space-x-4">
            <a href={book.pdf} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-500 text-white rounded-md">
              View PDF
            </a>
            <a href={book.buyLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
    
  );
}

export default BookDetail;
