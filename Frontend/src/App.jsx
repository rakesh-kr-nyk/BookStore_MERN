import React from 'react';
import Home from './home/Home.jsx';
import Books from './components/Books.jsx';
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx';
import BookDetail from "./books/BookDetail.jsx";

function App() {
  const authContext = useAuth();
  if (!authContext) {
    console.error("AuthContext is missing. Ensure AuthProvider is wrapping App.");
    return null;
  }
  const [authUser, setAuthUser] = authContext;
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={authUser ? <Books /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/book/:name" element={<BookDetail />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
