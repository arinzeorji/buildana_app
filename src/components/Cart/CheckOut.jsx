import React, {useState} from 'react'
import img1 from '../../assets/4.jpg'
import img2 from '../../assets/9.jpg'
import { useNavigate } from 'react-router';
import PayPalButton from './PayPalButton';

const cart = {
    // cart.products[0].name = "Mac Book Pro"
    products: [
        {
            name: "Mac Book Pro",
            size: "M",
            color: "Black",
            price: 120000,
            image: img1
        },
        {
            name: "Wobalisa",
            size: "XL",
            color: "Red",
            price: 340000,
            image: img2
        }
    ],
    totalPrice: 460000
}
const CheckOut = () => {
    const navigate = useNavigate();
    const [checkoutId, setCheckOutId] = useState(null);
    const [shippingInfo, setShippingInfo] = useState({
        firstname: "",
        lastname: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: ""
    })

    const handleCheckOutRequest = (e) =>{
        e.preventDefault();
        setCheckOutId(12345);
    }

    const handlePaymentSuccess = (details) => {
        console.log("Payment Successful, ", details);
        navigate("/order-confirmation")
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-5 px-6">
            {/* left side of checkout page */}
            <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl uppercase mb-6">Checkout Details</h2>
            <form onSubmit={handleCheckOutRequest}>
                <h3 className="text-lg mb-4">Delivery Details</h3>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-grey-700">Email</label>
                    <input 
                        disabled
                        type="email" 
                        name="email" 
                        className="w-full p-2 border border-gray-400 rounded"/>
                </div>
                {/* <h3 className="text-lg mb-4">Delivery Details</h3> */}
                <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                        <label htmlFor="firstname" className="block text-gray-700">Firstname</label>
                        <input 
                            value={shippingInfo.firstname}
                            onChange={(e) => setShippingInfo({...shippingInfo, firstname: e.target.value})}
                            required
                            type="text" 
                            name="firstname" 
                            className="w-full p-2 border border-gray-400 rounded"/>
                    </div>
                    <div>
                        <label htmlFor="lastname" className="block text-gray-700">Lastname</label>
                        <input 
                            value={shippingInfo.lastname}
                            onChange={(e) => setShippingInfo({...shippingInfo, lastname: e.target.value})}
                            required
                            type="text" 
                            name="firstname" 
                            className="w-full p-2 border border-gray-400 rounded"/>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700">Address</label>
                    <input 
                        type="text" 
                        name="address" 
                        value={shippingInfo.address}
                        onChange={
                            (e) => setShippingInfo({...shippingInfo, address:e.target.value})
                        }
                        className="w-full p-2 border border-gray-400 rounded"
                        required                    
                    />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                        <label htmlFor="city" className="block text-gray-700">City</label>
                        <input 
                            value={shippingInfo.city}
                            onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                            required
                            type="text" 
                            name="city" 
                            className="w-full p-2 border border-gray-400 rounded"/>
                    </div>
                    <div>
                        <label htmlFor="postalCode" className="block text-gray-700">Postal Code</label>
                        <input 
                            value={shippingInfo.postalCode}
                            onChange={(e) => setShippingInfo({...shippingInfo, postalCode: e.target.value})}
                            required
                            type="text" 
                            name="postalCode" 
                            className="w-full p-2 border border-gray-400 rounded"/>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="country" className="block text-gray-700">Country</label>
                    <input 
                        type="text" 
                        name="country" 
                        value={shippingInfo.country}
                        onChange={
                            (e) => setShippingInfo({...shippingInfo, country:e.target.value})
                        }
                        className="w-full p-2 border border-gray-400 rounded"
                        required                    
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        value={shippingInfo.phone}
                        onChange={
                            (e) => setShippingInfo({...shippingInfo, phone:e.target.value})
                        }
                        className="w-full p-2 border border-gray-400 rounded"
                        required                    
                    />
                </div>
                <div className="mt-6">
                        {
                            !checkoutId ? (
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white py-3 rounded"
                                >
                                    Make Payment
                                </button>
                            ) : (

                                <div>
                                    <h3 className="text-lg mb-4">
                                        Pay with Paypal
                                    </h3> 
                                    <PayPalButton
                                        amount={1000}
                                        onSuccess={handlePaymentSuccess}
                                        onError={(err) => alert("Payment Failed. Please Try Again")}
                                    />
                                </div>
                            )                            
                        }
                </div>
            </form>
            </div>

            {/* right section of the checkout with order information */}
            <div className="bg-gray-50 py-10 px-6 rounded-lg">
                <h3 className="text-lg mb-4">Order Summary</h3>
                <div className="border-t py-4 mb-4">
                        {
                            cart.products.map((product, index) =>(
                                <div 
                                    key={index} 
                                    className="flex items-center justify-between py-2 border-b">
                                    <div className="flex items-start">
                                        <img 
                                            src={product.image} 
                                            alt={product.name} 
                                            className="w-20 h-24 object-cover mr-4"/>
                                    </div>
                                    <div>
                                        <h3 className="text-md">{product.name}</h3>
                                        <p className="text-gray-500">Size: {product.size}</p>
                                        <p className="text-gray-500">Color: {product.color}</p>
                                    </div>
                                    <p className="text-xl">{product.price.toLocaleString()}</p>
                                </div>
                            ))
                        }
                </div>

                <div className="flex justify-between items-center text-lg mb-4">
                    <p>Subtotal</p>
                    <p>${cart.totalPrice.toLocaleString()}</p>
                </div>
                <div className="flex justify-between items-center text-lg">
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between pt-4 items-center text-lg mt-4 border-t">
                    <p>TOTAL</p>
                    <p>${cart.totalPrice.toLocaleString()}</p>
                </div>



















                    
            </div>
        </div>
    )
}

export default CheckOut
