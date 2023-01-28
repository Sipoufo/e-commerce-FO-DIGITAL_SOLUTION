import React from "react";

const Subscribe = () => {
    return(
        <div className="flex flex-col w-full p-6 gap-2 bg-white border border-gray-200 shadow-lg">
            <h1 className="text-xl">Subscribe To Newsletter</h1>
            <div className="w-6 border border-primary-color"></div>
            <form className="flex flex-col gap-4 mt-2">
                <input type="text" className="text-gray-400  w-full px-4 py-3 bg-gray-100 border-transparent focus:border focus:border-gray-200 rounded-md" placeholder="Name*" />
                <div className="flex w-full justify-start">
                    <button type="submit" className="rounded-2xl bg-primary-color text-white font-bold px-4 py-2 hover:bg-white hover:text-primary-color border-2 border-primary-color">Subscribe</button>
                </div>
            </form>
        </div>
    )
};

export default Subscribe;