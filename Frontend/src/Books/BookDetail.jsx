import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BookDetail() {
  const { name } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isPurchased, setIsPurchased] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/book/name/${name}`);
        setBook(res.data);

        const user = JSON.parse(localStorage.getItem("Users"));
        if (user) {
          const purchaseId = `purchasedBooks_${user.id}`;
          const purchasedBooks = JSON.parse(localStorage.getItem(purchaseId)) || [];
          if (purchasedBooks.includes(res.data.name)) {
            setIsPurchased(true);
            setPdfUrl(res.data.pdf);
          }
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
        toast.error("Failed to load book details.");
      }
      setLoading(false);
    };

    fetchBook();
  }, [name]);

  const handleDownload = () => {
    const user = JSON.parse(localStorage.getItem("Users"));
    if (!user) {
      document.getElementById("my_modal_3").showModal();
      return;
    }
    window.open(book.pdf, "_blank");
  };

  const handlePayment = async () => {
    const user = JSON.parse(localStorage.getItem("Users"));
    if (!user) {
      document.getElementById("my_modal_3").showModal();
      return;
    }

    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => startPayment(user.id);
      document.body.appendChild(script);
    } else {
      startPayment(user.id);
    }
  };

  const startPayment = async (userId) => {
    try {
      const res = await axios.post("http://localhost:4001/api/create-order", {
        amount: book.price,
      });

      const { id, amount, currency } = res.data;

      const options = {
        key: "rzp_test_FK1xshLTZZ1z8d",
        amount,
        currency,
        order_id: id,
        name: "Book Store",
        description: book.name,
        handler: async function () {
          toast.success("Payment Successful!");
          const purchaseId = `purchasedBooks_${userId}`;
          const purchasedBooks = JSON.parse(localStorage.getItem(purchaseId)) || [];
          purchasedBooks.push(book.name);
          localStorage.setItem(purchaseId, JSON.stringify(purchasedBooks));
          setPdfUrl(book.pdf);
          setIsPurchased(true);
        },
        theme: { color: "#3399cc" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed. Please try again.");
    }
  };

  useEffect(() => {
    return () => {
      const user = JSON.parse(localStorage.getItem("Users"));
      if (!user) {
        localStorage.removeItem("purchasedBooks");
      }
    };
  }, []);

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
            <p className="text-lg font-medium mt-2">
              Category:
              <span className="bg-gray-200 ml-1 text-gray-700 dark:bg-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-md">
                {book.category}
              </span>
            </p>
            <p className="text-xl font-medium mt-2">
              Price: {book.price === 0 ? "Free" : `₹${book.price}`}
            </p>
            <div className="mt-4 flex space-x-4">
              {book.price === 0 || isPurchased ? (
                <button onClick={handleDownload} className="!px-4 !py-2 !bg-green-500 !text-white !rounded-md">
                  {isPurchased ? "Download PDF (Purchased)" : "Download PDF"}
                </button>
              ) : (
                <button onClick={handlePayment} className="!px-4 !py-2 !bg-blue-500 !text-white !rounded-md">
                  Buy Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login Required</h3>
          <p className="py-4">You need to log in to continue.</p>
          <div className="modal-action">
            <button className="btn" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="btn" onClick={() => document.getElementById("my_modal_3").close()}>
              Cancel
            </button>
          </div>
        </div>
      </dialog>
      <Footer />
    </>
  );
}

export default BookDetail;
