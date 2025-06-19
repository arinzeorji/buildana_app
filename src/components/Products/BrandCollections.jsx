import React from 'react'
import laptopImg from '../../assets/8.jpg';
import phoneImg from '../../assets/10.jpg';
import { Link } from 'react-router';

const BrandCollections = () => {
    return (
        <section className="py-16 px-4 lg:px-0">
            <div className="container mx-auto flex flex-col md:flex-row gap-12 mb-10">
                {/* laptop collection categories */}
                <div className="relative flex-1">
                     <img src={laptopImg} 
                     alt="category image"
                     className="w-full h-[400px] object-cover"
                     />
                     {/* <div className="absolute bottom-8 right-10 bg-gray-100 p-4"> */}
                     <div className="absolute bottom-0 left-0 right-0 bg-gray-900 w-[90%] hover:w-[100%] mx-auto text-white p-2 rounded-b-lg transition-all duration-300">
                        <h2 className="text-2xl font-bold text-white mb-3">
                            Laptops Collection
                        </h2>
                        <Link to="/collections/all?brand=laptop"
                            className="text-white underline"
                        >
                        Shop Now
                        </Link>
                     </div>
                </div>
                {/* phone collection categories */}
                <div className="relative flex-1">
                     <img src={phoneImg} 
                     alt="category image"
                     className="w-full h-[400px] object-cover"
                     />
                     <div className="absolute bottom-0 left-0 right-0 bg-gray-900 w-[90%] hover:w-[100%] mx-auto text-white p-2 rounded-b-lg transition-all duration-300">
                        <h2 className="text-2xl font-bold text-white mb-3">
                            Phones Collection
                        </h2>
                        <Link to="/collections/all?brand=laptop"
                            className="text-white underline"
                        >
                        Shop Now
                        </Link>
                     </div>
                </div>
            </div>

             <div className="container mx-auto flex flex-col md:flex-row gap-12 mt-10">
                {/* laptop collection categories */}
                <div className="relative flex-1">
                     <img src={laptopImg} 
                     alt="category image"
                     className="w-full h-[400px] object-cover"
                     />
                     {/* <div className="absolute bottom-8 right-10 bg-gray-100 p-4"> */}
                     <div className="absolute bottom-0 left-0 right-0 bg-gray-900 w-[90%] hover:w-[100%] mx-auto text-white p-2 rounded-b-lg transition-all duration-300">
                        <h2 className="text-2xl font-bold text-white mb-3">
                            Laptops Collection
                        </h2>
                        <Link to="/collections/all?brand=laptop"
                            className="text-white underline"
                        >
                        Shop Now
                        </Link>
                     </div>
                </div>
                {/* phone collection categories */}
                <div className="relative flex-1">
                     <img src={phoneImg} 
                     alt="category image"
                     className="w-full h-[400px] object-cover"
                     />
                     <div className="absolute bottom-0 left-0 right-0 bg-gray-900 w-[90%] hover:w-[100%] mx-auto text-white p-2 rounded-b-lg transition-all duration-300">
                        <h2 className="text-2xl font-bold text-white mb-3">
                            Phones Collection
                        </h2>
                        <Link to="/collections/all?brand=laptop"
                            className="text-white underline"
                        >
                        Shop Now
                        </Link>
                     </div>
                </div>
            </div>

        </section>
    )
}

export default BrandCollections
