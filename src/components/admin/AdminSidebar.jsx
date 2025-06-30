import React from 'react'
import { FaUser, FaBoxOpen, FaClipboardList, FaStore, FaSignOutAlt } from 'react-icons/fa';
import {NavLink, Link, useNavigate} from 'react-router-dom';
import {logOut} from "../../redux/slice/authSlice";
import {clearCart} from "../../redux/slice/cartSlice";

const AdminSidebar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut());
        dispatch(clearCart());
        navigate("/")
    }
    return (
        <div className="p-6">
            <div className="mb-6">
                <Link to="/admin" className="text-2xl font-medium"> Buildana</Link>
            </div>

            <h2 className="text-xl font-medium text-center mb-6">
                Admin Dashboard
            </h2>
            <nav className="flex flex-col space-y-2">
                <NavLink 
                    className={({isActive}) => isActive ?
                    "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                    :"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}
                    to="/admin/users">
                         <FaUser />
                         <span>Users</span>
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ?
                    "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                    :"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}
                    to="/admin/products">
                         <FaBoxOpen />
                         <span>Products</span>
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ?
                    "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                    :"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}
                    to="/admin/orders">
                         <FaClipboardList />
                         <span>Orders</span>
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ?
                    "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                    :"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}
                    to="/">
                         <FaStore />
                         <span>Shop</span>
                </NavLink>

                <div className="mt-6">
                    <button 
                        className="w-full text-white bg-red-500 hover:bg-red-700 py-2 px-4 rounded flex items-center justify-center space-x-2"
                        onClick={handleLogOut}>
                            <FaSignOutAlt />
                            <span>Logout</span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default AdminSidebar
