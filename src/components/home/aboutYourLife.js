import React from "react";

const AboutYourLife = () => {
    return(
        <div className="bg-[#F7F7F7] flex justify-center w-full pt-20 py-32 overflow-hidden px-10">
            <div className="flex flex-col items-center max-w-screen-xl gap-4 w-full">
                <h1 className="text-4xl">It’s About Your Life, Not Just Your Money.</h1>
                <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <div className="flex overflow-x-auto w-full justify-center">
                    <div className="flex flex-row gap-6 mt-20 justify-center">
                        <div className="relative flex justify-center items-center w-48 h-20 group/image1">
                            <img src={process.env.PUBLIC_URL + "/images/client-color-1.png"} className="absolute w-full object-cover" alt="image1"/>
                            <img src={process.env.PUBLIC_URL + "/images/client-color-hover-1.png"} className="absolute hidden w-full object-cover group-hover/image1:block" alt="imagehover1"/>
                        </div>
                        <div className="relative flex justify-center items-center w-48 group/image2">
                            <img src={process.env.PUBLIC_URL + "/images/client-color-2.png"} className="absolute w-full object-cover" alt="image1"/>
                            <img src={process.env.PUBLIC_URL + "/images/client-color-hover-2.png"} className="absolute hidden w-full object-cover group-hover/image2:block" alt="imagehover1"/>
                        </div>
                        <div className="relative flex justify-center items-center w-48 group/image3">
                            <img src={process.env.PUBLIC_URL + "/images/client-color-3.png"} className="absolute w-full object-cover" alt="image3"/>
                            <img src={process.env.PUBLIC_URL + "/images/client-color-hover-3.png"} className="absolute hidden w-full object-cover group-hover/image3:block" alt="imagehover1"/>
                        </div>
                        <div className="relative flex justify-center items-center w-48 group/image4">
                            <img src={process.env.PUBLIC_URL + "/images/client-color-4.png"} className="absolute w-full object-cover" alt="image4"/>
                            <img src={process.env.PUBLIC_URL + "/images/client-color-hover-4.png"} className="absolute hidden w-full object-cover group-hover/image4:block" alt="imagehover1"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutYourLife;