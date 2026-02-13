import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Linkedin, Twitter } from 'lucide-react';

const mentors = [
    {
        name: "Mr. R. Gopalakrishnan",
        role: "Special Guest",
        company: "Former Director Tata Sons | Author & Speaker",
        image: "grad-1"
    },
    {
        name: "Mr. Abhishek Jain",
        role: "Practice Head",
        company: "Wipro",
        image: "grad-2"
    },
    {
        name: "Mr. Aditya Nath",
        role: "Founder",
        company: "Eco centric & Nineth Space",
        image: "grad-3"
    },
    {
        name: "Mr. Ankit Singhal",
        role: "Director",
        company: "SysB International",
        image: "grad-4"
    },
    {
        name: "Ankit VK Singhal",
        role: "Founder",
        company: "SysB International & Satwik Universe",
        image: "grad-5"
    },
    {
        name: "Ankur Lohani Kumar",
        role: "Founder",
        company: "Find Your Fit",
        image: "grad-6"
    },
    {
        name: "Apoorv Sharma",
        role: "Co-Founder",
        company: "Excluto",
        image: "grad-7"
    },
    {
        name: "Aquil Busrai",
        role: "CEO",
        company: "Aquil Busrai Consulting",
        image: "grad-8"
    },
    {
        name: "Mr. Arihant Jain",
        role: "Co-Founder",
        company: "SaturnIQ",
        image: "grad-9"
    },
    {
        name: "Dr. Avinash Panwar",
        role: "Technical Education",
        company: "Govt. of India",
        image: "grad-10"
    },
    {
        name: "Gaurav Sharma",
        role: "CEO",
        company: "ACIC-VGU Foundation",
        image: "grad-11"
    },
    {
        name: "Manu Sharma",
        role: "Founder",
        company: "Gladful",
        image: "grad-12"
    },
    {
        name: "Dr. Munish Jindal",
        role: "Founder & CEO",
        company: "HoverRobotix",
        image: "grad-13"
    },
    {
        name: "Mr. Omkar Singh Rathore",
        role: "Director",
        company: "DotSquare",
        image: "grad-14"
    },
    {
        name: "Prajakt Raut",
        role: "Co-founder",
        company: "Caret Capital",
        image: "grad-15"
    },
    {
        name: "Mr. Ramakant Jangid",
        role: "Director",
        company: "Ultraverse Technology",
        image: "grad-16"
    },
    {
        name: "Ms. Rishika Rao",
        role: "Founder",
        company: "Four Cross Media",
        image: "grad-17"
    }
];

const Speakers = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleMentors = showAll ? mentors : mentors.slice(0, 4);

    return (
        <section id="mentors" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl font-display font-medium mb-6 text-primary tracking-tight">
                        Meet our Chief Guests
                    </h2>
                    <p className="text-xl text-secondary max-w-2xl leading-relaxed">
                        To be the best, you need to learn from the best. Our mentors are industry leaders dedicated to helping your startup succeed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    <AnimatePresence>
                        {visibleMentors.map((mentor, index) => (
                            <motion.div
                                key={mentor.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[4/5] bg-gray-100 mb-6 overflow-hidden relative">
                                    {/* Grayscale to Color Effect on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 transition-all duration-500 group-hover:scale-105`}></div>

                                    {/* Placeholder specific avatars based on index to differentiate */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-display text-8xl opacity-20 group-hover:opacity-10 transition-opacity">
                                        {mentor.name.charAt(0)}
                                    </div>

                                    {/* Social Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-4">
                                        <div className="bg-white p-2 rounded-full shadow-lg hover:text-accent transition-colors">
                                            <Linkedin size={20} />
                                        </div>
                                        <div className="bg-white p-2 rounded-full shadow-lg hover:text-accent transition-colors">
                                            <Twitter size={20} />
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-primary mb-1">{mentor.name}</h3>
                                <p className="text-accent font-semibold text-sm mb-1">{mentor.role}</p>
                                <p className="text-gray-400 text-sm">{mentor.company}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all hover:shadow-lg active:scale-95"
                    >
                        {showAll ? 'Show Less' : 'View All Mentors'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Speakers;
