import React, { ReactFragment } from 'react';
import Header from './Body/Header/Header';
import Footer from './Body/Footer/Footer';
interface ILayout {
    children: React.ReactNode
}
function Layout({children}: ILayout) {
    return (
        <div className='page'>
            <Header />
            <main className='main'>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;