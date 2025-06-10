import React from 'react'
import heroImg from '../../assets/hero.jpg';
import {Link} from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative">
            <img src={heroImg} alt="" className="w-full h-[500px] md:h-[500px] lg:h-[750px] object-cover"/>
            <div className="absolute inset-0 opacity-90 bg-black flex items-center justify-center ">
                <div className="text-center text-white p-6">
                    <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold tracking-tighter uppercase mb-4">
                        vacation <br/> ready
                    </h1>
                    <p className="text-sm tracking-tighter md:text-lg mb-6">
                        Explore our vacation ready outfits with worldwide shipping 
                    </p>

                    <Link to="#" className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg">
                          Shop Now
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
