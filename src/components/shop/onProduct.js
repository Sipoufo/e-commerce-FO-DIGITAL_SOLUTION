import React from "react";

const OnProduct = ({image, name, price}) => {

    return(
        <div className="flex flex-col w-full transition ease-in-out delay-200 hover:-translate-y-1 shadow-xl">
            <img src={process.env.PUBLIC_URL + image} alt="product" />
            <div className="flex flex-col px-4 py-4 gap-4">
                <h1 className="text-center">{name}</h1>
                <span className="font-bold text-center">{price}</span>
                <div className="w-full border border-gray-200"></div>
                <div className="flex justify-center">
                    <button type="submit" className="rounded-2xl bg-white text-black text-sm font-semibold px-4 py-2 border border-gray-700 hover:bg-gray-900 hover:border-gray-900 hover:text-white">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default OnProduct;