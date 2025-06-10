import React from 'react'
import { Link } from 'react-router-dom';

const NavList = () => {
    return (
            <>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Tiles</Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Marbles</Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Doors</Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Marine Board</Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Woods</Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Reinforcements</Link>
            </>
    )
}

export default NavList
