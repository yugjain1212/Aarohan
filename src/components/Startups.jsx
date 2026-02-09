import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Leaf, Droplets, Cpu, Zap, Activity } from 'lucide-react';
import TiltedCard from './TiltedCard';

const startups = [
    {
        name: "AgriVijay",
        category: "Agritech & Cleantech",
        description: "A marketplace for renewable energy products empowering farmers and rural households.",
        icon: <Leaf className="text-green-500" />,
        color: "bg-green-50"
    },
    {
        name: "Pyotam",
        category: "Water Utility",
        description: "IoT-based water engineering solutions for industries to minimize wastage and maximize ROI.",
        icon: <Droplets className="text-blue-500" />,
        color: "bg-blue-50"
    },
    {
        name: "SNAS IoT Labs",
        category: "Smart Energy",
        description: "IoT solutions for reducing electricity consumption in large commercial premises.",
        icon: <Cpu className="text-purple-500" />,
        color: "bg-purple-50"
    },
    {
        name: "Manny Renewables",
        category: "Clean Energy",
        description: "End-to-end renewable energy solutions for decentralized power generation.",
        icon: <Zap className="text-yellow-500" />,
        color: "bg-yellow-50"
    },
    {
        name: "AICY Technologies",
        category: "AI & Agritech",
        description: "AI and Data Science solutions transforming the agriculture domain.",
        icon: <Activity className="text-red-500" />,
        color: "bg-red-50"
    }
];

const Startups = () => {
    return (
        <section id="startups" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-primary tracking-tight">
                            Our Portfolio
                        </h2>
                        <p className="text-secondary text-lg max-w-2xl mx-auto">
                            We have supported over <span className="font-bold text-primary">70+ startups</span> across various sectors. Here are some of our success stories.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {startups.map((startup, index) => (
                        <div key={index} className="h-[320px] w-full">
                            <TiltedCard
                                imageSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxeCIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIj48cmVjdCBmaWxsPSIjZmZmZmZmIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PC9zdmc+"
                                altText={startup.name}
                                captionText={startup.name}
                                containerHeight="100%"
                                containerWidth="100%"
                                imageHeight="100%"
                                imageWidth="100%"
                                rotateAmplitude={10}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip={false}
                                displayOverlayContent={true}
                                overlayContent={
                                    <div className="h-full w-full p-8 flex flex-col border border-gray-100 rounded-[15px] bg-white text-left">
                                        <div className={`w-14 h-14 rounded-xl ${startup.color} flex items-center justify-center mb-6`}>
                                            {React.cloneElement(startup.icon, { size: 28 })}
                                        </div>

                                        <div className="mb-4">
                                            <span className="text-xs font-bold tracking-wider uppercase text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                                                {startup.category}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 text-primary flex items-center gap-2">
                                            {startup.name}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                            {startup.description}
                                        </p>

                                        <a href="#" className="mt-auto inline-flex items-center text-sm font-bold text-accent hover:text-accent-hover transition-colors">
                                            Learn More <ArrowUpRight size={16} className="ml-1" />
                                        </a>
                                    </div>
                                }
                            />
                        </div>
                    ))}

                    {/* Call to Action Card - Keeping simple motion card or attempting tilt? simple for now to differentiate */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-primary p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center text-center text-white h-[320px]"
                    >
                        <h3 className="text-2xl font-bold mb-4">Are you next?</h3>
                        <p className="text-gray-400 mb-8 text-sm">
                            Join our incubation program and get access to funding, mentorship, and resources.
                        </p>
                        <button className="bg-white text-primary px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors w-full">
                            Apply for Incubation
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Startups;
