import React from 'react';
import Navigation from './Navigation.js'
import Footer from './Footer.js'

const Layout = ({children}) => {
    return (
        <div>
            <Navigation/>
                {children}
            <Footer/>
        </div>
    );
};

export default Layout;