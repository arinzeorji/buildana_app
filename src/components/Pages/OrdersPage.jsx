import React, { useState, useEffect } from 'react'
import order1 from '../../assets/7.jpg';
import order2 from '../../assets/8.jpg';
import order3 from '../../assets/9.jpg';
import order4 from '../../assets/11.jpg';

const OrdersPage = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        //fetch orders
        setTimeout(() =>{

            const mockOrder = [
                {
                    _id: '12345',
                    createdAt: new Date(),
                    address: {city: "Zuba", lga: "Gwagwalada"},
                    isPaid:true,
                    totalPrice: 2900999,
                    orderItems: [
                        {
                            name: "Product 1",
                            image: order1
                        }
                    ]
                },
                {
                    _id: '002233',
                    createdAt: new Date(),
                    address: {city: "Maitama", lga: "Central Area"},
                    isPaid:true,
                    totalPrice: 56600,
                    orderItems: [
                        {
                            name: "Product 2",
                            image: order2
                        }
                    ]
                },
                {
                    _id: '6789',
                    createdAt: new Date(),
                    address: {city: "Dei Dei", lga: "Abuja Municipal"},
                    isPaid:false,
                    totalPrice: 99000,
                    orderItems: [
                        {
                            name: "Product 3",
                            image: order3
                        },
                        {
                            name: "Product 4",
                            image: order4
                        }
                    ]
                }
            ]
            setOrders(mockOrder)
        }, 1000)
    }, [])
    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">My Order</h2>
            <div className="relative shadow-md sm:rounded-lg overflow-hidden">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                        <tr>
                            <th className="py-2 px-4 sm:py-3">Image</th>
                            <th className="py-2 px-4 sm:py-3">Order ID</th>
                            <th className="py-2 px-4 sm:py-3">Date</th>
                            <th className="py-2 px-4 sm:py-3">Address</th>
                            <th className="py-2 px-4 sm:py-3">Items</th>
                            <th className="py-2 px-4 sm:py-3">Price</th>
                            <th className="py-2 px-4 sm:py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order._id}
                                        className="border-b border-t hover:bg-gray-100 cursor-pointer"
                                    >
                                        <td className="py-2 px-2 sm:py-4 sm:px-4">
                                        <img src={order.orderItems[0].image} 
                                        alt={order.orderItems[0].name} className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"/>
                                        </td>
                                        <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                                            #{order._id}
                                        </td>
                                        <td className="py-2 px-2 sm:py-4 sm:px-4">
                                           {new Date(order.createdAt).toLocaleDateString()} {" "}
                                           {new Date(order.createdAt).toLocaleTimeString()}
                                        </td>
                                        <td className="py-2 px-2 sm:py-4 sm:px-4">
                                            {order.address ? `${order.address.city}, ${order.address.lga}` : "N/A"}
                                        </td>
                                        <td className="py-2 px-2 sm:py-4 sm:px-4">
                                            {order.orderItems.length > 1 ? `${order.orderItems.length} items` : `${order.orderItems.length} item`}
                                        </td> 
                                        <td className="py-2 px-2 sm:py-4 sm:px-4">
                                            #{order.totalPrice}
                                        </td>
                                        <td className="py-2 px-2 sm:py-4 sm:px-4">
                                           
                                           <span className={`px-2 py-1 rounded-lg text-xs sm:text-sm font-medium ${order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                           {
                                                order.isPaid? "Paid" : "Pending"
                                            
                                            }
                                           </span>
                                           
                                        </td>
                                    </tr>
                                ))
                            ) : (<tr>
                                <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                                    You have no Orders
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrdersPage
