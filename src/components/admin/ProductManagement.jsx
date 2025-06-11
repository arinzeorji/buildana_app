import React from 'react'
import {FaEdit, FaRegTrashAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import PageTitle from './Common/PageTitle';

const ProductManagement = () => {

    const products = [
        {
            _id: 1,
            name: "Jeans",
            price: 120,
            type: "Clothings"

        },
        {
            _id: 2,
            name: "Benz",
            price: 120000,
            type: "Cars"

        },
        {
            _id: 3,
            name: "Shoe",
            price: 120,
            type: "Foot Wears"

        },
        {
            _id: 4,
            name: "Skirt",
            price: 2000,
            type: "Clothings"

        }
    ]

    const handleDelete = (id) =>{
        if(window.confirm("Are you sure you want to delete this product? ")){
            console.log("Product deleted");
        }
    }
    return (
        <div className="max-w-7xl mx-auto p-6">
            <PageTitle text={"Product Management"}/>
            
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                        <tr>
                            <th className="px-3 py-2">ID</th>
                            <th className="px-3 py-2">Name</th>
                            <th className="px-3 py-2">Category</th>
                            <th className="px-3 py-2">Price</th>
                            <th className="px-3 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 ? (
                                products.map((product) => (
                                    <tr 
                                    className="border-b hover:bg-gray-50 cursor-pointer"
                                    key={product._id}>
                                        <td className="p-4">{product._id}</td>
                                        <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                                            {product.name}
                                        </td>
                                        <td className="p-4">{product.price}</td>
                                        <td className="p-4">{product.type}</td>
                                        <td className="p-4 flex gap-6">
                                            <Link 
                                                className="text-yellow-500 hover:text-yellow-700"
                                                to={`/admin/products/${product._id}`}><FaEdit className="w-5 h-5" /></Link>
                                            <button 
                                                className="text-red-500 hover:text-red-600" onClick={() => handleDelete(product._id)}>
                                                <FaRegTrashAlt className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                   

                                ))
                            ) : (
                                <tr>
                                   <td className=" text-xl p-4 text-center" colSpan={4}> No Products are Available</td> 
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductManagement
