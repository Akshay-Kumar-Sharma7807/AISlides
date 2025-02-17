import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import AboutUs from './components/AboutUs';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <Navbar />
        
        <main className="container mx-auto px-6">
          <Routes>
            <Route path="/" element={
              <>
                <div className="pt-20 pb-16">
                  <Hero />
                </div>
                
                <Features />
                
                <Testimonials />
                
                <Pricing />
                
                <div className="py-20 text-center">
                  <p className="text-gray-400 mb-8">Trusted by leading companies worldwide</p>
                  <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png" className="h-8" alt="IBM" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png" className="h-8" alt="Google" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/200px-Uber_logo_2018.svg.png" className="h-8" alt="Uber" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/200px-Tata_Consultancy_Services_Logo.svg.png" className="h-8" alt="TCS" />
                  </div>
                </div>
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
