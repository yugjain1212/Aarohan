import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PastEvents from './components/PastEvents';
import EventHighlights from './components/EventHighlights';
import ImpactSection from './components/ImpactSection';
import Speakers from './components/Speakers';
import EventAgenda from './components/EventAgenda';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-primary font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <PastEvents />
      <EventHighlights />
      <ImpactSection />
      <Speakers />
      <EventAgenda />
      <Footer />
    </div>
  );
}

export default App;
