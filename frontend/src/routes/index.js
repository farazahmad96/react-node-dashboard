

import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Routes, Route } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Notifications from '../pages/Notifications';
import Home from '../pages/Home';
const RoutesView = (props) => {
    console.log('props', props)
    return (
        <>
            <Header />
            <div className="flex">
                <SideBar />
                <div className='main_center_div'>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/notifications" element={<Notifications />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default RoutesView;