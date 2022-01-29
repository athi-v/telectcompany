import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Cta from './components/Cta';
import Footer from './components/footer'

function App() {
  return (
    <>
   <Navbar />
   <Hero />
   <Features />
   <Services />
   <Reviews />
   <Results />
   <Testimonials />
   <Pricing />
   <Cta />
   <Footer />
    </>
  );
}

export default App;
