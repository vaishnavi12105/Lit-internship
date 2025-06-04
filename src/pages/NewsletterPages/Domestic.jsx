import React from 'react';
import FlipPage from '../../components/FlipPage';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Domestic = () => {
  return (
    <FlipPage>
      <div
        className="bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: "url('/Untitled design_20250429_204502_0000.png')",
        }}
      >
        <Navbar />
        <div className="flex flex-col items-center pt-20 px-6">
          <h1 className="text-gray-100 text-center text-4xl font-bold mb-6">
            DOMESTIC FASHION
          </h1>

          
          <img
          src="public\Screenshot 2025-05-16 114728.png"
          alt="Fashion Model"
          className="w-[50%] max-w-20xl aspect-video object-cover rounded-lg shadow-2xl"
          />

        </div>
      </div>

      <Footer />
    </FlipPage>
  );
};

export default Domestic;

