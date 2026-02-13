import React from 'react';
import StaggeredMenu from './StaggeredMenu';

const Navbar = () => {
    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '#' },
        { label: 'Programs', ariaLabel: 'View our programs', link: '#programs' },
        { label: 'Startups', ariaLabel: 'Explore startups', link: '#startups' },
        { label: 'Mentors', ariaLabel: 'Meet our mentors', link: '#mentors' },
        { label: 'Events', ariaLabel: 'View events', link: '#events' },
        { label: 'Apply Now', ariaLabel: 'Apply for Aarohan', link: '#apply' }
    ];

    const socialItems = [
        { label: 'Twitter', link: 'https://twitter.com' },
        { label: 'LinkedIn', link: 'https://linkedin.com' },
        { label: 'Instagram', link: 'https://instagram.com' }
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#ffffff"
                openMenuButtonColor="#111111"
                changeMenuColorOnOpen={true}
                colors={['#1e3a5f', '#0d2137']}
                logoUrl="/logo.png"
                accentColor="#E97451"
                showLogo={true}
                isFixed={false}
            />
        </div>
    );
};

export default Navbar;
