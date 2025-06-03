import React from 'react';
import FlipPage from '../../components/FlipPage';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Domestic = () => {
  return (
    <FlipPage>
      <div   className="bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: "url('/Untitled design_20250429_204502_0000.png')",
        }}>
        <Navbar />
        <div className="flex-grow pt-20 px-6">
          <h1 className=" text-gray-100 text-center text-4xl font-bold mb-10">DOMESTIC FASHION</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="bg-green-700 p-6 rounded-xl shadow-xl">Ethnic Wear Revival</div>
            <div className="bg-green-700 p-6 rounded-xl shadow-xl">Local Designers to Watch</div>
          </div>
        </div>
        
      </div><Footer />
    </FlipPage>
  );
};

export default Domestic;
