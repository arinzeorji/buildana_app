import React from 'react'
import { Link } from 'react-router-dom';

const NavList = () => {
    return (
            <>
                <Link to="/collections/all?gender=Men" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Men</Link>
                <Link to="/collections/all?gender=Women" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Women</Link>
                <Link to="/collections/all?category=Top Wear" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Top Wear</Link>
                <Link to="/collections/all?category=Bottom Wear" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Bottom Wear</Link>
            </>
    )
}

export default NavList
