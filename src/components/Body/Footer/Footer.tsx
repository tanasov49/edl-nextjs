import React from 'react';
import styles from './Footer.module.scss';
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.address}>
                <div>
                    <p className={styles['address__city']}>Copenhagen</p>
                    <p className={styles['address__street']}>Amagerfælledvej 106</p>
                    <p className={styles['address__street']}>2300 Copenhagen</p>
                    <p className={styles['address__street']}>Denmark</p>
                    <p className={styles['address__subtitle']}>Directions</p>
                </div>
                <div>
                    <p className={styles['address__city']}>Odense</p>
                    <p className={styles['address__street']}>Stærmosegårdsvej 8</p>
                    <p className={styles['address__street']}>5230 Odense</p>
                    <p className={styles['address__street']}>Denmark</p>
                    <p className={styles['address__subtitle']}>Directions</p>
                </div>
            </div>
            <div className={styles.description}>
                <a className={styles['description__link']} href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
                <p className={styles['description__text']}>© 2023 EDL</p>
            </div>
        </footer>
    );
}

export default Footer;