import React from 'react';
import Header from './Body/Header/Header';
interface ILayout {
    children: React.ReactNode
}
function Layout({children}: ILayout) {
    return (
        <div className='page'>
            <Header />
            {children}
        </div>
    );
}

export default Layout;