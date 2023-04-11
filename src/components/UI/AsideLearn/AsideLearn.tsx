import React from 'react';
import styles from './AsideLearn.module.scss';
import Image from 'next/image';
import FrederickPhoto from '../../../../public/images/frederick-photo.png';
function AsideLearn() {
    return (
        <aside className={styles['aside-learn']}>
            <div className={styles['block-ceo']}>
                <Image src={FrederickPhoto} alt='frederick-photo' />
                <h3 className={styles['block-ceo__title']}>Learn more about EDL</h3>
                <p className={styles['block-ceo__subtitle']}>Frederick would love to grab a coffee, tell you about EDL, and discuss your design needs.</p>
                <p className={styles['block-ceo__name']}>Frederick J. Andersen</p>
                <p className={styles['block-ceo__name']}>Designer & CEO</p>
                <a className={styles['block-ceo__link']} href='mailto:fa@edl.dk'>fa@edl.dk</a>
                <a className={styles['block-ceo__link']}  href="tel:28 25 36 94">28 25 36 94</a>
                <a target='_blank' className={styles['block-ceo__link']}  href="https://www.linkedin.com/">LinkedIn</a>
            </div>
        </aside>
    );
}

export default AsideLearn;