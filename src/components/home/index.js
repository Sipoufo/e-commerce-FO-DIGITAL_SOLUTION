import React from "react";
import AboutYourLife from "./aboutYourLife";
import Header from "./header";
import Opportunity from "./opportunity";
import Products from "./products/products";

const IndexHome = () => {

    return(
        <div className="flex flex-col justify-center items-center w-full text-black text-lg">
            {/* Header */}
            <Header />
            {/* Opportunity */}
            <Opportunity />
            {/* Products */}
            <Products />
            {/* About your life */}
            <AboutYourLife />
        </div>
    )
}

export default IndexHome;