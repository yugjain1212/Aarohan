import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import PhotoGallery from './PhotoGallery';

const Hero = () => {
    const backgroundImages = [
        '/events/event_03.jpeg',
        '/events/event_04.jpeg',
        '/events/event_05.jpeg',
        '/events/event_06.jpeg',
        '/events/event_031.jpeg',
        '/events/event_041.jpeg',
        '/events/event_051.jpeg',
        '/events/event_061.jpeg',
        '/events/event_062.jpeg',
        '/events/event_063.jpeg',
        '/events/event_064.jpeg',
        '/events/event_065.jpeg',
        '/events/event_066.jpeg',
        '/events/event_067.jpeg',
        '/events/event_068.jpeg',
        '/events/event_069.jpeg',
        '/events/event_032.jpeg',
        '/events/event_033.jpeg',
        '/events/event_034.jpeg',
        '/events/event_035.jpeg',
        '/events/event_042.jpeg',
        '/events/event_043.jpeg',
        '/events/event_044.jpeg',
        '/events/event_045.jpeg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showGallery, setShowGallery] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4">
            {/* Background Slideshow */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80 z-[1]"></div>

            {/* Decorative Pattern */}
            <div className="absolute inset-0 bg-hero-pattern opacity-10 z-[2]"></div>

            <div className="z-10 text-center max-w-5xl mx-auto pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm shadow-sm">
                        <span className="text-accent font-semibold tracking-wide text-sm">AIC-JKLU PRESENTS</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 text-white leading-tight drop-shadow-lg">
                        AAROHAN <span className="text-accent">3.0</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mt-6 max-w-2xl mx-auto font-medium leading-relaxed">
                        Bigger Ideas. Bolder Energy.
                    </p>
                    <p className="text-md md:text-lg text-white/70 mt-4 font-medium">
                        March 6th, 2026 • JK Lakshmipat University, Jaipur
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 justify-center mt-12"
                >
                    <button className="bg-accent text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        Register for Aarohan <ArrowRight size={20} />
                    </button>
                    <button
                        onClick={() => setShowGallery(true)}
                        className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all shadow-sm"
                    >
                        <Play size={20} className="text-accent" fill="currentColor" /> Watch 2025 Highlights
                    </button>
                </motion.div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-20 z-10 flex gap-2">
                {backgroundImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-accent w-6' : 'bg-white/50 hover:bg-white/70'
                            }`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 animate-bounce z-10">
                <span className="text-white/70 text-sm font-medium">Scroll to explore</span>
            </div>

            {/* Photo Gallery Modal */}
            <PhotoGallery
                isOpen={showGallery}
                onClose={() => setShowGallery(false)}
                images={backgroundImages}
            />
        </section>
    );
};

export default Hero;
