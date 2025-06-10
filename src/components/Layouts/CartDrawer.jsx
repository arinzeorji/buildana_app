import React from 'react'
import { IoMdClose} from 'react-icons/io';
import CartContents from '../Cart/CartContents';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({cartDrawerOpen, togglerCartDrawer}) => {
    
    const navigate = useNavigate();
    const handleCheckout = () =>{
        navigate('/checkout')
    }

    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[25rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${cartDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
            
            {/* close button */}
            <div className="flex justify-end p-4">
                <button onClick={togglerCartDrawer}>
                    <IoMdClose className="text-gray-600 w-6 h-6" />
                </button>
            </div>

            {/* cart contents header */}
            <div className="flex-grow p-4 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">Your Cart Items</h2>

                {/* cart content details */}
                <CartContents />
            </div>

            {/* checkout button */}
            <div className="p-4 bg-white sticky bottom-0">
                <button
                    onClick={handleCheckout}
                    className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:text-gray-800 transition duration-300">Checkout</button>
                <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
                    Shipping, taxes and discount codes are calculated at checkout
                </p>
            </div>
        </div>
    )
}

export default CartDrawer
