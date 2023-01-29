import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Checkout = () => {
    return(
        <div className="w-full flex flex-col items-center text-black text-sm pt-20">
            <div className="flex flex-col max-w-screen-xl w-full gap-4 justify-center">
                <h1 className="text-4xl text-center">Carts</h1>
            </div>
            <form className="mt-8 w-full flex flex-col gap-6 border-t border-gray-200 py-20 justify-center px-10">
                <div className="flex flex-col max-w-screen-xl w-full gap-6">
                    <div className="w-full flex flex-row px-4 py-6 border border-gray-300 rounded-lg">
                        <p>Returning customer?</p>
                        <a href="/checkout" className="text-primary-color">Click here to login</a>
                    </div>
                    <div className="w-full flex flex-row px-4 py-6 border border-gray-300 rounded-lg">
                        <p>Have a coupon?</p>
                        <a href="/checkout" className="text-primary-color">Click here to enter your code</a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-6">
                    {/* Billing details */}
                    <div className="flex flex-col gap-4 w-full md:w-1/2">
                        <h1 className="text-2xl">Billing details</h1>
                        <div className="w-6 border border-primary-color"></div>
                        <div className="flex flex-col gap-4 text-gray-600 w-full">
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex flex-row gap-1 w-full items-center">
                                    <p>First name</p>
                                    <FontAwesomeIcon icon={faStar} className="text-[8px]" />
                                </div>
                                <div className="w-full">
                                    <input type="text" className="px-6 py-4 border w-full bg-white" placeholder="First name"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex flex-row gap-1 w-full items-center">
                                    <p>Last name</p>
                                    <FontAwesomeIcon icon={faStar} className="text-[8px]" />
                                </div>
                                <div className="w-full">
                                    <input type="text" className="px-6 py-4 border w-full bg-white" placeholder="Last name"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex flex-row gap-1 w-full items-center">
                                    <p>Company name</p>
                                    <p>(optional)</p>
                                </div>
                                <div className="w-full">
                                    <input type="text" className="px-6 py-4 border w-full bg-white" placeholder="Company name"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex flex-row gap-1 w-full items-center">
                                    <p>Country / Region</p>
                                    <FontAwesomeIcon icon={faStar} className="text-[8px]" />
                                </div>
                                <div className="w-full">
                                    <select className="px-6 py-4 border w-full bg-white">
                                        <option>Cameroun</option>
                                        <option>Nigeria</option>
                                        <option>Tchad</option>
                                        <option>Congo</option>
                                        <option>Ghana</option>
                                        <option>RDC</option>
                                        <option>France</option>
                                        <option>Canada</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex flex-row gap-1 w-full items-center">
                                    <p>Street address </p>
                                    <FontAwesomeIcon icon={faStar} className="text-[8px]" />
                                </div>
                                <div className="w-full">
                                    <input type="text" className="px-6 py-4 border w-full bg-white" placeholder="House number and street name"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="w-full">
                                    <input type="text" className="px-6 py-4 border w-full bg-white" placeholder="Apartment, suite, unit, etc. (optional)"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex flex-row gap-1 w-full items-center">
                                    <p>Town / City</p>
                                    <FontAwesomeIcon icon={faStar} className="text-[8px]" />
                                </div>
                                <div className="w-full">
                                    <input type="text" className="px-6 py-4 border w-full bg-white" placeholder=""/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex flex-row gap-1 w-full items-center">
                                    <p>State / County</p>
                                    <FontAwesomeIcon icon={faStar} className="text-[8px]" />
                                </div>
                                <div className="w-full">
                                    <input type="text" className="px-6 py-4 border w-full bg-white" placeholder="State / County"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex flex-row gap-1 w-full items-center">
                                    <p>Postcode / ZIP</p>
                                    <FontAwesomeIcon icon={faStar} className="text-[8px]" />
                                </div>
                                <div className="w-full">
                                    <input type="text" className="px-6 py-4 border w-full bg-white" placeholder="Postcode / ZIP"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex flex-row gap-1 w-full items-center">
                                    <p>Phone</p>
                                    <FontAwesomeIcon icon={faStar} className="text-[8px]" />
                                </div>
                                <div className="w-full">
                                    <input type="text" className="px-6 py-4 border w-full bg-white" placeholder="Phone"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex flex-row gap-1 w-full items-center">
                                    <p>Email address</p>
                                    <FontAwesomeIcon icon={faStar} className="text-[8px]" />
                                </div>
                                <div className="w-full">
                                    <input type="text" className="px-6 py-4 border w-full bg-white" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4">
                                <input type="checkbox" />
                                <p>Create an account?</p>
                            </div>
                        </div>
                    </div>
                    {/* Billing details */}
                    <div className="flex flex-col gap-4 w-full md:w-1/2">
                        <h1 className="text-2xl">Additional information</h1>
                        <div className="w-6 border border-primary-color"></div>
                        <div className="flex flex-col gap-4 text-gray-600 w-full">
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex flex-row gap-1 w-full items-center">
                                    <p>Order notes</p>
                                    <p>(optional)</p>
                                </div>
                                <div className="w-full">
                                    <textarea type="text" className="px-6 py-4 border w-full bg-white resize-none" rows="2" placeholder="Notes about your order, e.g. special for delivery"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Your order */}
                <div className="flex flex-col gap-4 w-full">
                    <h1 className="text-2xl">Your order</h1>
                    <div className="w-6 border border-primary-color"></div>
                    <div className="flex flex-col gap-4 text-gray-600 w-full bg-white shadow-lg p-4">
                        <table className="w-full">
                            <tr>
                                <td>Product</td>
                                <td>Subtotal</td>
                            </tr>
                            <tr>
                                <td>13" Retina Laptop  × 1</td>
                                <td>£730.00</td>
                            </tr>
                            <tr>
                                <td>Subtotal</td>
                                <td>£730.00</td>
                            </tr>
                            <tr>
                                <td className="text-base">Total</td>
                                <td className="text-2xl font-semibold">£730.00</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="w-full flex flex-row px-4 py-6 border border-gray-300 rounded-lg">
                    <p>Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                </div>
                <div className="flex w-full">
                    <button type="submit" className="rounded-2xl bg-primary-color text-white font-bold px-4 py-2 hover:bg-white hover:text-primary-color border-2 border-primary-color">Please Order</button>
                </div>
            </form>
        </div>
    )
};

export default Checkout;