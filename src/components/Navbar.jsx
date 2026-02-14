import React from 'react';
import StaggeredMenu from './StaggeredMenu';

const Navbar = () => {
    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '#' },
        { label: 'Programs', ariaLabel: 'View our programs', link: '#programs' },
        { label: 'Highlights', ariaLabel: 'View events highlights', link: '#highlights' },
        { label: 'Mentors', ariaLabel: 'Meet our mentors', link: '#mentors' },
        { label: 'Events', ariaLabel: 'View events', link: '#agenda' },
        { label: 'Apply Now', ariaLabel: 'Apply for Aarohan', link: 'https://docs.google.com/forms/d/e/1FAIpQLSfge_VnwnG-G5G-J3vVTeFrnC6T8xIitQKs8DLxfLzVD4l4Cw/viewform' }
    ];

    const socialItems = [
        { label: 'Twitter', link: 'https://x.com/AicJklu' },
        { label: 'LinkedIn', link: 'https://www.linkedin.com/company/aic-jklu/?originalSubdomain=in' },
        { label: 'Instagram', link: 'https://www.instagram.com/aicjklu_/' }
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
