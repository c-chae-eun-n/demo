import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Header />
            <Outlet />          
            <Footer />
        </>
    );
};

// <Outlet />          // 등록된 자식이 있으면 여기에 넣어줘

export default Root;