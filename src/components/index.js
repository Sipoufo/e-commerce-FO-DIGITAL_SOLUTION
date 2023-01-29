import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IndexFooter from "./footer";
import IndexHeader from "./header";

const Index = () => {
    const [modalMenu, setModalMenu] = useState(false);

    return(
        <div className={`${modalMenu?"overflow-hidden": "overflow-auto"} relative w-screen h-screen overflow-x-hidden flex flex-col justify-between text-sm font-light bg-[#F7F7F7]`}>
            {/* Header */}
            <IndexHeader setModalMenu={setModalMenu} />

            {/* Container */}
            <Outlet/>

            {/* Footer */}
            <IndexFooter />

            {/* Modals */}
            {/* 1. Menu */}
            <div className={`${modalMenu?"flex": "hidden"} transition duration-150 absolute w-full h-full justify-center items-center bg-gray-800 bg-opacity-70`}>
                <div className="w-full max-w-sm flex bg-white p-4">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex flex-row justify-between items-center">
                            <h1 className="text-base font-bold">Menu</h1>
                            <FontAwesomeIcon icon={faX} onClick={() => setModalMenu(false)} />
                        </div>
                        <div className="flex w-full justify-center">
                            <ul className='flex flex-col justify-between gap-2 items-center w-full'>
                                <NavLink to='/' className="w-full flex justify-center">Home</NavLink>
                                <hr className="w-full border border-black" />
                                <NavLink to='/menu' className="w-full flex justify-center">Menu</NavLink>
                                <hr className="w-full border border-black" />
                                <NavLink to='/blog' className="w-full flex justify-center">Blog</NavLink>
                                <hr className="w-full border border-black" />
                                <NavLink to='/page' className="w-full flex justify-center">Pages</NavLink>
                                <hr className="w-full border border-black" />
                                <NavLink to='/about' className="w-full flex justify-center">About</NavLink>
                                <hr className="w-full border border-black" />
                                <NavLink to='/shop' className="w-full flex justify-center">Shop</NavLink>
                                <hr className="w-full border border-black" />
                                <NavLink to='/contact' className="w-full flex justify-center">Contact</NavLink>
                                <hr className="w-full border border-black" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;