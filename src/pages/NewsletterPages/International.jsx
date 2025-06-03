import React from 'react';
import FlipPage from '../../components/FlipPage';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const International = () => {
  return (
    <FlipPage>
      <div   className="bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: "url('/Untitled design_20250429_204502_0000.png')",
        }}>
        <Navbar />
        <div className="flex-grow pt-20 px-6">
          <h1 className="text-gray-100  text-center text-4xl font-bold mb-10">INTERNATIONAL FASHION</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="bg-blue-700 p-6 rounded-xl shadow-xl">Paris Fashion Week Highlights</div>
            <div className="bg-blue-700 p-6 rounded-xl shadow-xl">London Street Style Trends</div>
          </div>
        </div>
        
      </div><Footer />
    </FlipPage>
  );
};

export default International;
