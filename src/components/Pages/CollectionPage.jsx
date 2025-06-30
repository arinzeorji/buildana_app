import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams, useSearchParams } from 'react-router';

import {FaFilter} from 'react-icons/fa'
import FilterSidebar from '../Products/FilterSidebar';
import SortOptions from '../Products/SortOptions';
import ProductsCollectionGrid from '../Products/ProductsCollectionGrid';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductsByFilters} from "../../redux/slice/productSlice"
const CollectionPage = () => {

    const {collection} = useParams();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch()

    const {products, loading, error} = useSelector((state)=> state.products);
    
    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() =>{
        dispatch(fetchProductsByFilters({collection, ...searchParams}))
    }, [dispatch, collection, searchParams])


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

                <ProductsCollectionGrid products={products} loading={loading} error={error}/>

            </div>
        </div>
    )
}

export default CollectionPage
