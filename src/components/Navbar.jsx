import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="Aarohan Logo"
                        className="h-20 md:h-24 w-auto object-contain drop-shadow-sm"
                    />
                    <div className="text-2xl font-bold tracking-tighter text-primary">
                        Aarohan <span className="text-accent">3.0</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {['Programs', 'Startups', 'Mentors', 'Events'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-secondary hover:text-accent transition-colors">
                            {item}
                        </a>
                    ))}
                    <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-accent hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                        Apply Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl"
                >
                    <div className="flex flex-col p-6 space-y-4">
                        {['Programs', 'Startups', 'Mentors', 'Events'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-lg font-medium text-gray-800 hover:text-accent"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button className="bg-accent text-white w-full py-3 rounded-lg font-bold shadow-md">
                            Apply Now
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
