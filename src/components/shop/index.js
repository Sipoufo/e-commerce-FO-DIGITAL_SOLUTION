import React from "react";
import OnProduct from "./onProduct";

const IndexShop = () => {
    return(
        <div className="w-full flex flex-col items-center text-black text-sm pt-20 bg-white">
            <div className="flex flex-col max-w-screen-xl w-full gap-4 justify-center">
                <h1 className="text-4xl text-center">Shop</h1>
                <p className="italic text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>
            </div>
            <div className="mt-8 w-full flex bg-[#F7F7F7] border-t border-gray-200 py-20 justify-center px-10">
                <div className="max-w-screen-xl w-full flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center text-gray-600">
                        <span className="italic">Showing 10–18 of 19 results</span>
                        <span className="italic">Sort by latest</span>
                    </div>
                    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <OnProduct image="/images/product1.jpg" name="Wireless Headphones" price="£413.00" />
                        <OnProduct image="/images/product2.jpg" name="Wireless Headphones" price="£413.00" />
                        <OnProduct image="/images/product3.jpg" name="Wireless Headphones" price="£413.00" />
                        <OnProduct image="/images/product4.jpg" name="Wireless Headphones" price="£413.00" />
                        <OnProduct image="/images/product1.jpg" name="Wireless Headphones" price="£413.00" />
                        <OnProduct image="/images/product2.jpg" name="Wireless Headphones" price="£413.00" />
                        <OnProduct image="/images/product3.jpg" name="Wireless Headphones" price="£413.00" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default IndexShop;