import React, { useContext, useState } from 'react';
import MenuSvg from '../../../../public/svg/menu.svg';
import styles from './ButtonMenu.module.scss';
import { ModalContext } from '@/context/context';
function ButtonMenu() {
    const {isOpenMenu, hadnleOpenMenu} = useContext(ModalContext)
    return (
        <button onClick={hadnleOpenMenu} className={isOpenMenu ? `${styles['button-menu']} ${styles['button-menu_active']}` : `${styles['button-menu']}`} type='button'>
            <MenuSvg />
        </button>
    );
}

export default ButtonMenu;