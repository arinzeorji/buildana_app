import React from 'react' 
import {RiDeleteBin3Line} from 'react-icons/ri'
import pro1 from "../../assets/1.jpg";
import pro2 from "../../assets/2.jpg";
import pro3 from "../../assets/13.jpg";
import pro4 from "../../assets/14.jpg";
// import pro5 from "../../assets/5.jpg";
// import pro6 from "../../assets/6.jpg";

const cartProducts = [
    {
        id: 1,
        name: "Ipad",
        size: "M",
        color: "Black",
        quantity: 11,
        price: 120000,
        image: pro1
    },
    {
        id: 2,
        name: "Tablet",
        size: "L",
        color: "White",
        quantity: 40,
        price: 900000,
        image: pro2
    },{
        id: 3,
        name: "Laptop",
        size: "L",
        color: "Gray",
        quantity: 31,
        price: 300000,
        image: pro3
    },
    {
        id: 4,
        name: "Phone",
        size: "S",
        color: "Gray",
        quantity: 112,
        price: 100000,
        image: pro4
    }
]

const CartContents = () => {
    return (
        <div>
            {
                cartProducts.map((product, index) =>(
                    <div key={index} className="flex items-start justify-between py-4 border-b">
                        <div className="flex items-start">
                            <img className="w-20 h-20 object-cover mr-4 rounded" src={product.image} alt={product.name} />
                        </div>

                        <div>
                            <h3>{product.name}</h3>
                            <p className="text-sm text-gray-500">
                                Size: {product.size} | Color: {product.color}

                            </p>

                            <div className="flex items-center mt-2">
                                <button className="border rounded px-1 py-.51 text-xl font-medium">-</button>
                                <span className="mx-4">{product.quantity}</span>
                                <button className="border rounded px-1 py-.51 text-xl font-medium">+</button>
                            </div>

                        </div>

                        <div>
                            <p className="font-medium">$ {product.price.toLocaleString()}</p>
                            <button>
                                <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
                            </button>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CartContents
