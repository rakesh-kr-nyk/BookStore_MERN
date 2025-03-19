import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Freebook from '../components/Freebook';
import Footer from '../components/Footer';
import PaidBook from '../components/Paidbook';

function Home() {
  return (
    <>
          <Navbar />
          <Banner />
      <Freebook />
      <PaidBook />
          <Footer />
      </>
  );
}

export default Home;
