import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
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
    <div className="container mx-auto max-w-screen-2xl pt-10 px-4 md:px-10 lg:px-20">
      <div className="text-center space-y-5">
        <h1 className="text-3xl md:text-4xl font-bold">
          All Books Here <span className="text-[#62beff]">Free or Paid!</span>
        </h1>
        <p className="text-gray-600">Browse a collection of books available for free or purchase.</p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-3 overflow-hidden mb-5">
        {books.length > 0 ? (
          books.map((item) => (
            <div key={item._id} className="w-full px-2">
              <Cards item={item} />
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No books available</p>
        )}
      </div>
    </div>
  );
}

export default Books;
