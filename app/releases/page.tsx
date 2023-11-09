import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Releases = () => {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="bg-gray-900 py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-white">4K Releases</h1>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Releases;
