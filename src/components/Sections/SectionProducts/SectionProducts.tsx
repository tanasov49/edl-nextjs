import { productItems } from '@/data/data';
import Image from 'next/image';
import React from 'react';
import styles from './SectionProducts.module.scss';
function SectionProducts() {
    return (
        <section className={styles['section-products']}>
                {productItems.map((item, key) => (
                    <ul className={styles.product} key={key}>
                        <li><Image className={styles['product__image']} alt={item.linkTitle} src={item.src} /></li>
                        <li><a className={styles['product__link']} href={`/${item.link}`}>{item.linkTitle}</a></li>
                        <li><h2 className={styles['product__title']}>{item.title}</h2></li>
                        <li className={styles['product-skills']}>
                        {item.technologies.map((sm, skey) => (
                            <p key={skey}>{sm.skill}</p>
                            ))}
                        </li>
                    </ul>
                ))}
        </section>
    );
}

export default SectionProducts;