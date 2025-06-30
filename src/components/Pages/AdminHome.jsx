import React, {useState} from 'react'
import { FaUser, FaBoxOpen, FaClipboardList, FaEdit, FaRegTrashAlt, FaMoneyCheck } from 'react-icons/fa';
import { Link } from 'react-router';

const AdminHome = () => {

    const dispatch = useDispatch();
    const {products, loading: productsLoading, error: productsError} = useSelector((state)=>{state.adminProducts})
    const {orders, totalOrders, totalSales, loading: ordersLoading, error: ordersError} = useSelector((state)=>{state.adminOrders})
    
    useEffect(()=>{
        dispatch(fetchAllAdminProducts());
        dispatch(fetchAllOrders());
    },[dispatch])

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            
            {
                productsLoading || ordersLoading
                ? (<p>Loading Please wait</p>) : productsError
                ? (<p className="text-red-500">Error Fetching Products {productsError}</p>) : ordersError
                ? (<p className="text-red-500">Error Fetching Orders {ordersError}</p>) 
                : (
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* produxts card */}
                <Link to="/admin/products"
                >
                <div className="p-6 shadow-lg rounded-lg flex items-center gap-4">
                    <FaBoxOpen className="w-20 h-20 text-center text-green-700"/>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Products</h2>
                        <p className="text-xl">{products.length}</p>
                    </div>
                </div>
                </Link>

                {/* Artisans */}
                <Link to="/admin/artisans"
                >
                    <div className="p-6 shadow-lg rounded-lg flex items-center gap-4">
                        <FaMoneyCheck className="w-20 h-20 text-center text-gray-700"/>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Total Sales</h2>
                            <p className="text-xl">#{totalSales.toFixed(2)}</p>
                        </div>
                    </div>
                </Link>

                {/* Orders */}
                <Link to="/admin/orders"
                >
                <div className="p-6 shadow-lg rounded-lg flex items-center gap-4">
                    <FaClipboardList className="w-20 h-20 text-center text-yellow-700"/>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
                        <p className="text-xl">{totalOrders}</p>
                    </div>
                </div>
                </Link>
                
                {/* Users */}
                <Link to="/admin/users"
                >
                <div className="p-6 shadow-lg rounded-lg flex items-center gap-4">
                    <FaUser className="w-20 h-20 text-center text-red-700"/>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Users</h2>
                        <p className="text-xl">21</p>
                        <Link to="/admin/order" className="text-blue-500 hover:underline">Manage Users</Link>
                    </div>
                </div>
                </Link>
                </div>

                )}
                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
                    <div className="overflow-x-auto">
                        
                    <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                        <tr>
                            <th className="py-3 px-4">Order ID</th>
                            <th className="py-3 px-4">Customer</th>
                            <th className="py-3 px-4">Total Price</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) =>(
                                <tr key={order._id}
                                    className="border-b hover:bg-gray-50 cursor-pointer"
                                >
                                    <td className="py-4 px-4 font-semibold text-gray-900 whitespace-nowrap">
                                        #{order._id}
                                    </td>
                                    <td className="px-4 py-4">{order.user.name}</td>
                                    <td className="px-4 py-4">#{order.price.toFixed(2)}</td>
                                    <td className={`px-4 py-4 ${order.status ? "text-green-500" : "text-yellow-500"}`}>{order.status ? "Delivered":"Processing"}</td>
                                    <td className="p-4 flex gap-6">

                                        {order.status ? (
                                            "" 
                                        ) : (
                                            <button 
                                                className="text-yellow-500 hover:text-yellow-700"
                                                onClick={() => {handleStatusChange(order._id)}}
                                                >
                                                <FaEdit className="w-5 h-5" /> 
                                            </button>
                                        )}
                                        
                                        <button 
                                            className="text-red-500 hover:text-red-600" onClick={() => handleDelete(order._id)}>
                                            <FaRegTrashAlt className="w-5 h-5" />
                                        </button>
                                        
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="py-4 px-4 text-center font-semibold" colSpan={4}>No Orders Found</td>
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
