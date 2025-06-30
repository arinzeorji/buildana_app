import React, {useState,useEffect} from 'react';
import { toast } from 'sonner';
import ProductsCollectionGrid from './ProductsCollectionGrid';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductDetails, fetchSimilarProducts} from "../../redux/slice/productSlice"
import {addToCart} from "../../redux/slice/cartSlice"

    const ProductDetails = ({productId}) => {
        const {id} = useParams();
        const dispatch = useDispatch();
        const {selectedProduct, loading, error, similarProducts} = useSelector((state) => state.products);
        const {user, guestId} = useSelector((state)=> state.auth);


    const [mainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisable, setIsButtonDisabled] = useState(false);

    const productFetchId = productId || id; 

    useEffect(()=>{
        if(productFetchId){
            dispatch(fetchProductDetails(productFetchId))
            dispatch(fetchSimilarProducts({id: productFetchId}))
        }
    },[dispatch, productFetchId]);

    useEffect(() => {
        if (selectedProduct){
            setMainImage(selectedProduct.images[0].url)
        }
    }, [selectedProduct]);

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

        dispatch(
            addToCart({
                productId: productFetchId,
                quantity,
                size: selectedSize,
                color:selectedColor,
                guestId,
                userId: user._id,
            })
        ).then(() => {
            toast.success("Product Added To Cart", {
                duration: 1000,
            })
        }).finally(() => {
            setIsButtonDisabled(false);
        })   
    }

    if (loading){
        return <p> LOADING ....</p>
    }

    if (error){
        return <p>{error}</p>
    }
    
    return (
        <div className="p-6">
        { selectedProduct && (
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
                <div className="flex flex-col md:flex-row">
                {/* left thumbnails */}
                <div className="hidden md:flex flex-col space-y-4 mr-6">
                    {
                        selectedProduct.images.map((image, i) => (
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
                        <img src={mainImage} alt= "Main Products" className="w-full h-auto object-cover rounded-lg"/>
                    </div>

                </div>

                 {/* on mobile thumbnails */}
                 <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
                 {
                        selectedProduct.images.map((image, i) => (
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
                        {selectedProduct.name}
                    </h1>
                    <p className="text-lg text-gray-600 mb-1 line-through">
                        #{selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}
                    </p>     
                     <p className="text-xl text-gray-500 mb-2">
                        #{selectedProduct.price}
                    </p>
                    <p className="text-gray-600 mb-4">
                    {selectedProduct.description}
                    </p>

                    <div className="flex m-2">
                        <div className="mr-5">
                        <div className="mb-4">
                        <p className="text-gray-700 font-bold">
                                Color:
                        </p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.colors.map((color) =>(
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
                            {selectedProduct.sizes.map((size) =>(
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
                                        <td className="py-1 px-1">{selectedProduct.brand}</td>
                                    </tr> 
                                    <tr>
                                        <td className="py-1 px-1 font-smeibold">Material: </td>
                                        <td className="py-1 px-1">{selectedProduct.type}</td>
                                    </tr> 
                                    <tr>
                                        <td className="py-1 px-1 font-semibold">Brand</td>
                                        <td className="py-1 px-1">{selectedProduct.description}</td>
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
                            
                <ProductsCollectionGrid products={similarProducts} loading={loading} error={error}/>
            </div>     



        </div>
        )}
        </div>
    )
}

export default ProductDetails
