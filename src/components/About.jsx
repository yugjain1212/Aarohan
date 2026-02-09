import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="programs" className="py-24 bg-white text-primary">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-primary">
                            About <span className="text-accent">Aarohan 3.0</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-accent mb-8 rounded-full"></div>
                        <p className="text-secondary text-lg leading-relaxed mb-6">
                            Aarohan 3.0 at JK Lakshmipat University is the premier startup and entrepreneurship summit.
                        </p>
                        <p className="text-secondary text-lg leading-relaxed">
                            <strong className="text-primary font-bold">Aarohan</strong> is our flagship annual Startup and Entrepreneurship Summit. It serves as a definitive platform for aspiring entrepreneurs, industry leaders, and investors to collaborate on innovation and sustainable business growth.
                        </p>

                        <div className="flex gap-12 mt-12 border-t border-gray-100 pt-8">
                            <div>
                                <h3 className="text-4xl font-bold text-accent">70+</h3>
                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mt-2">Startups</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-accent">1500+</h3>
                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mt-2">Attendees</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-accent">2019</h3>
                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mt-2">Established</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Decorative background blob */}
                        <div className="absolute inset-0 bg-blue-100/50 blur-3xl rounded-full opacity-60 transform translate-x-10 translate-y-10"></div>

                        <div className="relative bg-white border border-gray-100 shadow-card p-10 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6 text-primary">Aarohan 3.0 Vision</h3>
                            <ul className="space-y-5">
                                {["Bigger Ideas, Bolder Energy", "Empowering Youth Entrepreneurship", "Sustainable Business Growth", "Real-time Investment Pitching"].map((item, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <span className="flex-shrink-0 w-3 h-3 bg-accent rounded-full shadow-sm"></span>
                                        <span className="text-gray-700 font-medium text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
