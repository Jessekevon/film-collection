import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Collection = () => {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="bg-gray-900 py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-white">My Collection</h1>
        </div>
      </div>
      <Footer />
    </main>
  )
};

export default Collection;
