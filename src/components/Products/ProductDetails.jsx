import React, {useState,useEffect} from 'react';
import thumb1 from '../../assets/6.jpg'
import thumb2 from '../../assets/7.jpg'
import { toast } from 'sonner';
import ProductsCollectionGrid from './ProductsCollectionGrid';

const selectedProducts = {
    name: "Samsung Galazy s9",
    price: 120000,
    originalPrice:180000,
    description: "Fairly used samsung s9 for quick to the fastest finger here",
    brand: "Samsung",
    type: "fairly used",
    sizes:["S","M","L"],
    colors:["Red","Black"],
    images: [
        {
            url: thumb1,
            altText: "Samsung phones"
        },
        {
            url: thumb2,
            altText: "Samsung phone 2"
        },
    ]
}

const similarProducts = [
    {
        _id: 1,
        name: "Product 1",
        price: 100000,
        images: thumb1
},
 {
    _id: 2,
    name: "Product 2",
    price: 40000,
    images: thumb2
},
{
    _id: 3,
    name: "Product 3",
    price: 23000,
    images: thumb1
} ,
{
    _id: 4,
    name: "Product 4",
    price: 990000,
    images: thumb2
}

]
const ProductDetails = () => {
    const [mainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisable, setIsButtonDisabled] = useState(false)

    useEffect(() => {
        if (selectedProducts.images.length > 0 ){
            setMainImage(selectedProducts.images[0].url)
        }
    }, [selectedProducts]);

    const handleQuantityChange = (action) =>{
        if(action === "+") setQuantity((prev) => prev + 1);
        if (action === "-" && quantity > 1) setQuantity((prev) => prev - 1);      
    }

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor){
            toast.error("Please select your prefered size and color before adding to Cart",{
                duration:1000
            });
            return;
        }

        setIsButtonDisabled(true);

        setTimeout(() => {
            toast.success("Product Added to Cart",{
                duration:1000
            })
            setIsButtonDisabled(false);
        }, 500)

    }
    
    return (
        <div className="p-6">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
                <div className="flex flex-col md:flex-row">
                {/* left thumbnails */}
                <div className="hidden md:flex flex-col space-y-4 mr-6">
                    {
                        selectedProducts.images.map((image, i) => (
                            <img 
                                onClick={ () => setMainImage(image.url)}
                                key={i}
                                className={`w-30 h-30 p-3 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                                src={image.url} 
                                alt={`${image.altText} || thumbnail`}/>
                        ))
                    }
                </div>

                {/* main image */}
                <div className="md:w-1/2">
                    <div className="mb-4">
                        <img src={mainImage} 
                             alt= "Main Products"
                             className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>

                </div>

                 {/* on mobile thumbnails */}
                 <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
                 {
                        selectedProducts.images.map((image, i) => (
                            <img 

                                onClick={() => setMainImage(image.url)}
                                key={i}
                                className={`w-30 h-30 p-3 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                                src={image.url} 
                                alt={`${image.altText} || thumbnail`}/>
                        ))
                    }
                 </div>

                 {/* right section */}
                 <div className="md:w-1/2 md:ml-10">
                    <h1 className="text-2xl md:text-3xl font-smeibold mb-2">
                        {selectedProducts.name}
                    </h1>
                    <p className="text-lg text-gray-600 mb-1 line-through">
                        #{selectedProducts.originalPrice && `${selectedProducts.originalPrice}`}
                    </p>     
                     <p className="text-xl text-gray-500 mb-2">
                        #{selectedProducts.price}
                    </p>
                    <p className="text-gray-600 mb-4">
                    {selectedProducts.description}
                    </p>

                    <div className="flex m-2">
                        <div className="mr-5">
                        <div className="mb-4">
                        <p className="text-gray-700 font-bold">
                                Color:
                        </p>
                            <div className="flex gap-2 mt-2">
                                {selectedProducts.colors.map((color) =>(
                                    <button key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-gray-200 border-4": "border-gray-300"}`}
                                            style={{backgroundColor: color.toLocaleLowerCase(),
                                                    filter:"brightness(0.5)"}}></button>
                                ))}
                            </div>                        
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-700 font-bold">
                            Size:
                        </p>
                        <div className="flex gap-2 mt-2">
                            {selectedProducts.sizes.map((size) =>(
                                <button 
                                    key={size} 
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 rounded border ${selectedSize ===size ? "bg-black text-white" : ""}`}>{size}</button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <p className="text-gray-700 font-bold">Quantity</p>
                        <div className="flex items-center space-x-4 mt-2">
                            <button 
                                onClick={() => handleQuantityChange("-")} 
                                className="py-2 px-3.5 bg-gray-200 font-bold rounded text-lg">-</button>
                            <span className="text-xl">{quantity}</span>
                            <button 
                                onClick={() => handleQuantityChange("+")} 
                                className="px-3 py-2 bg-gray-200 font-bold rounded text-lg">+</button>
                        </div>
                    </div>

                    
                        </div>
                        <div className="ml-5 text-gray-700">
                            <h3 className="font-bold mb-4">Characteristics</h3>
                            <table className="w-full text-gray-600 text-left text-sm">
                                <tbody>
                                <tr>
                                        <td className="py-1 px-1 font-semibold">Brand: </td>
                                        <td className="py-1 px-1">{selectedProducts.brand}</td>
                                    </tr> 
                                    <tr>
                                        <td className="py-1 px-1 font-smeibold">Material: </td>
                                        <td className="py-1 px-1">{selectedProducts.type}</td>
                                    </tr> 
                                    <tr>
                                        <td className="py-1 px-1 font-semibold">Brand</td>
                                        <td className="py-1 px-1">{selectedProducts.description}</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                    </div>
                    <button 

                        onClick={handleAddToCart}
                        disabled={isButtonDisable}
                        className={`bg-black text-white font-bold py-2 px-6 rounded w-full mb-4
                                    ${isButtonDisable ? "cursor-not-allowed opacity-50" : "hover:bg-gray-900"}
                                    `}>
                        {isButtonDisable ? "Adding To Cart.." : "ADD TO CART"}
                    </button>
                 </div>
            </div>

            <div className="mt-20">
                <h2 className="text-2xl text-center font-medium mb-4">You May Also Like</h2>
                            
                <ProductsCollectionGrid products={similarProducts}/>
            </div>     



        </div>
        </div>
    )
}

export default ProductDetails
