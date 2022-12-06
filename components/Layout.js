import React from 'react';
import Navigation from './Navigation.js'
import Footer from './Footer.js'
import { useRouter } from 'next/router.js';

const Layout = ({children}) => {
    const router = useRouter()
    const match = router.pathname.includes('/user/login') || router.pathname.includes('/user/signup') || router.pathname.includes('/user/reset')

    if(match){
        return <div>
            {children}
        </div>
    }
    return (
        <div>
            <Navigation/>
            <div className='h-36 md:h-48'></div>
                {children}
            <Footer/>
        </div>
    );
};

export default Layout;