import React from "react";
import OnProduct from "./onProduct";

const Products = () => {

    return(
        <div className="bg-white flex relative w-full justify-center pt-20 px-10">
            <div className="flex flex-col w-full max-w-screen-xl gap-6 items-center">
                <h1 className="text-4xl">Featured products</h1>
                <div className="w-10 border border-primary-color"></div>
                <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                    <OnProduct image="/images/product1.jpg" name="Wireless Headphones" price="£413.00" />
                    <OnProduct image="/images/product2.jpg" name="Wireless Headphones" price="£413.00" />
                    <OnProduct image="/images/product3.jpg" name="Wireless Headphones" price="£413.00" />
                    <OnProduct image="/images/product4.jpg" name="Wireless Headphones" price="£413.00" />
                    <OnProduct image="/images/product1.jpg" name="Wireless Headphones" price="£413.00" />
                    <OnProduct image="/images/product2.jpg" name="Wireless Headphones" price="£413.00" />
                    <OnProduct image="/images/product3.jpg" name="Wireless Headphones" price="£413.00" />
                    <OnProduct image="/images/product4.jpg" name="Wireless Headphones" price="£413.00" />
                </div>
            </div>
        </div>
    )
}

export default Products;