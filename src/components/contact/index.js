import React from "react";
import ContactDetail from "./contactDetail";
import GetInTouch from "./getInTouch";

const IndexContact = () => {
    return(
        <div className="w-full flex flex-col items-center text-black text-sm pt-20">
            <div className="flex flex-col max-w-screen-xl w-full gap-4 justify-center">
                <h1 className="text-4xl text-center">Contact</h1>
            </div>
            <div className="mt-8 w-full flex bg-white border-t border-gray-200 py-20 justify-center px-10">
                <div className="flex flex-col md:flex-row max-w-screen-xl w-full gap-12">
                    {/* Contact Details */}
                    <div className="flex w-full md:w-4/12">
                        <ContactDetail />
                    </div>
                    {/* Get in Touch */}
                    <div className="flex w-full md:w-8/12">
                        <GetInTouch />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default IndexContact;