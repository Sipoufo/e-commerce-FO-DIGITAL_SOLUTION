import React from "react";

const AboutUs = () => {
    return(
        <div className="flex flex-col w-full p-6 gap-2 bg-white border border-gray-200 shadow-lg">
            <img src={process.env.PUBLIC_URL + "/images/blog-sidebar-img.jpg"} className="w-full h-60 object-cover" alt="blogImage" />
            <h1 className="text-2xl">About Us</h1>
            <div className="w-6 border border-primary-color"></div>
            <p className="text-gray-400">
                Lorem ipsum dolor sit amet, augue ac phasellus nunc magna elit, quisque justo purus.
            </p>
        </div>
    )
};

export default AboutUs;