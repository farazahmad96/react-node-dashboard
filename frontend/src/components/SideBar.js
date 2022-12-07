import React from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/@fortawesome/react-fontawesome/index';
import logo from '../images/logo.png';
import Button from './Button';
// ../node_modules/font-awesome/css/font-awesome.min.css 
const SideBar = () => {
    function logout() {
        alert('logout')
    }
    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg_color_red shadow">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold"> <img src={logo} alt="Logo" /> </h2>
                    </div>
                    <div className="flex-1 ul_div">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm py-4 px-4">

                                <Link to="/dashboard" className="flex items-center p-2 space-x-3 rounded-md text-black"> <i className="fa fa-home"></i> <span>Dashboard</span></Link>
                            </li>
                            <li className="rounded-sm py-4 px-4">
                                <Link to="/notifications" className="flex items-center p-2 space-x-3 rounded-md text-black"> <i className="fa fa-bell"></i> <span>Notifications</span></Link>
                            </li>
                            <li className="rounded-sm py-4 px-4">
                                <Link to="/company" className="flex items-center p-2 space-x-3 rounded-md text-black"> <i className="fa fa-heart"></i> <span>Company</span></Link>
                            </li>
                            <li className="rounded-sm py-4 px-4">
                                <Link to="" className="flex items-center p-2 space-x-3 rounded-md text-black"> <i className="fa fa-gear"></i> <span>Super Settings</span></Link>
                            </li>
                            <li className="rounded-sm py-4 px-4">
                                <Link to="" className="flex items-center p-2 space-x-3 rounded-md text-black"> <i className="fa fa-right-from-bracket"></i> <span>Logout</span></Link>
                            </li>
                            <li>
                                <Button click={logout} title={'Logout'} />
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;