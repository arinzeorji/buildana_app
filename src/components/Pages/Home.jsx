import React, { useState, useEffect } from 'react'
import Hero from '../Layouts/Hero';
import BrandCollections from '../Products/BrandCollections';
import NewArrivals from '../Products/NewArrivals';
import ProductDetails from '../Products/ProductDetails';
import ProductsCollectionGrid from '../Products/ProductsCollectionGrid';
import FeaturedCollection from '../Products/FeaturedCollection';
import Features from '../Common/Features';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductsByFilters} from "../../redux/slice/productSlice";
import axios from 'axios';


const Home = () => {

    const dispatch = useDispatch();
    const {products, loading, error } = useSelector((state) => state.products);
    const [bestSellerProduct, setBestSellerProduct] = useState(null);

    useEffect(() =>{
        //FETCH PRODUCTS FROM A SPECIFIC COLLECTION
        dispatch(
            fetchProductsByFilters({
                gender: "Women",
                category: "Bottom Wear",
                limit: 8,
            })
        )

        //FETCH BEST SEELER PRODUCT 
        const fetchBestSeller = async () =>{
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/api/products/bestseller`
                );
                setBestSellerProduct(response.data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchBestSeller();
    }, [dispatch])

    return (
        <div>
            <Hero />
            <BrandCollections />
            <NewArrivals />
            
            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">You May Also Like</h2>
    
            {
                bestSellerProduct ? (
                    <ProductDetails productId={bestSellerProduct._id} />

                ) : (
                    <p className="text-center">
                        Loading Best Seller ...
                    </p>
                )
            }

            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-bold mb-4">Top Products for Women</h2>
            </div>
            <ProductsCollectionGrid products={products} loading={loading} error={error} />

            <FeaturedCollection />
        <Features />
        </div>
    )
}

export default Home
