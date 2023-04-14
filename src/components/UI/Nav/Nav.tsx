import React, { useContext } from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import styles from './Nav.module.scss';
import ButtonMenu from '../ButtonMenu/ButtonMenu';
import { ModalContext } from '@/context/context';
function Nav() {
    const {isOpenMenu} = useContext(ModalContext)
    return (
        <nav className={isOpenMenu ? `${styles.nav} ${styles['nav_active']}` : `${styles.nav}`}>
            <Logo />
            <Menu />
            <ButtonMenu />
        </nav>
    );
}

export default Nav;