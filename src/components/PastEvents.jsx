import React from 'react';
import { motion } from 'framer-motion';
import Masonry from './Masonry';

const PastEvents = () => {
    const items = [
        { id: "1", img: "/events/event_03.jpeg", url: "#", height: 400 },
        { id: "2", img: "/events/event_031.jpeg", url: "#", height: 350 },
        { id: "3", img: "/events/event_032.jpeg", url: "#", height: 450 },
        { id: "4", img: "/events/event_033.jpeg", url: "#", height: 300 },
        { id: "5", img: "/events/event_034.jpeg", url: "#", height: 400 },
        { id: "6", img: "/events/event_035.jpeg", url: "#", height: 350 },
        { id: "7", img: "/events/event_036.jpeg", url: "#", height: 420 },
        { id: "8", img: "/events/event_037.jpeg", url: "#", height: 320 },
        { id: "9", img: "/events/event_038.jpeg", url: "#", height: 380 },
        { id: "10", img: "/events/event_039.jpeg", url: "#", height: 450 },
        { id: "11", img: "/events/event_04.jpeg", url: "#", height: 380 },
        { id: "12", img: "/events/event_041.jpeg", url: "#", height: 420 },
        { id: "13", img: "/events/event_042.jpeg", url: "#", height: 400 },
        { id: "14", img: "/events/event_043.jpeg", url: "#", height: 400 },
        { id: "15", img: "/events/event_044.jpeg", url: "#", height: 460 },
        { id: "16", img: "/events/event_045.jpeg", url: "#", height: 350 },
        { id: "17", img: "/events/event_046.jpeg", url: "#", height: 340 },
        { id: "18", img: "/events/event_047.jpeg", url: "#", height: 320 },
        { id: "19", img: "/events/event_048.jpeg", url: "#", height: 380 },
        { id: "20", img: "/events/event_049.jpeg", url: "#", height: 440 },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                        Our Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Past <span className="text-accent">Events</span>
                    </h2>
                    <p className="text-secondary max-w-2xl mx-auto text-lg">
                        Relive the memorable moments from our previous editions of Aarohan
                    </p>
                </motion.div>

                {/* Masonry Gallery */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-[800px] md:h-[900px]"
                >
                    <Masonry
                        items={items}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover
                        hoverScale={0.95}
                        blurToFocus
                        colorShiftOnHover={false}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default PastEvents;
