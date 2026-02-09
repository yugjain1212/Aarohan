import React from 'react';
import { motion } from 'framer-motion';
import { Box, Users, Mic } from 'lucide-react';

const events = [
    {
        icon: <Box size={40} />,
        title: "CrowdVenture",
        description: "A live fundraising platform where startups pitch for real-time investment and mentorship."
    },
    {
        icon: <Users size={40} />,
        title: "Startup Expo",
        description: "A showcase for emerging ventures to display their innovative products and services."
    },
    {
        icon: <Mic size={40} />,
        title: "Round Table",
        description: "High-impact dialogues involving educators and corporate leaders on entrepreneurial education."
    }
];

const Features = () => {
    return (
        <section id="events" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-primary tracking-tight">Key Highlights</h2>
                    <p className="text-secondary text-lg">
                        Experience the vibrant ecosystem of innovation through our signature events designed to accelerate growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group bg-white border border-gray-100 p-10 rounded-2xl shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="mb-6 text-accent bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                {React.cloneElement(event.icon, { size: 32 })}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">
                                {event.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {event.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
