import React from 'react'
import Hero from '../Layouts/Hero';
import BrandCollections from '../Products/BrandCollections';
import NewArrivals from '../Products/NewArrivals';
import ProductDetails from '../Products/ProductDetails';
import ProductsCollectionGrid from '../Products/ProductsCollectionGrid';

import thumb1 from '../../assets/6.jpg'
import thumb2 from '../../assets/7.jpg'
import FeaturedCollection from '../Products/FeaturedCollection';
import Features from '../Common/Features';



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
}, {
    _id: 5,
    name: "Product 5",
    price: 100000,
    images: thumb1
},
{
_id: 6,
name: "Product 6",
price: 40000,
images: thumb2
},
{
_id: 7,
name: "Product 7",
price: 23000,
images: thumb1
} ,
{
_id: 8,
name: "Product 8",
price: 990000,
images: thumb2
}

]

const Home = () => {
    return (
        <div>
            <Hero />
            <BrandCollections />
            <NewArrivals />
            
            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">You May Also Like</h2>
    
            <ProductDetails />

            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-bold mb-4">Top Products for Women</h2>
            </div>
            <ProductsCollectionGrid products={similarProducts} />

            <FeaturedCollection />
        <Features />
        </div>
    )
}

export default Home
