import React from "react";

const Tags = () => {
    return(
        <div className="flex flex-col w-full p-6 gap-2 bg-white border border-gray-200 shadow-lg">
            <h1 className="text-xl">Subscribe To Newsletter</h1>
            <div className="w-6 border border-primary-color"></div>
            <div className="mt-2 gap-2 w-full text-xs">
                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-primary-color hover:text-white m-1">ANALYSIS</button>
                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-primary-color hover:text-white m-1">BOARD</button>
                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-primary-color hover:text-white m-1">CAREERS</button>
                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-primary-color hover:text-white m-1">CASE</button>
                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-primary-color hover:text-white m-1">DIVIDEND</button>
                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-primary-color hover:text-white m-1">EMPLOYMENT</button>
                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-primary-color hover:text-white m-1">FINANCE</button>
                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-primary-color hover:text-white m-1">INVESTMENT</button>
                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-primary-color hover:text-white m-1">MARKET</button>
                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-primary-color hover:text-white m-1">MENTORSHIP</button>
                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-primary-color hover:text-white m-1">NEW</button>
                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-primary-color hover:text-white m-1">OFFICE</button>
                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-primary-color hover:text-white m-1">PLANNING</button>
                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-primary-color hover:text-white m-1">SUPPORT</button>
            </div>
        </div>
    )
};

export default Tags