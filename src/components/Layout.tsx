import React, { ReactFragment } from 'react';
import Header from './Body/Header/Header';
import Footer from './Body/Footer/Footer';
import Popup from './Body/Popup/Popup';
import { ModalSate } from '@/context/context';
interface ILayout {
    children: React.ReactNode
}
function Layout({children}: ILayout) {
    return (
        <ModalSate>
            <div className='page'>
                <Header />
                <main className='main'>
                    {children}
                </main>
                <Footer />
                <Popup />
            </div>
        </ModalSate>
    );
}

export default Layout;