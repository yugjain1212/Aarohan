import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, User, Coffee, Utensils, ChevronDown, Sparkles, Mic, Users, MessageSquare } from 'lucide-react';

const agendaData = [
    {
        time: "10:00 AM",
        endTime: "10:30 AM",
        title: "Registrations and Networking",
        venue: "IET Amphitheatre",
        speaker: "Team AIC",
        type: "networking",
        description: "Connect with fellow entrepreneurs, innovators, and mentors before the summit kicks off.",
    },
    {
        time: "10:30 AM",
        endTime: "10:35 AM",
        title: "Welcome Address",
        venue: "IET Amphitheatre",
        speaker: "Vijaysekhar Chellaboina, Vice Chancellor",
        type: "session",
        description: "Setting the stage for a day of innovation and inspiration.",
    },
    {
        time: "10:35 AM",
        endTime: "10:40 AM",
        title: "Inaugural Session: The Resilient Startup Ecosystem in India",
        venue: "IET Amphitheatre",
        speaker: "Prem Singh",
        type: "keynote",
        description: "Exploring the pillars of resilience that power India's startup growth story.",
    },
    {
        time: "10:40 AM",
        endTime: "11:00 AM",
        title: "Keynote Session 1",
        venue: "IET Amphitheatre",
        speaker: "Prajakt Raut",
        type: "keynote",
        description: "Insights from one of India's most respected startup ecosystem builders.",
    },
    {
        time: "11:00 AM",
        endTime: "11:20 AM",
        title: "Keynote Session 2",
        venue: "IET Amphitheatre",
        speaker: "Aquil Busrai",
        type: "keynote",
        description: "Leadership lessons from an HR veteran who shaped global enterprises.",
    },
    {
        time: "11:20 AM",
        endTime: "11:40 AM",
        title: "Keynote Session 3",
        venue: "IET Amphitheatre",
        speaker: "Munish Jindal",
        type: "keynote",
        description: "Technology, AI, and the future of sustainable entrepreneurship.",
    },
    {
        time: "11:40 AM",
        endTime: "12:10 PM",
        title: "Fireside Chat: Entrepreneurship's Secret Ingredients",
        venue: "IET Amphitheatre",
        speaker: "Manu Sharma & Ankur Lohani Kumar",
        type: "session",
        description: "An intimate conversation on what it really takes to build from scratch.",
    },
    {
        time: "12:10 PM",
        endTime: "12:25 PM",
        title: "Hi-Tea Break",
        venue: "Networking Area",
        speaker: "",
        type: "break",
        description: "Refresh, recharge, and make valuable connections.",
    },
    {
        time: "12:25 PM",
        endTime: "12:55 PM",
        title: "Reverse Pitch",
        venue: "IET Amphitheatre",
        speaker: "Dharm Rakshit & Seema Bangia",
        type: "session",
        description: "The tables turn — investors pitch their vision to startups.",
    },
    {
        time: "12:55 PM",
        endTime: "01:55 PM",
        title: "Panel Discussion: Thrifty Talent Craftsmanship",
        venue: "IET Amphitheatre",
        speaker: "Industry Leaders Panel",
        type: "session",
        description: "Building world-class teams on a startup budget — strategies from the experts.",
    },
    {
        time: "01:55 PM",
        endTime: "02:45 PM",
        title: "Networking Lunch",
        venue: "Dining Area",
        speaker: "",
        type: "break",
        description: "Continue the conversations over a curated lunch experience.",
    },
    {
        time: "02:45 PM",
        endTime: "03:45 PM",
        title: "CrowdVenture: Where Ideas Meet Investment",
        venue: "Smart Classroom",
        speaker: "",
        type: "keynote",
        description: "Live fundraising — startups pitch for real-time crowd investment.",
    },
    {
        time: "03:45 PM",
        endTime: "04:00 PM",
        title: "Hi-Tea",
        venue: "Expo Area",
        speaker: "",
        type: "break",
        description: "Explore the startup expo while enjoying refreshments.",
    },
    {
        time: "04:00 PM",
        endTime: "05:30 PM",
        title: "CrowdVenture + Startup Mixer",
        venue: "Smart Classroom",
        speaker: "",
        type: "networking",
        description: "The ultimate closing — live deals, spontaneous pitches, and lasting connections.",
    },
];

const typeConfig = {
    keynote: {
        gradient: 'from-orange-500 to-amber-500',
        bg: 'bg-gradient-to-br from-orange-50 to-amber-50',
        border: 'border-orange-200/60',
        text: 'text-orange-700',
        badgeBg: 'bg-orange-500',
        icon: <Mic size={14} />,
        label: 'Keynote',
        glow: 'hover:shadow-orange-200/50',
    },
    session: {
        gradient: 'from-blue-600 to-indigo-600',
        bg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
        border: 'border-blue-200/60',
        text: 'text-blue-700',
        badgeBg: 'bg-blue-600',
        icon: <MessageSquare size={14} />,
        label: 'Session',
        glow: 'hover:shadow-blue-200/50',
    },
    break: {
        gradient: 'from-emerald-500 to-teal-500',
        bg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
        border: 'border-emerald-200/60',
        text: 'text-emerald-700',
        badgeBg: 'bg-emerald-500',
        icon: <Coffee size={14} />,
        label: 'Break',
        glow: 'hover:shadow-emerald-200/50',
    },
    networking: {
        gradient: 'from-violet-500 to-purple-600',
        bg: 'bg-gradient-to-br from-violet-50 to-purple-50',
        border: 'border-violet-200/60',
        text: 'text-violet-700',
        badgeBg: 'bg-violet-500',
        icon: <Users size={14} />,
        label: 'Networking',
        glow: 'hover:shadow-violet-200/50',
    },
};

