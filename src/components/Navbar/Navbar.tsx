import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const navItems = ['Events', 'Timeline', 'Merch', 'Contact Us'];
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <img loading="lazy" src="./YugaantarLogo.svg" alt="Yugaantar Fest Logo" className={styles.logo} />
            <nav className={styles.nav}>
                {navItems.map((item, index) => (
                    <a key={index} href={`${item.toLowerCase().replace(' ', '-')}`} className={styles.navLink}>
                        {item}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Navbar;