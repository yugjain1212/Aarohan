import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery = ({ isOpen, onClose, images }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const goNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-[110] text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                    <X size={32} />
                </button>

                {/* Image Counter */}
                <div className="absolute top-6 left-6 z-[110] text-white/80 text-lg font-medium">
                    {currentIndex + 1} / {images.length}
                </div>

                {/* Main Image */}
                <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`Event photo ${currentIndex + 1}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                    </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={goPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] text-white/80 hover:text-white transition-all p-3 hover:bg-white/10 rounded-full"
                >
                    <ChevronLeft size={40} />
                </button>
                <button
                    onClick={goNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] text-white/80 hover:text-white transition-all p-3 hover:bg-white/10 rounded-full"
                >
                    <ChevronRight size={40} />
                </button>

                {/* Thumbnail Strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-6 px-4 z-[105]">
                    <div className="flex gap-2 overflow-x-auto justify-center pb-2">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-200 ${idx === currentIndex
                                        ? 'ring-2 ring-accent scale-110'
                                        : 'opacity-60 hover:opacity-100'
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PhotoGallery;
