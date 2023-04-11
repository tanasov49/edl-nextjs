import React from 'react';
import LogoImage from '../../../../public/images/logo.png'
import Image from 'next/image';
import styles from './Logo.module.scss'
function Logo() {
    return (
        <div className={styles.logo}> 
            <Image src={LogoImage} alt='logo' />
        </div>
    );
}

export default Logo;