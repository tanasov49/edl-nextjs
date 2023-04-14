import { menuLinks } from '@/data/data';
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './Menu.module.scss'
import { ModalContext } from '@/context/context';
function Menu() {
    const {isOpenMenu} = useContext(ModalContext)
    return (
        <ul className={isOpenMenu ? `${styles.menu} ${styles['menu_active']}` : `${styles.menu}`}>
            {menuLinks.map((item, key) =>
            <li className={styles['menu-item']} key={key}>
                <Link className={styles['menu-item__link']} href={`/${item.link}`}>{item.title}</Link>
            </li>
            )}
        </ul>
    );
}

export default Menu;