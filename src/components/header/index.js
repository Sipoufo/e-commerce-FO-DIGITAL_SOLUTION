import React from "react";
import { NavLink } from 'react-router-dom'; // Use for redirection with the router
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPhone, faShoppingCart, faBarsStaggered, faBars } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const IndexHeader = ({setModalMenu}) => {
    return(
        <div className="flex flex-col w-full text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center bg-primary-background text-white px-6 gap-10 py-6 sm:py-0">
                {/* Left part */}
                <div className="flex flex-col gap-4 sm:flex-row items-center">
                    <p>Welcome to Our Site</p>
                    <div className="hidden sm:block h-10 border border-[#504E4E]"></div>
                    <div className="flex flex-row gap-2 items-center hover:text-primary-color">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        deploy@qodeinteractive.com
                    </div>
                    <div className="hidden sm:block h-10 border border-[#504E4E]"></div>
                    <div className="flex flex-row gap-2 items-center group">
                        <FontAwesomeIcon icon={faPhone} className="group-hover:text-primary-color" />
                        345-657-534
                    </div>
                </div>
                {/* Right part */}
                <div className="flex flex-row items-center text-xl">
                    <div className="relative flex items-end justify-end group/search py-6 px-6">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
                        <form className="absolute hidden w-40 group-hover/search:flex peer-focus/in:flex translate-y-16 translate-x-4">
                            <input type="text" className="text-gray-400 italic w-full px-4 py-3 bg-[#272626] focus:bg-[#2C2A2A] text-sm peer/in" placeholder="Search..." />
                        </form>
                    </div>
                    <div className="h-10 border border-[#504E4E]"></div>
                    <div className="relative flex justify-end items-start py-6 px-6 group/shop">
                        <a href="/cart"><FontAwesomeIcon icon={faShoppingCart} /></a>
                        <div className="absolute text-sm bg-[#EE5446] rounded-full px-1 translate-x-2 -translate-y-2">
                            0
                        </div>
                        <div className="absolute hidden w-48 group-hover/shop:flex translate-y-10 translate-x-4 px-4 py-3 bg-[#272626] text-sm">
                            No products in the cart.
                        </div>
                    </div>
                    <div className="h-10 border border-[#504E4E]"></div>
                    <button className="relative flex justify-end items-start py-6 px-6">
                        <FontAwesomeIcon icon={faBarsStaggered} className="" />
                    </button>
                </div>
            </div>
            <div className="flex w-full justify-center">
                <div className="relative flex md:hidden flex-col md:flex-row bg-white text-black px-6 py-10 w-full">
                    <div className="flex justify-center items-center w-full h-full">
                        <img src={process.env.PUBLIC_URL + "/images/logo_black.png"} alt="logo" className="object-contain w-32" />
                    </div>
                    <div className="absolute flex justify-start items-start w-full h-full">
                        <button>
                            <FontAwesomeIcon icon={faBars} className="text-sm" />
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex flex-col md:flex-row justify-between items-center bg-white text-black px-6 py-10 w-full shadow-md">
                    <ul className="flex flex-row gap-10 items-center font-light text-gray-600">
                        <li><img src={process.env.PUBLIC_URL + "/images/logo_black.png"} alt="logo" className="object-contain w-28" /></li>
                        <NavLink to="/" className={isActive => (isActive? "hover:underline" : "hover:underline") + " underline-offset-8"}>HOME</NavLink> 
                        <NavLink to="/blog" className={isActive => (isActive? "hover:underline" : "hover:underline") + " underline-offset-8"}>BLOG</NavLink> 
                        <NavLink to="/shop" className={isActive => (isActive? "hover:underline" : "hover:underline") + " underline-offset-8"}>SHOP</NavLink> 
                    </ul>
                    <div className="flex items-center">
                        <a href="/contact" className="rounded-2xl bg-primary-color text-white font-bold px-4 py-2 hover:bg-white hover:text-primary-color border-2 border-primary-color">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexHeader;