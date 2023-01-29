import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../components";
import IndexBlog from "../components/blog";
import IndexContact from "../components/contact";
import IndexHome from "../components/home";
import IndexShop from "../components/shop";
import Carts from "../components/shop/carts";
import Checkout from "../components/shop/checkout";

/**
 *  This function is a starting point of your router module
 *  It will contain all of router
 */
const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Index />} >
                <Route index element={<IndexHome />} />
                <Route path="/blog" element={<IndexBlog />} />
                <Route path="/contact" element={<IndexContact />} />
                <Route path="/shop" element={<IndexShop />} />
                <Route path="/cart" element={<Carts />} />
                <Route path="/checkout" element={<Checkout />} />
            </Route>
        </Routes>
    )
};

export default Router;