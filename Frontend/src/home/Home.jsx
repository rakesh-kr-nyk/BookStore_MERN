import React from 'react';
import Navbar from '/src/components/Navbar';
import Banner from '/src/components/Banner';
import Freebook from '/src/components/Freebook';
import Footer from '/src/components/Footer';

function Home() {
  return (
    <>
          <Navbar />
          <Banner />
          <Freebook />
          <Footer />
      </>
  );
}

export default Home;
