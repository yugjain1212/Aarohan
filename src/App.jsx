import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PastEvents from './components/PastEvents';
import Startups from './components/Startups';
import Features from './components/Features';
import Speakers from './components/Speakers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-primary font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <PastEvents />
      <Startups />
      <Speakers />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
