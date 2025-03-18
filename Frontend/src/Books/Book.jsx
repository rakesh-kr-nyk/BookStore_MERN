import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book"); // Use correct backend port
        setBooks(res.data || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getBooks();
  }, []);

  return (
    <div class="container mx-auto max-w-screen-2xl pt-10 px-4 md:px-20">
      <div className="text-center space-y-5">
        <h1 className="md:text-4xl text-3xl">All Books Here <span className="text-[#62beff]">Free or Paid!</span></h1>
        <p>Browse a collection of books available for free or purchase.</p>
        <Link to="/">
          <button className="button self-start">Back</button>
        </Link>
      </div>

      <div className="mt-2 grid grid-cols-1 md:grid-cols-4 md:gap-4">
        {books.length > 0 ? (
          books.map((item) => <Cards key={item._id} item={item} />)
        ) : (
          <p className="text-center col-span-4 text-gray-500">No books available</p>
        )}
      </div>
    </div>
  );
}

export default Books;
