import React from 'react';
import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-16 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-3xl font-bold tracking-tighter mb-3">Aarohan <span className="text-accent">3.0</span></h2>
                        <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">Empowering the next generation of innovators through incubation, mentorship, and resources.</p>
                    </div>

                    <div className="flex space-x-8">
                        {/* Social icons now clearer */}
                        <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Twitter size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Linkedin size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Instagram size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Mail size={24} /></a>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2026 Aarohan 3.0, JKLU. All rights reserved. </p>
                    <p> Made with <span className="text-accent">❤️</span> by <a href="https://portfolio-yug-one-212.vercel.app" target="_blank" rel="noopener noreferrer">Yug Jain</a></p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
