import React, { useContext } from 'react';
import styles from './Popup.module.scss';
import { ModalContext } from '@/context/context';
function Popup() {
    const {isOpenPopup, rootRef, values, errors, handleChange, hanldeSubmitForm, canSubmit} = useContext(ModalContext);
    return (
        <div className={isOpenPopup ? `${styles.popup} ${styles['popup_open']}` : `${styles.popup}`}>
            <div ref={rootRef}  className={styles['popup-container']}>
                <h3>Send your email for contact us</h3>
                <form className={styles['container-form']} onSubmit={hanldeSubmitForm} noValidate>
                <input type="text" name='name' value={values.name} onChange={(e) => handleChange(e)} placeholder='Your name' />
                <span>{errors.name}</span>
                <input type="email" name='email' value={values.email} onChange={(e) => handleChange(e)} placeholder='Email' />
                <span>{errors.email}</span>
                <input type="tel" name='tel' value={values.tel} minLength={2} maxLength={11} onChange={(e) => handleChange(e)} placeholder='Phone number' />
                <span>{errors.tel}</span>
                <button className={canSubmit ? `${styles['container-form__submit']} ${styles['container-form__submit_enabled']}` : `${styles['container-form__submit']} ${styles['container-form__submit_disabled']}` }type='submit' disabled={!canSubmit}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Popup;