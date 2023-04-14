import React, { useContext } from 'react';
import LogoImage from '../../../../public/images/logo.png'
import Image from 'next/image';
import styles from './Logo.module.scss'
import { ModalContext } from '@/context/context';
function Logo() {
    const {isOpenMenu} = useContext(ModalContext)
    return (
        <a href='/' className={isOpenMenu ? `${styles.logo} ${styles['logo_active']}` : `${styles.logo}`}> 
            <Image src={LogoImage} alt='logo' />
        </a>
    );
}

export default Logo;