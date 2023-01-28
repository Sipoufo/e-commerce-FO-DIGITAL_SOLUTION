import React from "react";

const Opportunity = () => {

    return(
        <div className="bg-white flex relative w-full justify-center pt-20 px-10">
            <div className="flex flex-col md:flex-row w-full max-w-screen-xl gap-10">
                <div className="relative flex h-72 w-full sm:w-1/3 ">
                    <img src={process.env.PUBLIC_URL + "/images/opportunity.jpg"} className="absolute w-full h-full object-cover" alt="opportunity1" />
                    <div className="absolute flex flex-col justify-start items-end w-full h-full pr-10 pt-10">
                        <span className="text-3xl font-bold">
                            <span className="text-primary-color">10%</span>OFF
                        </span>
                        <span className="text-sm font-semibold">
                            Only This Month
                        </span>
                    </div>
                </div>  
                <div className="relative flex h-72 w-full sm:w-1/3 gap-10">
                    <img src={process.env.PUBLIC_URL + "/images/opportunity.jpg"} className="absolute w-full h-full object-cover" alt="opportunity1" />
                    <div className="absolute flex flex-col justify-start items-end w-full h-full pr-10 pt-10">
                        <span className="text-3xl font-bold">
                            <span className="text-primary-color">10%</span>OFF
                        </span>
                        <span className="text-sm font-semibold">
                            Only This Month
                        </span>
                    </div>
                </div>  
                <div className="relative flex h-72 w-full sm:w-1/3 gap-10">
                    <img src={process.env.PUBLIC_URL + "/images/opportunity.jpg"} className="absolute w-full h-full object-cover" alt="opportunity1" />
                    <div className="absolute flex flex-col justify-start items-end w-full h-full pr-10 pt-10">
                        <span className="text-3xl font-bold">
                            <span className="text-primary-color">10%</span>OFF
                        </span>
                        <span className="text-sm font-semibold">
                            Only This Month
                        </span>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default Opportunity;