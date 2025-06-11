import React from 'react'
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Outlet } from 'react-router-dom';

const UserLayouts = () => {
    return (
       <>
      
       <Header />
        <Outlet />
       <Footer />
       </>
    )
}

export default UserLayouts
