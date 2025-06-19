import React, { useState } from 'react'
import PageTitle from './Common/PageTitle';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';

const OrderManagement = () => {

    const [status, setStatus] = useState(false)
    const orders = [
        {
            _id:12334,
            user:{
                name:"Harry Pat"
            },
            price: 20000,
            status: status
        }
    ]

    const handleStatusChange = (id) => {
        console.log(id);

        if(!status){
            setStatus(true);
        }
    }

    const handleDelete = (id) =>{
        if(window.confirm("Are you sure to delete this order? ")){
            console.log(id);
        }
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            <PageTitle text={" Order Management "}/>

            <div className="overflow-x-auto shadow-md sm:rounded-lg">
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
                                    <td className="px-4 py-4">#{order.price}</td>
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
    )
}

export default OrderManagement
