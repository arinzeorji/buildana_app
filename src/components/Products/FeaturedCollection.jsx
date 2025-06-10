import React from 'react'
import meta from '../../assets/meta.jfif'
import {Link} from 'react-router-dom'


const FeaturedCollection = () => {
    return (
        <section className="px-4 py-16 lg:py-0">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
            {/* left content */}
                <div className="lg:w-1/2 p-8 text-center text-left">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Comfort and Style</h3>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Apparel made for everyday life
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor et esse officia assumenda reiciendis provident eius quibusdam accusantium harum vitae iure veniam modi asperiores non iusto veritatis impedit, cumque ex!</p>

                    <Link to="/collections/all"
                        className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
                    >
                    Shop Now
                    </Link>
                </div>
                {/* right content */}
                <div className="lg:w-1/2 sm:w-full sm:h-full">
                    <img src={meta} 
                         alt="" 
                         className="w-full h-full object-cover opacity-90 lg:rounded-tr-3xl lg:rounded-br-3xl"/>
                
                </div>
            </div>
        </section>
    )
}

export default FeaturedCollection
