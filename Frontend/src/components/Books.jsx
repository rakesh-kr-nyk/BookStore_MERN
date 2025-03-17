import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Book from '../books/Book';
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