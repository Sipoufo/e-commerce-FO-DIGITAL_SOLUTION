import React from "react";

const GetInTouch = () => {
    return(
        <div className="w-full flex flex-col gap-2">
            <h1 className="text-2xl">Get in Touch</h1>
            <p className="italic text-gray-400">
                Be Informed. Be Smart. Be Sure.
            </p>
            <form className="flex flex-col mt-4 gap-4">
                <div className="flex flex-row gap-4">
                    <input type="text" className="text-gray-400 w-1/2 px-4 py-3 bg-gray-100 border-transparent focus:border focus:border-gray-200 rounded-md" placeholder="First Name*" />
                    <input type="text" className="text-gray-400 w-1/2 px-4 py-3 bg-gray-100 border-transparent focus:border focus:border-gray-200 rounded-md" placeholder="Last Name*" />
                </div>
                <div className="flex flex-row gap-4">
                    <input type="text" className="text-gray-400 w-1/2 px-4 py-3 bg-gray-100 border-transparent focus:border focus:border-gray-200 rounded-md" placeholder="E-mail Address*" />
                    <input type="text" className="text-gray-400 w-1/2 px-4 py-3 bg-gray-100 border-transparent focus:border focus:border-gray-200 rounded-md" placeholder="Website" />
                </div>
                <textarea className="text-gray-400 w-full px-4 py-3 bg-gray-100 border-transparent focus:border focus:border-gray-200 rounded-md resize-none" rows="6" placeholder="Comment*"></textarea>
                <div className="flex w-full justify-start">
                    <button type="submit" className="rounded-2xl bg-primary-color text-white font-bold px-4 py-2 hover:bg-white hover:text-primary-color border-2 border-primary-color">Contact Us</button>
                </div>
            </form>
        </div>
    )
};

export default GetInTouch;