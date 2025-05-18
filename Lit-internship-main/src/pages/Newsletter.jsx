import React from 'react';
import Navbar from '../components/Navbar';
import ImageCard from '../components/ImageCard';
import Footer from '../components/Footer';

const Section = ({ title, children }) => (
  <div className="my-12 w-full max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
    {children}
  </div>
);

const Newsletter = () => {
  return (
    <div className="bg-black text-white">
      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/public/Untitled design_20250429_204502_0000.png')" }}
      >
        <Navbar />
        <div className="bg-black bg-opacity-30 min-h-screen pt-20 px-4">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-4">NEWSLETTER</h1>

            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-40 text-lg font-medium mb-6">
              <span className="hover:text-purple-400 cursor-pointer">International</span>
              <span className="hover:text-purple-400 cursor-pointer">Domestic</span>
            </div>

            <div className="flex justify-center">
              <img
                src="/public/photo-1595065666634-4725aa7e8379.jpeg"
                alt="Hero"
                className="w-full max-w-4xl rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Sustainable Fashion */}
          <section>
            <h2 className="text-3xl md:text-3xl font-bold leading-tight mb-10">
              SUSTAINABLE<br />FASHION
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ImageCard img="/public/50LuxuryDesignerBrandsMain.jpg" alt="Sustainable Fashion 1" text="May 13: Swap your gold chain for this Necklace Trend" />
              <ImageCard img="/public/TSV_0159-800x600.jpg" alt="Sustainable Fashion 2" text="May 13: Swap your gold chain for this Necklace Trend" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <ImageCard img="/public/CHANEL.webp" alt="Small Image 1" text="May 13: Swap your gold chain for this Necklace Trend" />
              <ImageCard img="/public/Evolution-of-Luxury-Fashion-6b-Diversity-and-inclusivity.webp" alt="Small Image 2" text="May 13: Swap your gold chain for this Necklace Trend" />
              <ImageCard img="/public/CHANEL.webp" alt="Small Image 3" text="May 13: Swap your gold chain for this Necklace Trend" />
              <ImageCard img="/public/Evolution-of-Luxury-Fashion-6b-Diversity-and-inclusivity.webp" alt="Small Image 4" text="May 13: Swap your gold chain for this Necklace Trend" />
            </div>

            <div className="flex justify-center pt-5">
              <img
                src="/public/images.jpeg"
                alt="Hero"
                className="w-full max-w-2xl rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Luxury Fashion */}
          <section className="mt-24">
            <h2 className="text-4xl md:text-3xl font-bold leading-tight mb-10">
              LUXURY<br />FASHION
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <ImageCard img="/public/CHANEL.webp" alt="Luxury Fashion 1" text="May 13: Swap your gold chain for this Necklace Trend" />
              <ImageCard img="/public/Evolution-of-Luxury-Fashion-6b-Diversity-and-inclusivity.webp" alt="Luxury Fashion 2" text="May 13: Swap your gold chain for this Necklace Trend" />
              <ImageCard img="/public/TSV_0159-800x600.jpg" alt="Luxury Fashion 3" text="May 13: Swap your gold chain for this Necklace Trend" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <ImageCard img="/public/VERSACE.webp" alt="Luxury Fashion Large" text="May 13: Swap your gold chain for this Necklace Trend" />
              </div>
              <div>
                <ImageCard img="/public/photo-1595065666634-4725aa7e8379.jpeg" alt="Luxury Fashion Small" text="May 13: Swap your gold chain for this Necklace Trend" />
              </div>
            </div>
          </section>

          {/* Fast Fashion */}
          <section className="mt-24">
            <h2 className="text-4xl md:text-3xl font-bold leading-tight mb-10">
              FAST<br />FASHION
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <ImageCard
                  key={index}
                  img={`/public/${index % 2 === 0 ? 'photo-1595065666634-4725aa7e8379.jpeg' : 'VERSACE.webp'}`}
                  alt={`Fast Fashion ${index + 1}`}
                  text="May 13: Swap your gold chain for this Necklace Trend"
                />
              ))}
            </div>
          </section>

          {/* Sneakers World */}
          <section className="mt-24">
            <h2 className="text-4xl md:text-3xl font-bold leading-tight mb-20">
              SNEAKERS<br />WORLD
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <ImageCard img="/public/expensive-sneakers.webp" alt="Sneakers 1" text="May 13: Swap your gold chain for this Necklace Trend" />
              <ImageCard img="public/most-expensive-shoes.webp" alt="Sneakers 2" text="May 13: Swap your gold chain for this Necklace Trend" />
              <ImageCard img="/public/expensive-sneakers.webp" alt="Sneakers 3" text="May 13: Swap your gold chain for this Necklace Trend" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <ImageCard img="/public/649840.jpg" alt="Sneakers Large" text="May 13: Swap your gold chain for this Necklace Trend" />
              </div>
              <div>
                <ImageCard img="/public/most-expensive-shoes.webp" alt="Sneakers Small" text="May 13: Swap your gold chain for this Necklace Trend" />
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Newsletter;
