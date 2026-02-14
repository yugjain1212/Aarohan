import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhotoGallery = ({ isOpen, onClose, images = [] }) => {
    const [current, setCurrent] = useState(0);
    const [view, setView] = useState('grid'); // 'grid' or 'slideshow'

    // Reset view when modal opens
    useEffect(() => {
        if (isOpen) {
            setView('grid');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col"
                onClick={onClose}
            >
                {/* Header/Controls */}
                <div className="flex justify-between items-center p-6 z-50 bg-gradient-to-b from-black/80 to-transparent" onClick={(e) => e.stopPropagation()}>
                    <div className="text-white/80 font-medium">
                        {view === 'slideshow' ? `${current + 1} / ${images.length}` : 'Event Gallery'}
                    </div>
                    <div className="flex gap-4">
                        {view === 'slideshow' && (
                            <button
                                onClick={() => setView('grid')}
                                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
                            >
                                Back to Grid
                            </button>
                        )}
                        <button
                            onClick={onClose}
                            className="bg-white/10 hover:bg-red-500/80 p-2 rounded-full text-white transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-hidden relative" onClick={(e) => e.stopPropagation()}>
                    {view === 'grid' ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="h-full overflow-y-auto p-4 md:p-8"
                        >
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {images.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        layoutId={`img-${idx}`}
                                        className="aspect-square relative group cursor-pointer overflow-hidden rounded-xl bg-gray-900"
                                        onClick={() => {
                                            setCurrent(idx);
                                            setView('slideshow');
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <img
                                            src={img}
                                            alt={`Gallery thumbnail ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="h-full flex items-center justify-center p-4"
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                {images.length > 0 && (
                                    <motion.img
                                        key={current}
                                        layoutId={`img-${current}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        src={images[current]}
                                        alt={`Gallery image ${current + 1}`}
                                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                                    />
                                )}

                                {/* Navigation Arrows */}
                                {images.length > 1 && (
                                    <>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setCurrent((p) => (p - 1 + images.length) % images.length); }}
                                            className="absolute left-4 p-4 rounded-full bg-black/50 hover:bg-accent text-white transition-all backdrop-blur-sm"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setCurrent((p) => (p + 1) % images.length); }}
                                            className="absolute right-4 p-4 rounded-full bg-black/50 hover:bg-accent text-white transition-all backdrop-blur-sm"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                        </button>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PhotoGallery;
