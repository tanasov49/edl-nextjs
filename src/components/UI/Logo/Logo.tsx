import React, { useContext } from 'react';
import LogoImage from '../../../../public/images/logo.png'
import Image from 'next/image';
import styles from './Logo.module.scss'
import { ModalContext } from '@/context/context';
import Link from 'next/link';
function Logo() {
    const {isOpenMenu} = useContext(ModalContext)
    return (
        <Link href='/' className={isOpenMenu ? `${styles.logo} ${styles['logo_active']}` : `${styles.logo}`}> 
            <Image src={LogoImage} alt='logo' />
        </Link>
    );
}

export default Logo;