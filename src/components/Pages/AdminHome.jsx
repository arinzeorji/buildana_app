import React from 'react'
import { FaUser, FaBoxOpen, FaClipboardList, FaShoppingBasket, FaBell, FaMoneyBill, FaMoneyCheck } from 'react-icons/fa';
import { Link } from 'react-router';

const AdminHome = () => {
    const orders = [
        {
            _id: 122334,
            user:{name: "John Doe"},
            totalPrice: 20000,
            status: true

        }
    ]
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 shadow-lg rounded-lg flex items-center gap-4">
                    <FaMoneyCheck className="w-20 h-20 text-center text-gray-700"/>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Revenue</h2>
                        <p className="text-xl">$20000</p>
                    </div>
                </div>
                <div className="p-6 shadow-lg rounded-lg flex items-center gap-4">
                    <FaClipboardList className="w-20 h-20 text-center text-yellow-700"/>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
                        <p className="text-xl">200</p>
                        <Link to="/admin/order" className="text-blue-500 hover:underline">Manage Orders</Link>
                    </div>
                </div>
                <div className="p-6 shadow-lg rounded-lg flex items-center gap-4">
                    <FaBoxOpen className="w-20 h-20 text-center text-green-700"/>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Products</h2>
                        <p className="text-xl">540</p>
                        <Link to="/admin/order" className="text-blue-500 hover:underline">Manage Products</Link>
                    </div>
                </div>
                <div className="p-6 shadow-lg rounded-lg flex items-center gap-4">
                    <FaUser className="w-20 h-20 text-center text-red-700"/>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Users</h2>
                        <p className="text-xl">21</p>
                        <Link to="/admin/order" className="text-blue-500 hover:underline">Manage Users</Link>
                    </div>
                </div>
                </div>
                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-gray-500">
                            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                                <tr>
                                    <th className="py-2 px-4">Order ID</th>
                                    <th className="py-2 px-4">User</th>
                                    <th className="py-2 px-4">Total Price</th>
                                    <th className="py-2 px-4">Staus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.length > 0 ? (
                                    orders.map((order) => (
                                        <tr key={order._id} className="border-b hover:bg-gray-50 cursor-pointer">
                                            <td className="p-3">{order._id}</td>
                                            <td className="p-3">{order.user.name}</td>
                                            <td className="p-3">{order.totalPrice}</td>
                                            <td className="p-3">
                                                <button className={`px-3 py-2 ${order.status ? "text-green-400" : "text-yellow-400"}`}>{order.status ? "Delivered" : "Pending"}</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td className="p-4 text-center text-gray-500" colSpan={4}>No Orders Found</td>
                                    </tr>

                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default AdminHome
