import Nav from '@/components/UI/Nav/Nav';
import React from 'react';
import styles from './Header.module.scss';
function Header() {
    return (
        <header className={styles.header}>
           <Nav />
        </header>
    );
}

export default Header;