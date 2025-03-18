import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) { 
  // Convert book name into a URL-friendly format (slug)
  const bookSlug = item.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="my-6">
      <Link to={`/book/${bookSlug}`} className="no-underline">
        <div className="card bg-base-100 w-80 shadow-md dark:shadow-sky-500 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-103 dark:bg-slate-900 dark:text-white">
          <figure>
            <img className='w-full h-52 object-cover' src={item.image} alt="Book Cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-medium">
              {item.name}
              <div className="badge badge-secondary font-medium">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="px-2 py-1 bg-green-500 text-white rounded-md">${item.price}</div> 
              <div className="px-2 py-1 bg-blue-500 text-white rounded-md">Buy Now</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Cards;
