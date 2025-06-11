import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight} from 'react-icons/hi2'
import Search from './Search';
import CartDrawer from '../Layouts/CartDrawer';
import { IoMdClose } from 'react-icons/io';
import NavList from './NavList';

const Navbar = () => {

    const [cartDrawerOpen, setCartDrawerOpen] = useState(false)
    const [navBarDrawerOpen, setNavBarDrawerOpen] = useState(false);

    const toggleNavBarDrawer = () => {
        setNavBarDrawerOpen(!navBarDrawerOpen);
    }

    const togglerCartDrawer = () => {
        setCartDrawerOpen(!cartDrawerOpen);
    }
    return (
        <>
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            {/* nav title */}
            <div>
                <Link to="/" className="text-2xl font-medium">Buildana</Link>
            </div>

            {/* nav menu */}
            <div className="hidden md:flex space-x-6">
                <NavList />
            </div>

            {/* right icons */}
            <div className="flex items-center space-x-4">
               <Link to="/admin" className="block bg-black text-white rounded text-sm p-2">Admin</Link>
                <Link to="/profile" className="hover:text-black">
                    <HiOutlineUser className=" h-6 w-6 text-gray-700" />
                </Link>
                <button onClick={togglerCartDrawer} className="relative hover:text-black">
                    <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
                    <span className="absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0 5">
                        4
                    </span>
                </button>
                {/* Search Icon */}
                <div className="overflow-hidden mx-3">
                    <Search />                
                </div>
                

                {/* Mobile Toggler Icon */}
                <button onClick={setNavBarDrawerOpen} className="md:hidden">
                    <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
                </button>
            </div>
        </nav>
        <CartDrawer cartDrawerOpen={cartDrawerOpen} togglerCartDrawer={togglerCartDrawer} />


        {/* mobile navigation functionality */}

        <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg 
                        transform transition-transform duration-300 z-50
                        ${navBarDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="flex justify-end p-4">
            <button onClick={toggleNavBarDrawer}>
                <IoMdClose className="h-6 w-6 text-gray-600" />
            </button>
            </div>

            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">MENU</h2>
                <nav className="flex flex-col space-y-4">
                    <NavList />
                </nav>
            </div>
        </div>
        </>
    )
}

export default Navbar
