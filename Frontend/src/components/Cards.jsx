import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) { 
  // Convert book name into a URL-friendly format (slug)
  const bookSlug = item.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full max-w-xs mx-auto my-6 sm:max-w-sm md:max-w-md lg:max-w-lg">
      <Link to={`/book/${bookSlug}`} className="no-underline">
        <div className="bg-white dark:bg-slate-900 shadow-md dark:shadow-sky-500 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
          <figure className="w-full">
            <img 
              className="w-full h-52 object-cover"
              src={item.image} 
              alt="Book Cover" 
            />
          </figure>
          <div className="p-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white flex justify-between items-center">
              {item.name}
              <span className="bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-md">
                {item.category}
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{item.title}</p>
            <div className="flex justify-between items-center mt-4">
              {item.price === 0 ? (
                <div className="px-3 py-1 bg-green-500 text-white text-sm rounded-md cursor-pointer hover:bg-green-600">
                  View PDF
                </div>
              ) : (
                <div className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md cursor-pointer hover:bg-blue-600">
                  Buy Now
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Cards;
