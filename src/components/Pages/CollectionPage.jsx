import React, { useState, useEffect, useRef } from 'react'
import phone1 from '../../assets/1.jpg'
import phone2 from '../../assets/3.jpg'
import phone3 from '../../assets/14.jpg'
import phone4 from '../../assets/15.jpg'
import laptop1 from '../../assets/13.jpg'
import laptop2 from '../../assets/4.jpg'
import laptop3 from '../../assets/6.jpg'
import laptop4 from '../../assets/5.jpg'
import { Link } from 'react-router';

import {FaFilter} from 'react-icons/fa'
import FilterSidebar from '../Products/FilterSidebar';
import SortOptions from '../Products/SortOptions';
import ProductsCollectionGrid from '../Products/ProductsCollectionGrid';

const CollectionPage = () => {

    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebarOpen = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const handleClicksOutsideSidebarToCloseIt = (e) =>{
        //check if sidebar is open and if click is outside sidebar
        if(sidebarRef.current && !(sidebarRef.current.contains(e.target))){
            setIsSidebarOpen(false);
        }
    }

    useEffect(() =>{
        // add event listener on clicks
        document.addEventListener("mousedown", handleClicksOutsideSidebarToCloseIt)

        // remove event listener when the sidebar has been close
       return () => {
           document.removeEventListener("mousedown", handleClicksOutsideSidebarToCloseIt);
       }
    }, []);


    useEffect(() => {
        setTimeout(() => {
           const fetchedProducts = [
                {
                    _id:1,
                    name: 'Samsung Galaxy',
                    price: 130,
                    images: phone1
                },{
                    _id:2,
                    name: 'HP Series',
                    price: 34130,
                    images: laptop3
                },{
                    _id:3,
                    name: 'Mac Book',
                    price: 19930,
                    images: laptop4
                    
                },{
                    _id:4,
                    name: 'Techno',
                    price: 3130,
                    images: phone4
                },{
                    _id:5,
                    name: 'Nokia',
                    price: 30,
                    images: phone3
                },{
                    _id:6,
                    name: 'Dell',
                    price: 1130,
                    images: laptop2
                },{
                    _id:7,
                    name: 'HP',
                    price: 5130,
                    images: laptop1
                },{
                    _id:8,
                    name: 'Iphone XR',
                    price: 130,
                    images:phone2
                }
            ]
            setProducts(fetchedProducts);
        }, 1000);

    }, [])
    return (
        <div className="flex flex-col lg:flex-row">
            {/* mobile filter button */}
            <button onClick={toggleSidebarOpen} className="lg:hidden border p-2 flex justify-center items-center">
                <FaFilter className="mr-2"/>Filters
            </button>

            <div ref={sidebarRef} 
                 className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                 fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
                <FilterSidebar />
            </div>

            <div className="flex-grow p-4">
                <h2 className="text-2xl uppercase mb-4">
                All Collections
                </h2>

                {/* sort options */}
                <SortOptions />

                <ProductsCollectionGrid products={products} />

            </div>
        </div>
    )
}

export default CollectionPage
