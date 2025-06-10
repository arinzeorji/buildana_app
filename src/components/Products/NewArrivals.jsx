import React, {useRef, useState, useEffect} from 'react'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'


import phone1 from '../../assets/1.jpg'
import phone2 from '../../assets/3.jpg'
import phone3 from '../../assets/14.jpg'
import phone4 from '../../assets/15.jpg'
import laptop1 from '../../assets/13.jpg'
import laptop2 from '../../assets/4.jpg'
import laptop3 from '../../assets/6.jpg'
import laptop4 from '../../assets/5.jpg'
import { Link } from 'react-router';

const newProducts = [
    {
        _id:1,
        name: 'Samsung Galaxy',
        price: 130,
        image: {
            imgUrl: phone1,
            imgAlt: "Samusung Phone"
        }
    },{
        _id:2,
        name: 'HP Series',
        price: 34130,
        image: {
            imgUrl: laptop3,
            imgAlt: "HP Laptop"
        }
    },{
        _id:3,
        name: 'Mac Book',
        price: 19930,
        image: {
            imgUrl: laptop4,
            imgAlt: "Mac"
        }
    },{
        _id:4,
        name: 'Techno',
        price: 3130,
        image: {
            imgUrl: phone4,
            imgAlt: "Tecno"
        }
    },{
        _id:5,
        name: 'Nokia',
        price: 30,
        image: {
            imgUrl: phone3,
            imgAlt: "Samusung Phone"
        }
    },{
        _id:6,
        name: 'Dell',
        price: 1130,
        image: {
            imgUrl: laptop2,
            imgAlt: "Samusung Phone"
        }
    },{
        _id:7,
        name: 'HP',
        price: 5130,
        image: {
            imgUrl: laptop1,
            imgAlt: "Samusung Phone"
        }
    },{
        _id:8,
        name: 'Iphone XR',
        price: 130,
        image: {
            imgUrl: phone2,
            imgAlt: "Samusung Phone"
        }
    }
]

const NewArrivals = () => {

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    

    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -450 : 450
        scrollRef.current.scrollBy({left: scrollAmount, behaviour:"smooth"});
    }

    // handle mouse movements
    
const handleMouseDown = (e) =>{
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offSetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);

}

const handleMouseMove =(e) =>{
    if(!isDragging){
        const x = e.pageX - scrollRef.current.offSetLeft;
        const walk = x - startX;
        scrollRef.current.scrollLeft = scrollLeft - walk;

    }
}
const handleMouseUpOrLeave =(e) =>{
    setIsDragging(false);

}

    // end handle mouse movements
// update scroll button function
const updateScrollButtons = () => {
    const container = scrollRef.current;
    
    if (container){
        const leftScroll = container.scrollLeft;
        const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;

        setCanScrollLeft(leftScroll > 0)
        setCanScrollRight(rightScrollable);
    }

    console.log({
        scrolLeft:container.scrollLeft,
        clientWidth:container.clientWidth,
        containerScrollWidth: container.scrollWidth,
        offSetLeft: scrollRef.current.offSetLeft
    })
}
//end update scroll button function
    

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButtons);
            updateScrollButtons();
            return () => container.removeEventListener("scroll", updateScrollButtons);

        }
    }, [])

    return (

        <section className="py-16 px-4 lg:px-0">
            <div className="container mx-auto text-center mb-10 relative">
                <h2 className="text-3xl font-bold mb-4">
                    Explore New Arrivals
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Discover the latest styles straight off the runway, 
                    freshly added to keep your gadget life on the cutting egde of technology
                </p>

                {/* scoll buttons */}
                <div className="absolute right-0 bottom-[-30px] flex space-x-2">
                <button 
                    onClick={() => scroll("left")}
                    disabled={!canScrollLeft}                
                    className=
                    {`p-2 rounded border ${canScrollLeft
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}>
                        <FiChevronLeft className="text-2xl" />
                    </button>

                    <button 
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}                
                    className=
                    {`p-2 rounded border ${canScrollRight
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}>
                        <FiChevronRight className="text-2xl" />
                    </button>
               </div>

            </div>

            {/* scrollable content */}

            <div 
                ref={scrollRef}
                onMouseDown = {handleMouseDown}
                onMouseMove = {handleMouseMove}
                onMouseUp = {handleMouseUpOrLeave}
                onMouseLeave = {handleMouseUpOrLeave}

                className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing": "cursor-grab"}`}>
                {
                    newProducts.map((product, index) => (
                        <div key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
                            <img 
                                src={product.image.imgUrl} 
                                draggable="false"
                                className="w-full h-[300px] object-cover rounded-lg" alt={product.name} />
                            <div className="absolute bottom-0 left-0 right-0 bg-gray-900 w-[90%] hover:w-[100%] mx-auto text-white p-2 rounded-b-lg transition-all duration-300">
                                <Link to={`/product/${product._id}`} className="block">
                                    <h4 className="font-medium">{product.name}</h4>
                                    <p className="mt-1">{product.price}</p>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* scrollable content */}
        </section>
    )
}

export default NewArrivals
