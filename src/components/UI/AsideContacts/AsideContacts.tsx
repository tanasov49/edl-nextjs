import React, {useContext} from 'react';
import styles from './AsideContacts.module.scss';
import { ModalContext } from '@/context/context';
function AsideContacts() {
    const {openPopup} = useContext(ModalContext);
    return (
        <aside className={styles['aside-contacts']}>
            <h2>We’d love to hear about your <br />challenges.</h2>
            <p>Even if you’re unsure what’s next. No sales talk,<br /> no strings attached.</p>
            <button onClick={openPopup} className={styles['aside-contacts__button']} type='button'>Contact us</button>
        </aside>
    );
}

export default AsideContacts;