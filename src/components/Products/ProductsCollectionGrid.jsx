import React from 'react'
import {Link} from'react-router-dom';

const ProductsCollectionGrid = ({products,loading, error}) => {

    if(loading){
        return <p>Loading ...</p>
    } 
    
    if(error){
        return <p>Error {error}</p>
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {
                products.map((product, index) => (
                    <Link to={`/product/${product._id}`}
                          key={index}
                          className="block m-2"
                        >
                        <div className="bg-white p-4 rounded-lg">
                            <div className="w-full h-96 mb-4">
                                <img src={product.images} alt={product.name} 
                                     className="w-full h-full object-cover rounded-lg"/>
                            </div>
                            <h3 className="text-sm mb-2">{product.name}</h3>
                            <h3 className="text-sm text-gray-500 font-medium tracking-tighter">#{product.price}</h3>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}


export default ProductsCollectionGrid
