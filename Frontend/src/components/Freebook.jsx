import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Freebook() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getFreeBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const freeBooks = res.data.filter(book => book.category.toLowerCase() === "free");
        setBooks(freeBooks || []);
      } catch (err) {
        setError("Failed to fetch free books. Please try again later.");
        console.error("Error fetching free books:", err);
      } finally {
        setLoading(false);
      }
    };

    getFreeBooks();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-20 py-10">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          <span className="text-[#62beff]">Free</span> Books Here!
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Enjoy our collection of free books across different genres. Download and start reading now! 📚✨
        </p>
      </div>

      {loading ? (
        <p className="text-center text-gray-500 mt-10">Loading free books...</p>
      ) : error ? (
        <p className="text-center text-red-500 mt-10">{error}</p>
      ) : books.length > 0 ? (
        <div className="relative">
          <Slider {...sliderSettings} className="px-1 md:px-4">
            {books.map((item) => (
              <div key={item._id} className="px-4">
                <Cards item={item} />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No free books available at the moment.</p>
      )}
    </div>
  );
}

export default Freebook;
