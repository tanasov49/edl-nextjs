import { menuLinks } from '@/data/data';
import Link from 'next/link';
import React from 'react';
import styles from './Menu.module.scss'
function Menu() {
    return (
        <ul className={styles.menu}>
            {menuLinks.map((item, key) =>
            <li className={styles['menu-item']} key={key}>
                <Link className={styles['menu-item__link']} href={`/${item.link}`}>{item.title}</Link>
            </li>
            )}
        </ul>
    );
}

export default Menu;