import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const StaggeredMenu = ({
    position = 'right',
    colors = ['#1e3a5f', '#0d2137'],
    items = [],
    socialItems = [],
    displaySocials = true,
    displayItemNumbering = true,
    logoUrl = '/logo.png',
    accentColor = '#E97451',
    closeOnClickAway = true,
    onMenuOpen,
    onMenuClose,
}) => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const openRef = useRef(false);

    // Track scroll position
    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const panelRef = useRef(null);
    const preLayersRef = useRef(null);
    const preLayerElsRef = useRef([]);
    const toggleBtnRef = useRef(null);
    const busyRef = useRef(false);

    const openTlRef = useRef(null);
    const closeTweenRef = useRef(null);
    const itemEntranceTweenRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const panel = panelRef.current;
            const preContainer = preLayersRef.current;

            if (!panel) return;

            let preLayers = [];
            if (preContainer) {
                preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
            }
            preLayerElsRef.current = preLayers;

            gsap.set([panel, ...preLayers], { xPercent: 100 });
        });
        return () => ctx.revert();
    }, []);

    const buildOpenTimeline = useCallback(() => {
        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return null;

        openTlRef.current?.kill();
        closeTweenRef.current?.kill();
        itemEntranceTweenRef.current?.kill();

        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));

        if (itemEls.length) gsap.set(itemEls, { yPercent: 100, opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 20, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        layers.forEach((layer, i) => {
            tl.to(layer, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.05);
        });

        tl.to(panel, { xPercent: 0, duration: 0.6, ease: 'power4.out' }, layers.length * 0.05);

        if (itemEls.length) {
            tl.to(itemEls, {
                yPercent: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power4.out',
                stagger: 0.08
            }, "-=0.3");
        }

        if (socialLinks.length) {
            tl.to(socialLinks, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power3.out',
                stagger: 0.05
            }, "-=0.4");
        }

        openTlRef.current = tl;
        return tl;
    }, []);

    const playOpen = useCallback(() => {
        if (busyRef.current) return;
        busyRef.current = true;
        const tl = buildOpenTimeline();
        if (tl) {
            tl.eventCallback('onComplete', () => { busyRef.current = false; });
            tl.play(0);
        } else {
            busyRef.current = false;
        }
    }, [buildOpenTimeline]);

    const playClose = useCallback(() => {
        openTlRef.current?.kill();
        itemEntranceTweenRef.current?.kill();

        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return;

        closeTweenRef.current = gsap.to([...layers, panel], {
            xPercent: 100,
            duration: 0.35,
            ease: 'power3.in',
            stagger: 0.02,
            onComplete: () => { busyRef.current = false; }
        });
    }, []);

    const toggleMenu = useCallback(() => {
        const target = !openRef.current;
        openRef.current = target;
        setOpen(target);

        if (target) {
            onMenuOpen?.();
            playOpen();
        } else {
            onMenuClose?.();
            playClose();
        }
    }, [playOpen, playClose, onMenuOpen, onMenuClose]);

    const closeMenu = useCallback(() => {
        if (openRef.current) {
            openRef.current = false;
            setOpen(false);
            onMenuClose?.();
            playClose();
        }
    }, [playClose, onMenuClose]);

    React.useEffect(() => {
        if (!closeOnClickAway || !open) return;

        const handleClickOutside = event => {
            if (
                panelRef.current &&
                !panelRef.current.contains(event.target) &&
                toggleBtnRef.current &&
                !toggleBtnRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [closeOnClickAway, open, closeMenu]);

    return (
        <div className="fixed top-0 left-0 w-full z-50" style={{ ['--sm-accent']: accentColor }}>
            {/* Header */}
            <header className={`flex items-center justify-between px-4 md:px-8 py-4 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}>
                <div className="flex items-center gap-3">
                    <img
                        src={logoUrl}
                        alt="Logo"
                        className="h-12 md:h-16 w-auto object-contain"
                        draggable={false}
                    />
                    <span className="text-lg md:text-xl font-bold text-white hidden sm:block">
                        Aarohan <span className="text-accent">3.0</span>
                    </span>
                </div>

                <button
                    ref={toggleBtnRef}
                    onClick={toggleMenu}
                    className="flex items-center gap-3 text-white font-medium hover:opacity-80 transition-opacity"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                >
                    <span className="text-sm md:text-base">{open ? 'Close' : 'Menu'}</span>
                    <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                        <span className={`w-6 h-0.5 bg-current rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-1' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-current rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-1' : ''}`}></span>
                    </div>
                </button>
            </header>

            {/* Pre-layers */}
            <div ref={preLayersRef} className="fixed top-0 right-0 h-screen pointer-events-none" style={{ width: 'min(100vw, 450px)' }}>
                {colors.map((c, i) => (
                    <div
                        key={i}
                        className="sm-prelayer absolute inset-0"
                        style={{ background: c }}
                    />
                ))}
            </div>

            {/* Menu Panel */}
            <aside
                ref={panelRef}
                className="fixed top-0 right-0 h-screen bg-white flex flex-col overflow-y-auto pointer-events-auto shadow-2xl"
                style={{ width: 'min(100vw, 450px)' }}
                aria-hidden={!open}
            >
                {/* Close Button */}
                <div className="flex justify-end p-6">
                    <button
                        onClick={closeMenu}
                        className="text-gray-500 hover:text-gray-900 font-medium flex items-center gap-2 transition-colors"
                    >
                        Close
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 px-8 pb-8">
                    <ul className="flex flex-col gap-3">
                        {items.map((item, idx) => (
                            <li key={item.label + idx} className="overflow-hidden">
                                <a
                                    href={item.link}
                                    className="group flex items-center justify-between py-2 text-gray-900 hover:text-[var(--sm-accent)] transition-colors"
                                    onClick={closeMenu}
                                >
                                    <span className="sm-panel-itemLabel text-3xl md:text-4xl font-bold uppercase tracking-tight">
                                        {item.label}
                                    </span>
                                    {displayItemNumbering && (
                                        <span className="text-sm font-normal text-[var(--sm-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {displaySocials && socialItems.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--sm-accent)] mb-4">
                                Follow Us
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {socialItems.map((s, i) => (
                                    <a
                                        key={s.label + i}
                                        href={s.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="sm-socials-link text-gray-600 hover:text-[var(--sm-accent)] font-medium transition-colors"
                                    >
                                        {s.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </nav>
            </aside>
        </div>
    );
};

export default StaggeredMenu;
