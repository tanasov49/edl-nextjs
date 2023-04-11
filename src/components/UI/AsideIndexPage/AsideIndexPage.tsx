import React from 'react';
import styles from './AsideIndexPage.module.scss';
function AsideIndexPage() {
    return (
        <aside className={styles['aside-index-page']}>
            <h1 className={styles['aside-index-page__title']}>We make <br /> a joy to use.</h1>
            <p className={styles['aside-index-page__subtitle']}>EDL ® is a Copenhagen-based design agency.</p>
            <a className={styles['aside-index-page__link']} href='/services'>Learn about our approach</a>
        </aside>
    );
}

export default AsideIndexPage;