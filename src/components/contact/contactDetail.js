import React from "react";
import { faDribbble, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactDetail = () => {
    return(
        <div className="w-full flex flex-col gap-6">
            <h1 className="text-2xl">Contact Details</h1>
            <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-col gap-4">
                {/* E-mail */}
                <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="hover:text-primary-color"/>
                    deploy@qodeinteractive.com
                </div>
                {/* Location */}
                <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon icon={faLocationDot} className="hover:text-primary-color"/>
                    Bäckerstrasse 56, 8004 Zürich, Switzerland
                </div>
                {/* Phone number */}
                <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon icon={faPhone} className="hover:text-primary-color" />
                    1-345-657-534
                </div>
            </div>
            <div className="w-full border-t border-gray-200"></div>
            {/* Social media */}
            <div className="flex flex-row items-center gap-4 text-white">
                    {/* Tweeter */}
                    <a href="/" className="relative h-10 w-10 rounded-full flex justify-center items-center bg-[#00ACEC]">
                        <FontAwesomeIcon icon={faTwitter} className="absolute text-xl" />
                    </a>
                    {/* Dribbble */}
                    <a href="/" className="relative h-10 w-10 rounded-full flex justify-center items-center bg-[#F24E88]">
                        <FontAwesomeIcon icon={faDribbble} className="absolute text-xl" />
                    </a>
                    {/* Facebook */}
                    <a href="/" className="relative h-10 w-10 rounded-full flex justify-center items-center bg-[#3A5896]">
                        <FontAwesomeIcon icon={faFacebookF} className="absolute text-xl" />
                    </a>
                </div>
        </div>
    )
};

export default ContactDetail;