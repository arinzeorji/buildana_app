import React from 'react'
import {HiArrowPathRoundedSquare, HiShoppingBag, HiOutlineCreditCard} from 'react-icons/hi2'

const Features = () => {
    return (
        <section className="py-16 px-4 bg-white">     
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                <div className="flex flex-col text-center">
                    <div className="p-4 rounded-full mb-4 mx-auto">
                        <HiShoppingBag className="text-3xl"/>
                    </div>
                        <h2 className=" text-2xl tracking-tighter mb-2">Free International Shipping</h2>
                        <p className="text-sm text-gray-600 tracking-tighter">On all orders above $100</p>
                </div>
                <div className="flex flex-col text-center">
                    <div className="p-4 rounded-full mb-4 mx-auto">
                        <HiArrowPathRoundedSquare className="text-3xl"/>
                    </div>
                        <h2 className="text-2xl tracking-tighter mb-2">
                            30 Days Refund
                        </h2>
                        <p className="text-sm text-gray-600 tracking-tighter">
                           Full Money Back Guarantee
                        </p>
                </div>
                <div className="flex flex-col text-center">
                    <div className="p-4 rounded-full mb-4 mx-auto ">
                        <HiOutlineCreditCard className="text-3xl"/>
                    </div>
                        <h2 className=" text-2xl tracking-tighter mb-2">Secured Checkout</h2>
                        <p className="text-sm text-gray-600 tracking-tighter">
                        100% security secured checkout process</p>
                </div>
                
            </div>
        </section>
    )
}

export default Features
