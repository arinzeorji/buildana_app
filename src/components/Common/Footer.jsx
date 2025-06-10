import React from 'react'
import {Link} from 'react-router-dom'
import {TbBrandMeta} from 'react-icons/tb'
import {FiPhoneCall} from 'react-icons/fi'


const Footer = () => {
    return (
        <footer className="border-t py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
                <div>
                    <h3 className="text-lg text-gray-800 mb-4 font-bold">Newsletter</h3>
                    <p className="text-gray-500 mb-4">
                        You will become the first to hear about new products, exclusive events and discount offers.
                    </p>
                    <p className="font-medium text-sm text-gray-600">SignUp and get 10% off your first order</p>

                    <form className="flex mt-3">
                        <input 
                            type="email" 
                            name="" id=""                                 
                            className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" />
                            
                        <button
                            type="submit"
                            className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
                        >
                            Subscribe
                        </button>                                 
                    </form>
                </div>

                {/* footer shop links */}
                <div>
                    <h3 className="text-lg text-gray-800 mb-4 font-bold">Products</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex flex-col">
                            <Link to="#" className="hover:text-gray-500 transition-colors">
                                Laptops
                            </Link> <Link to="#" className="hover:text-gray-500 transition-colors">
                                Cars
                            </Link> <Link to="#" className="hover:text-gray-500 transition-colors">
                                Phones
                            </Link> <Link to="#" className="hover:text-gray-500 transition-colors">
                                Tablet
                            </Link> <Link to="#" className="hover:text-gray-500 transition-colors">
                                Ipad
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* footer page links */}
                <div>
                    <h3 className="text-lg text-gray-800 mb-4 font-bold">Links</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex flex-col">
                            <Link to="#" className="hover:text-gray-500 transition-colors">
                                Contact Us
                            </Link> <Link to="#" className="hover:text-gray-500 transition-colors">
                                About Us
                            </Link> <Link to="#" className="hover:text-gray-500 transition-colors">
                                Our Programs
                            </Link> <Link to="#" className="hover:text-gray-500 transition-colors">
                                FAQs
                            </Link> <Link to="#" className="hover:text-gray-500 transition-colors">
                                Awards
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg text-gray-800 mb-4 font-bold">Links</h3>
                    <div className="flex items-center space-x-4 mb-6">
                    <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferer"
                            className="hover:text-gray-300"
                        >
                            <TbBrandMeta className="w-6 h-6" />
                        </a><a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferer"
                            className="hover:text-gray-300"
                        >
                            <TbBrandMeta className="w-6 h-6" />
                        </a><a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferer"
                            className="hover:text-gray-300"
                        >
                            <TbBrandMeta className="w-6 h-6" />
                        </a>
                    </div>
                    <h4 className="text-lg text-gray-500 mb-4 font-bold">Newsletter</h4>
                    <p>
                        <FiPhoneCall className="inline-block mr-2" />
                        +234 0987890088
                    </p>                  

                </div>
            </div>

            <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
                <p className="text-gray-500 text-sm tracking-tighter text-center">
                    &copy; 2025. Buildana Limited All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer
