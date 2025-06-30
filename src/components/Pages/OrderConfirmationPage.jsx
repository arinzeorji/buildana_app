import React, { useEffect } from 'react';

const OrderComfirmationPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {checkout} = useSelector((state) => state.checkout)

    //CLEAR CART AFTER CONFIRMATION OF ORDER
    useEffect(()=>{
        if (checkout && checkout._id){
        dispatch(clearCart());
        localStorage.removeItem("cart")
        }else{
            navigate("/my-order")
        }
    },[checkout, dispatch, navigate])
    
    // delivery date function
    const estimatedDeliveryDate = (createdAt) =>{
        const orderDate = new Date(createdAt);
        orderDate.setDate(orderDate.getDate() + 3);
        return orderDate.toLocaleDateString();
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white">
           <h1 className="text-4xl font-bold text-center text-emerald-700 mb-2 mt-6">
                THANK YOU FOR YOUR Order
           </h1> 
           <h3 className="text-lg text-gray-500 text-center mb-8">
                Dear Customer, Your Order has been received and been processed for Delivery
           </h3>
           <div className="flex justify-between mb-20">
                <div>
                    <h2 className="text-xl font-semibold">
                    Order ID: {checkout._id}
                    </h2>
                    <p className="text-gray-500">
                        Order Date: {new Date(checkout.createdAt).toLocaleDateString()}

                    </p>
                </div>
                <div>
                    <p className="text-xl text-gray-500">
                        Delivery Date: {estimatedDeliveryDate(checkout.createdAt)}
                    </p>
                </div>
           </div>

           <div className="mb-20">
           {
               checkout.checkoutItems.map((item) => (
                   
                   <div key={item.productId} className="flex items-center mb-4">
                        <img src={item.image} alt={item.name} className="w-18 h-18 object-cover rounded-md mr-4"/>
                        <div>
                            <h4 className="text-md font-semibold">{item.name}</h4>
                            <p className="text-sm text-gray-500">
                            Color: {" "}{item.color} || Size: {" "}{item.size}
                            </p>
                        </div>
                        <div className="ml-auto text-right">
                            <p className="text-md">${item.price}</p>
                            <p className="text-md">Quantity:{" "}{item.quantity}</p>
                        </div>
                   </div>             
               ))
           }
           </div>
           <div className="flex justify-between mb-20">
            <div>
                <h4 className="text-lg font-semibold mb-2">Payment</h4>
                <p className="text-gray-600">PayPal</p>
            </div>
            <div>
                <h4 className="text-lg font-semibold mb-2">Delivery Info</h4>
                <p className="text-gray-600">{checkout.shippingAddress.address}</p>
                <p className="text-gray-600">
                {checkout.shippingAddress.city} {", "} {checkout.shippingAddress.country}

                </p>
                <p className="text-gray-600">Postal Code: {checkout.shippingAddress.postalCode}</p>
            </div>
           </div>
        </div>
    )
}

export default OrderComfirmationPage
