import React from 'react'
import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer';
import Book from '/src/books/Book.jsx';
function Books() {
  return (
      <>
          <Navbar />
          <Book/>
          <Footer/>
      </>
  )
}

export default Books