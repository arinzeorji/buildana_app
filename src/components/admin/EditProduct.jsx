import React, { useState } from 'react'
import image1 from '../../assets/10.jpg';
import image2 from '../../assets/5.jpg';
import PageTitle from './Common/PageTitle';

const EditProduct = () => {

    const [productData, setProductData] = useState({
        name: "",
        description: "",
        price: "",
        countInStock: "",
        type: "",
        category: "",
        brand: "",
        size: [],
        color: [],
        collections: "",
        material: "",
        gender: "",
        useCase: "",
        images: [
            {
               url: image1,
               altText: "Product image"
            }, 
            {
             url: image2,
             altText: "Product image"
            }
    ],

    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProductData({
            ...productData,
            [name]: value
        })
    }

    const handleImageUpload = async (e) =>{
        const file = e.target.files[0];
        console.log(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(productData)

    }
    return (
        <div className="min-w-4xl mx-auto p-6 shadow-md rounded-md">
            <PageTitle text={"Edit Product"} />

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="block font-semibold mb-2">
                    Product Name
                    </label>

                    {/* product name */}
                    <input 
                        type="text"
                        name="name"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                        value={productData.name}
                        onChange={handleChange}

                    />
                </div>
                    {/* product description */}
                    <div className="mb-3">
                        <label className="block font-semibold mb-2">
                        Product Description
                        </label>
                        <textarea 
                            name="description" 
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                            value={productData.description} 
                            onChange={handleChange}
                            rows={4}>                            
                        </textarea>                    
                </div>
                
                <div className="mb-3">
                    <label className="block font-semibold mb-2">
                    Product Price
                    </label>

                    {/* product price */}
                    <input 
                        type="number"
                        name="price"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                        value={productData.price}
                        onChange={handleChange}

                    />
                </div>

                
                    {/* product available stock */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">
                        Available Stock
                    </label>
                    <input 
                        type="number"
                        name="countInStock"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                        value={productData.countInStock}
                        onChange={handleChange}
                    />
                </div>

                 {/* product Type */}
                 <div className="mb-6">
                    <label className="block font-semibold mb-2">
                        Product Code Number
                    </label>
                    <input 
                        type="text"
                        name="type"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                        value={productData.type}
                        onChange={handleChange}
                    />
                </div>

                 {/* product Sizes */}
                 <div className="mb-6">
                    <label className="block font-semibold mb-2">
                        Product Sizes [Separate With Comma]
                    </label>
                    <input 
                        type="text"
                        name="size"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required

                        // sample size input - S, M, L, Xl XXL
                        value={productData.size.join(", ")}
                        onChange={
                            (e) =>setProductData({
                                ...productData,
                                size: e.target.value.split(",").map((size) => size.trim())
                            })
                        }
                    />
                </div>

                {/* product colors */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">
                        Product Colors [Separate With Comma]
                    </label>
                    <input 
                        type="text"
                        name="color"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required

                        // sample size input - S, M, L, Xl XXL
                        value={productData.color.join(", ")}
                        onChange={
                            (e) =>setProductData({
                                ...productData,
                                color: e.target.value.split(",").map((color) => color.trim())
                            })
                        }
                    />
                </div>
                    
                    {/* image upload */}
                    <div className="mb-4">
                        <label htmlFor="image" className="block font-semibold mb-2">Upload Image</label>
                        
                        <input type="file"  onChange={handleImageUpload} />
                        <div className="flex gap-4 mt-4">
                            {productData.images.map((image, index) => (
                                <div key={index}>
                                    <img src={image.url} alt={image.altText || "Product Image"}
                                        className="w-30 h-30 object-cover rounded shadow-md"
                                    />
                                 </div>
                            ))}
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors">
                            Update Product
                    </button>




            </form>
        </div>
    )
}

export default EditProduct
