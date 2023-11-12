import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/shared/Footer/Footer';
import Navbar from '../components/shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation().pathname.includes('login')
    
    return (
        <div>
            {location || <Navbar></Navbar>}
            <Outlet></Outlet>
            {location || <Footer></Footer>}
        </div>
    );
};

export default Main;