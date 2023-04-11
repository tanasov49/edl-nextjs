import React from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import styles from './Nav.module.scss';
function Nav() {
    return (
        <nav className={styles.nav}>
            <Logo />
            <Menu />
        </nav>
    );
}

export default Nav;