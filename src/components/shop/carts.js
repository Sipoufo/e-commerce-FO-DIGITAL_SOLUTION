import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Carts = () => {
    return(
        <div className="w-full flex flex-col items-center text-black text-sm pt-20">
            <div className="flex flex-col max-w-screen-xl w-full gap-4 justify-center">
                <h1 className="text-4xl text-center">Carts</h1>
            </div>
            <div className="mt-8 w-full flex border-t border-gray-200 py-20 justify-center px-10">
                <div className="flex flex-col max-w-screen-xl w-full gap-10">
                    <div className="w-full flex flex-col p-4 gap-4 shadow-lg bg-white border-b">
                        <table className="w-full table text-base border-b">
                            <tr className="border-b">
                                <td className="text-center"></td>
                                <td className="text-center"></td>
                                <td className="text-center">Product</td>
                                <td className="text-center">Price</td>
                                <td className="text-center">Quantity</td>
                                <td className="text-center">Total</td>
                            </tr>
                            <tr>
                                <td className="">
                                    <button><FontAwesomeIcon icon={faClose} className="text-primary-color" /></button>
                                </td>
                                <td className="w-40 ">
                                    <img src={process.env.PUBLIC_URL + "/images/product1.jpg"} className="w-full h-40 object-contain" alt="product" />
                                </td>
                                <td className="text-center">
                                    Black Ear Pad
                                </td>
                                <td className="text-center">
                                    £448.00
                                </td>
                                <td className="text-center">
                                    <input type="number" className="border p-2" />
                                </td>
                                <td className="text-center">
                                    £448.00
                                </td>
                            </tr>
                        </table>
                        <div className="flex justify-between items-center flex-col md:flex-row gap-6">
                            <form className="flex flex-col md:flex-row gap-4 w-full md:w-fit">
                                <input type="text" className="text-gray-400 px-4 py-3 bg-gray-100" placeholder="Coupon code" />
                                <div className="flex items-center">
                                    <button type="submit" className="rounded-2xl bg-primary-color text-white font-medium px-4 py-2 hover:bg-white hover:text-primary-color border-2 border-primary-color">Apply Coupon</button>
                                </div>
                            </form>
                            <div className="flex flex-row gap-4 w-full md:w-fit">
                                <a href="/checkout" className="rounded-2xl bg-primary-color text-white font-medium px-4 py-2 hover:bg-white hover:text-primary-color border-2 border-primary-color">Proceed to Checkout</a>
                                <button className="rounded-2xl bg-primary-color text-white font-medium px-4 py-2 hover:bg-white hover:text-primary-color border-2 border-primary-color">Update Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end w-full">
                        <div className="flex flex-col w-full md:w-4/12 lg:w-3/12 gap-4 text-lg">
                            <h1 className="text-2xl">Billing details</h1>
                            <div className="w-6 border border-primary-color"></div>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="flex flex-row w-full justify-between">
                                    <span>Subtotal</span>
                                    <span>£730.00</span>
                                </div>
                            </div>
                            <div className="flex flex-row w-full justify-between">
                                <span>Total</span>
                                <span className="text-2xl font-semibold">£730.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Carts;