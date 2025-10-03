import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { festTitle } from '../../assets/Images';
import { Profile_Avatar } from '../../assets/Images';

const Navbar: React.FC = () => {
    const navItems = ['Events', 'Timeline', 'Merch', 'About Us', 'Contact Us'];
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    
    const getRouteForItem = (item: string) => {
        const route = item.toLowerCase().replace(' ', '-');
        return `/${route}`;
    };
    
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
        <>
            {/* SVG Filter for Liquid Glass Effect */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <filter id="liquid-glass-filter">
                        <feTurbulence 
                            type="fractalNoise" 
                            baseFrequency="0.02" 
                            numOctaves="3" 
                            result="noise" 
                        />
                        <feDisplacementMap 
                            in="SourceGraphic" 
                            in2="noise" 
                            scale="8" 
                            xChannelSelector="R" 
                            yChannelSelector="G" 
                        />
                    </filter>
                </defs>
            </svg>
            
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
                <img 
                    onClick={() => navigate('/')}
                    loading="lazy" 
                    src={festTitle} 
                    alt="Yugaantar Fest Logo" 
                    className={styles.logo} 
                    style={{ cursor: 'pointer' }}
                />
                <nav className={styles.nav}>
                    {navItems.map((item, index) => (
                        <Link 
                            key={index} 
                            to={getRouteForItem(item)} 
                            className={styles.navLink}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
                <img loading="lazy" className={styles.avatar} src={Profile_Avatar} alt="Avatar" />
            </header>
        </>
    );
};

export default Navbar;