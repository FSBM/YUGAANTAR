import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { festTitle } from '../../assets/Images';
import { Profile_Avatar } from '../../assets/Images';

const Navbar: React.FC = () => {
    const navItems = ['Events', 'Timeline', 'Merch', 'About Us', 'Contact Us'];
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
            <img loading="lazy" src={festTitle} alt="Yugaantar Fest Logo" className={styles.logo} />
            <nav className={styles.nav}>
                {navItems.map((item, index) => (
                    <a key={index} href={`${item.toLowerCase().replace(' ', '-')}`} className={styles.navLink}>
                        {item}
                    </a>
                ))}
            </nav>
            <img loading="lazy" className={styles.avatar} src={Profile_Avatar} alt="Avatar" />
        </header>
    );
};

export default Navbar;