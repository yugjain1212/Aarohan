import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const highlights = [
    {
        number: "01",
        title: "Exhibition Visit",
        points: [
            "Exposure to startups, products, and innovations",
            "Understanding business models and market applications",
        ],
    },
    {
        number: "02",
        title: "Crowd Venture",
        points: [
            "Collective evaluation of startup ideas",
            "Collaborative decision-making and feedback",
        ],
    },
    {
        number: "03",
        title: "Fireside Chat",
        points: [
            "Insights from entrepreneurs and industry professionals",
            "Discussion on leadership, innovation, and growth",
        ],
    },
    {
        number: "04",
        title: "Demo Day",
        points: [
            "Presentation of ideas, prototypes, or ventures",
            "Feedback and refinement of business concepts",
        ],
    },
];

/* Floating ambient orbs rendered on a canvas for a living background */
const AmbientCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let w, h;

        const orbs = Array.from({ length: 6 }, () => ({
            x: Math.random(),
            y: Math.random(),
            r: 120 + Math.random() * 180,
            dx: (Math.random() - 0.5) * 0.15,
            dy: (Math.random() - 0.5) * 0.12,
            hue: 210 + Math.random() * 30,
            sat: 70 + Math.random() * 20,
        }));

        const resize = () => {
            w = canvas.width = canvas.offsetWidth;
            h = canvas.height = canvas.offsetHeight;
        };

        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            orbs.forEach(o => {
                o.x += o.dx / w;
                o.y += o.dy / h;
                if (o.x < -0.1 || o.x > 1.1) o.dx *= -1;
                if (o.y < -0.1 || o.y > 1.1) o.dy *= -1;

                const grd = ctx.createRadialGradient(o.x * w, o.y * h, 0, o.x * w, o.y * h, o.r);
                grd.addColorStop(0, `hsla(${o.hue}, ${o.sat}%, 82%, 0.18)`);
                grd.addColorStop(1, `hsla(${o.hue}, ${o.sat}%, 90%, 0)`);
                ctx.fillStyle = grd;
                ctx.beginPath();
                ctx.arc(o.x * w, o.y * h, o.r, 0, Math.PI * 2);
                ctx.fill();
            });
            animId = requestAnimationFrame(draw);
        };

        resize();
        draw();
        window.addEventListener('resize', resize);
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.7 }}
        />
    );
};

const EventHighlights = () => {
    return (
        <section id="highlights" className="py-28 bg-white relative overflow-hidden">
            {/* Animated ambient background */}
            <AmbientCanvas />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-20"
                >
                    <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
                        What to expect
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                        Event Highlights
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                        Four signature formats designed to spark ideas, build connections, and accelerate entrepreneurial growth.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-40px" }}
                            className="group"
                        >
                            <div className="flex items-start gap-6">
                                {/* Number */}
                                <span className="text-5xl font-display font-bold text-gray-100 group-hover:text-accent/20 transition-colors duration-500 leading-none select-none flex-shrink-0">
                                    {item.number}
                                </span>

                                <div className="pt-1">
                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                                        {item.title}
                                    </h3>

                                    {/* Points */}
                                    <ul className="space-y-2.5">
                                        {item.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-500 text-[15px] leading-relaxed">
                                                <span className="w-1 h-1 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="mt-8 h-px bg-gray-100 group-hover:bg-accent/10 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventHighlights;