const filters = [
    { key: 'all', label: 'All Events' },
    { key: 'keynote', label: 'Keynotes' },
    { key: 'session', label: 'Sessions' },
    { key: 'break', label: 'Breaks' },
    { key: 'networking', label: 'Networking' },
];

const AgendaCard = ({ item, index, isExpanded, onToggle }) => {
    const config = typeConfig[item.type] || typeConfig.session;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-30px" }}
            onClick={onToggle}
            className={`group relative cursor-pointer rounded-2xl border transition-all duration-400 ${config.border} ${config.glow} ${isExpanded
                    ? `${config.bg} shadow-xl ring-1 ring-black/5`
                    : 'bg-white hover:shadow-lg'
                }`}
        >
            {/* Top colored accent strip */}
            <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isExpanded ? '!opacity-100' : ''}`} />

            <div className="p-5 md:p-6">
                <div className="flex items-start gap-4">
                    {/* Time column */}
                    <div className="flex-shrink-0 text-center min-w-[70px] pt-1">
                        <span className="text-lg font-bold text-primary leading-none block">{item.time}</span>
                        <span className="text-xs text-gray-400 mt-1 block">to {item.endTime}</span>
                    </div>

                    {/* Divider */}
                    <div className="flex-shrink-0 flex flex-col items-center pt-1">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${config.gradient} shadow-md ring-4 ring-white`} />
                        <div className={`w-0.5 flex-1 mt-1 bg-gradient-to-b ${config.gradient} opacity-20 rounded-full min-h-[20px]`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className={`inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white ${config.badgeBg} shadow-sm`}>
                                {config.icon}
                                {config.label}
                            </span>
                            <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                <MapPin size={12} />
                                <span>{item.venue}</span>
                            </div>
                        </div>

                        <h3 className="text-base md:text-lg font-bold text-primary leading-snug mb-1 group-hover:text-accent transition-colors duration-300">
                            {item.title}
                        </h3>

                        {item.speaker && (
                            <div className="flex items-center gap-1.5 text-sm text-gray-500">
                                <User size={13} className="text-accent" />
                                <span className="font-medium">{item.speaker}</span>
                            </div>
                        )}

                        {/* Expandable description */}
                        <AnimatePresence>
                            {isExpanded && item.description && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-sm text-gray-500 mt-3 leading-relaxed border-t border-gray-100 pt-3">
                                        {item.description}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Expand chevron */}
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 text-gray-300 group-hover:text-accent transition-colors pt-1"
                    >
                        <ChevronDown size={18} />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const EventAgenda = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [expandedIndex, setExpandedIndex] = useState(null);

    const filteredData = activeFilter === 'all'
        ? agendaData
        : agendaData.filter(item => item.type === activeFilter);

    return (
        <section id="agenda" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 30%, #f1f5f9 70%, #f8fafc 100%)' }}>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
            <div className="absolute bottom-40 -right-20 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-14"
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-accent/20 bg-orange-50">
                        <Sparkles size={14} className="text-accent" />
                        <span className="text-accent font-semibold tracking-wide text-sm">EVENT SCHEDULE</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-5 text-primary tracking-tight">
                        Summit <span className="text-accent">Agenda</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-accent mx-auto mb-6 rounded-full" />
                    <p className="text-secondary text-lg leading-relaxed">
                        A full day of inspiring talks, discussions, and networking — tap any event to learn more.
                    </p>
                </motion.div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {filters.map((f) => (
                        <button
                            key={f.key}
                            onClick={() => { setActiveFilter(f.key); setExpandedIndex(null); }}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === f.key
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                                    : 'bg-white text-gray-500 border border-gray-200 hover:border-primary/30 hover:text-primary hover:shadow-md'
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </motion.div>

                {/* Agenda list */}
                <div className="max-w-3xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-4"
                        >
                            {filteredData.map((item, index) => (
                                <AgendaCard
                                    key={item.title + item.time}
                                    item={item}
                                    index={index}
                                    isExpanded={expandedIndex === item.title}
                                    onToggle={() => setExpandedIndex(expandedIndex === item.title ? null : item.title)}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredData.length === 0 && (
                        <div className="text-center py-16 text-gray-400">
                            <p className="text-lg font-medium">No events in this category.</p>
                        </div>
                    )}

                    {/* End marker */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-12"
                    >
                        <div className="bg-gradient-to-r from-accent to-orange-500 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-orange-200/50 flex items-center gap-2">
                            <Utensils size={16} />
                            End of Summit — See You Next Year! 🎉
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EventAgenda;
