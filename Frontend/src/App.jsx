import React from 'react';
import Home from './Home/Home';
import Books from './components/Books';
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx';
import BookDetail from "./Books/BookDetail.jsx";

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
          <Route path="/Books" element={authUser ? <Books /> : <Navigate to="/Signup" />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/book/:name" element={<BookDetail />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
