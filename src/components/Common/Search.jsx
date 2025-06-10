import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
      
    const handleSearchToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleSearchSubmit = (e) =>{
        e.preventDefault();
        console.log('search text ' + searchTerm);
        setIsOpen(false);
    }

    return (
        <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"}`}>
            {
                isOpen ?
             (
             <form onSubmit={handleSearchSubmit} className="relative flex items-center justify-center w-full">
                 <div className="relative w-1/2">
                    <input 
                        type="search" 
                        name="" id=""
                        placeholder="search materials"
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="rounded-lg bg-gray-100 px-4 py-2 pl-2 pr-12 focus:outline-none placeholder:text-gray-700 w-full"
                    
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
                        <HiMagnifyingGlass className="h-6 w-6" />
                    </button>
                 
                 </div>

                 <button 
                    className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800" 
                    type="button"
                    onClick={handleSearchToggle}
                    >
                     <HiMiniXMark className="h-10 w-10" />
                 </button>
             </form>
            ) : (
                <button className="pointer" onClick={handleSearchToggle}>
                    <HiMagnifyingGlass className="h-6 w-6" />
                </button>
            )
            }
        </div>
    )
}

export default Search
