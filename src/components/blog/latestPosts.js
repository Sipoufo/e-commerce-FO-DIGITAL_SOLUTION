import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LatestPost = () => {
    return(
        <div className="flex flex-col w-full p-6 gap-2 bg-white border border-gray-200 shadow-lg">
            <h1 className="text-xl">Categories</h1>
            <div className="w-6 border border-primary-color"></div>
            <div className="w-full flex flex-col gap-1 mt-2">
                <div className="w-full flex flex-col gap-1 pb-2 text-lg">
                    <a href="/blog" className="hover:text-primary-color">We Help Your Time Work For Your Money.</a>
                    <div className="w-full flex flex-row gap-2 text-primary-color text-sm items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>AUG 27, 2015</span>
                    </div>
                </div>
                <div className="w-full border-t border-gray-300"></div>
                <div className="w-full flex flex-col gap-1 pb-2 text-lg">
                    <a href="/blog" className="hover:text-primary-color">We Help Your Time Work For Your Money.</a>
                    <div className="w-full flex flex-row gap-2 text-primary-color text-sm items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>AUG 27, 2015</span>
                    </div>
                </div>
                <div className="w-full border-t border-gray-300"></div>
                <div className="w-full flex flex-col gap-1 pb-2 text-lg">
                    <a href="/blog" className="hover:text-primary-color">We Help Your Time Work For Your Money.</a>
                    <div className="w-full flex flex-row gap-2 text-primary-color text-sm items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>AUG 27, 2015</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LatestPost