import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router';

const AdminLayout = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const toggleSidebar =  () => {
        setIsSideBarOpen(!isSideBarOpen);
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Mobile toggler icon */}
            <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
                    <button onClick={toggleSidebar}>
                    <FaBars size={24}/>
                </button>
                    <h1 className="ml-4 text-xl font-medium">
                        Admin Dashboard
                    </h1>
            </div>

            {/* overlay of mobile */}
            {
                isSideBarOpen && (
                    <div 
                        onClick={toggleSidebar}
                        className="fixed inset-0 z-10 bg-gray-300 md:hidden">
                    
                    </div>
                )
            }

            {/* admin sidebar */}
            <div className={`bg-gray-900 w-64 min-h-screen text-white absolute md relative transform 
                            ${isSideBarOpen ? 
                            "translate-x-0" : 
                            "-translate-x-full"}
                            transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}>
            
                    <AdminSidebar />
            </div>

            {/* Main Admin Content */}
            <div className="flex-grow p-6 overflow-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout
