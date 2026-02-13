import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const impactStats = [
    {
        value: 34,
        label: "Startup Stalls",
        detail: "Hands-on entrepreneurial exposure for students across institutions",
    },
    {
        value: 300,
        suffix: "+",
        label: "External Participants",
        detail: "Students from outside JKLU, expanding outreach and community",
    },
    {
        value: 1.5,
        prefix: "₹",
        suffix: "L+",
        label: "Revenue Generated",
        detail: "By student-run stalls in just 4 hours — 1.5× growth from last edition",
    },
    {
        value: 40,
        suffix: "%",
        label: "Less Paper Usage",
        detail: "Reusable banners, posters, standees and lanyards for sustainability",
    },
    {
        value: 1.25,
        prefix: "₹",
        suffix: "L+",
        label: "Prototyping Support",
        detail: "Raised for JKLU students through CrowdVenture",
    },
    {
        value: 50,
        prefix: "₹",
        suffix: "K",
        label: "Sponsorship Value",
        detail: "Generated via HSB for merchandise and commercial stall setups",
    },
];

const Counter = ({ value, prefix = "", suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const duration = 1600;
        const steps = 40;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(current);
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isInView, value]);

    const display = Number.isInteger(value)
        ? Math.round(count)
        : count.toFixed(count >= value ? (value % 1 === 0 ? 0 : String(value).split('.')[1]?.length || 0) : 1);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{display}{suffix}
        </span>
    );
};

const ImpactSection = () => {
    return (
        <section
            id="impact"
            className="py-28 relative overflow-hidden"
            style={{
                background: 'linear-gradient(165deg, #e8f0fe 0%, #dce8fa 25%, #cfddf7 50%, #e2ecfb 75%, #edf3fe 100%)',
            }}
        >
            {/* Subtle decorative shapes */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-indigo-100/40 blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
                        By the numbers
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                        Impact of Aarohan '25
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
                        Real outcomes that reflect the energy and ambition of our community.
                    </p>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {impactStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true, margin: "-30px" }}
                            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/60 hover:bg-white hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-400 group"
                        >
                            <div className="text-4xl md:text-5xl font-black text-primary mb-3 leading-none tracking-tight">
                                <Counter
                                    value={stat.value}
                                    prefix={stat.prefix}
                                    suffix={stat.suffix}
                                />
                            </div>
                            <h3 className="text-primary font-semibold text-base mb-2">
                                {stat.label}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-500 transition-colors duration-400">
                                {stat.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
