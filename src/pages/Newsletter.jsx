import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

// Section component displays the title and children components (i.e., the news content)
const Section = ({ title, children }) => (
  <div className="my-12 w-full max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-6" style={{ color: 'white' }}>{title}</h2>
    <div style={{ color: 'white' }}>
      {children}
    </div>
  </div>
);

// SectionContent component fetches and displays news items for a given section
const SectionContent = ({ sectionKey }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeItemId, setActiveItemId] = useState(null); // State to track the active item for details

  const AZURE_API_URL = 'http://localhost:8000/api/news'; // Adjust the URL to match your API endpoint

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `${AZURE_API_URL}/${sectionKey}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(`Failed to fetch news for section ${sectionKey}:`, error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
    
    // Set interval for automatic refresh every 5 minutes
    const interval = setInterval(fetchNews, 300000);  // 300000 milliseconds = 5 minutes

    // Clean up the interval when component unmounts
    return () => clearInterval(interval);
  }, [sectionKey]); // Ensure fetchNews updates if sectionKey changes

  const handleImageClick = (id) => {
    setActiveItemId(activeItemId === id ? null : id); // Toggle detail view for the clicked item
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching news: {error}</p>;
  if (items.length === 0) return <p className="text-center">No news available for this section.</p>;

  return (
    
    <div className="grid grid-cols-2 gap-4">
      {items.map(item => (
        <div key={item.id} className="flex flex-col items-center p-4">
          <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
          <img src={item.image_url} alt={item.title} className="w-full h-auto cursor-pointer"
            onClick={() => handleImageClick(item.id)}
            onError={(e) => { e.target.onerror = null; e.target.src = '/VERSACE.webp'; }} />
          <p>{item.content}</p>
          {activeItemId === item.id && (
            <div className="mt-2 text-sm text-left">
              {/* This area can display more detailed information */}
              <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Main Newsletter component
const Newsletter = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundImage: "url('/Untitled design_20250429_204502_0000.png')" }}>
      <Navbar />
      <div className="min-h-screen pt-20 px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-4" style={{ color: 'white' }}>NEWSLETTER</h1>
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-40 text-lg font-medium mb-6">
            <span className="hover:text-purple-400 cursor-pointer text-gray-100" onClick={() => navigate('/international')}>International</span>
            <span className="hover:text-purple-400 cursor-pointer text-gray-100" onClick={() => navigate('/domestic')}>Domestic</span>
          </div>
          <div className="flex justify-center">
              <img
                src="/public/photo-1595065666634-4725aa7e8379.jpeg"
                alt="Hero"
                className="w-full max-w-4xl rounded-lg shadow-lg"
              />
            </div>
          <Section title="Sustainable Fashion" >
            <SectionContent sectionKey="sustainable" />
          </Section>
          <Section title="Fast Fashion">
            <SectionContent sectionKey="fast" />
          </Section>
          <Section title="Luxury Fashion">
            <SectionContent sectionKey="luxury" />
          </Section>
          <Section title="Sneakers World">
            <SectionContent sectionKey="sneakers" />
          </Section>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Newsletter;