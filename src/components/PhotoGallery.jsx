import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhotoGallery = ({ isOpen, onClose, images = [] }) => {
    const [current, setCurrent] = useState(0);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative max-w-4xl w-full max-h-[80vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {images.length > 0 && (
                        <img
                            src={images[current]}
                            alt={`Gallery image ${current + 1}`}
                            className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
                        />
                    )}

                    {/* Navigation */}
                    {images.length > 1 && (
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
                            <button
                                onClick={() => setCurrent((p) => (p - 1 + images.length) % images.length)}
                                className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition"
                            >
                                ‹
                            </button>
                            <button
                                onClick={() => setCurrent((p) => (p + 1) % images.length)}
                                className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition"
                            >
                                ›
                            </button>
                        </div>
                    )}

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute -top-12 right-0 text-white/70 hover:text-white text-sm font-medium"
                    >
                        Close
                    </button>

                    {/* Counter */}
                    {images.length > 1 && (
                        <div className="text-center mt-4 text-white/50 text-sm">
                            {current + 1} / {images.length}
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PhotoGallery;
