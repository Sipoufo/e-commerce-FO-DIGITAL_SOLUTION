import { faFacebookF, faPinterest, faTwitter, faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import RecentPost from "./recentPost";

const IndexFooter = () => {
    return(
        <div className="flex flex-col items-center w-full bg-primary-background text-white justify-center bottom-0">
            {/* footer */}
            <div className="mt-10 flex flex-col md:flex-row w-full gap-4 py-4 ">
                {/* Description */}
                <div className="flex flex-col gap-6 w-full md:w-1/4 px-8 border-r border-gray-500">
                    {/* Logo */}
                    <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" className="object-contain w-40" />
                    <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, ut integer, suscipit sapien nullam. Scelerisque nec tempor egestas tellus vulputate risus. Fusce vestibulum sed.
                    </p>
                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        {/* Phone number */}
                        <div className="flex flex-row gap-2 items-center">
                            <FontAwesomeIcon icon={faPhone} className="text-primary-color" />
                            <span>
                                <span className="text-primary-color">Call Us </span>
                                345-657-534
                            </span>
                        </div>
                        {/* E-mail */}
                        <div className="flex flex-row gap-2 items-center hover:text-primary-color">
                            <FontAwesomeIcon icon={faEnvelope}/>
                            deploy@qodeinteractive.com
                        </div>
                        {/* Location */}
                        <div className="flex flex-row gap-2 items-center hover:text-primary-color">
                            <FontAwesomeIcon icon={faLocationDot}/>
                            Bäckerstrasse 56, 8004 Zürich, Switzerland
                        </div>
                    </div>
                </div>
                {/* Recent post */}
                <div className="flex flex-col gap-6 w-full md:w-1/4 px-8 border-r border-gray-500">
                    <h1 className="text-2xl">Recent Posts</h1>
                    <div className="flex flex-col gap-4">
                        <RecentPost image="/images/recent1.jpg" name="Planning For The Future." date="NOV 12, 2015" id="1" />
                        <RecentPost image="/images/recent2.jpg" name="The Leaders Of Tomorrow." date="OCT 25, 2015" id="1" />
                        <RecentPost image="/images/recent3.jpg" name="Financial Dreams Delivered." date="SEP 04, 2015" id="1" />
                    </div>
                </div>
                {/* Additional Links */}
                <div className="flex flex-col gap-6 w-full md:w-1/4 px-8 border-r border-gray-500">
                    <h1 className="text-2xl">Additional Links</h1>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet, ut integer, suscipit sapien nullam. Scelerisque nec tempor egestas tellus vulputate risus. Fusce vestibulum sed.
                    </p>
                    <div className="flex flex-col gap-2">
                        <div className="hover:text-primary-color flex flex-row gap-2">
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <span>
                                Small Business Saturday
                            </span>
                        </div>
                        <div className="hover:text-primary-color flex flex-row gap-2">
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <span>
                                Planning For the Future
                            </span>
                        </div>
                        <div className="hover:text-primary-color flex flex-row gap-2">
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <span>
                                Strategies To Grow and Protect
                            </span>
                        </div>
                        <div className="hover:text-primary-color flex flex-row gap-2">
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <span>
                                Customer Value Chain
                            </span>
                        </div>
                    </div>
                </div>
                {/* Contact */}
                <div className="flex flex-col gap-6 w-full md:w-1/4 px-8">
                    <h1 className="text-2xl">Contact Us</h1>
                    <form className="flex flex-col gap-4 w-full">
                        <input type="text" className="text-gray-400 italic w-full px-4 py-3 bg-[#272626] focus:bg-[#2C2A2A]" placeholder="Name*" />
                        <input type="text" className="text-gray-400 italic w-full px-4 py-3 bg-[#272626] focus:bg-[#2C2A2A]" placeholder="E-mail Address*" />
                        <textarea className="text-gray-400 italic w-full px-4 py-3 bg-[#272626] focus:bg-[#2C2A2A] resize-none" rows="4" placeholder="Comment*"></textarea>
                        <div className="flex w-full justify-start">
                            <button type="submit" className="rounded-2xl bg-white text-black font-bold px-4 py-2 hover:bg-primary-color hover:text-white">Contact Us</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-8 px-5 py-5 flex flex-col md:flex-row w-full gap-10 bg-secondary-background justify-between items-center">
                <p>© 2016 Qode Interactive, All Rights Reserved</p>
                {/* Social media */}
                <div className="flex flex-row items-center gap-4">
                    {/* Tweeter */}
                    <a href="/" className="relative h-12 w-12 rounded-full flex justify-center items-center bg-[#00ACEC]">
                        <FontAwesomeIcon icon={faTwitter} className="absolute text-xl" />
                    </a>
                    {/* Dribbble */}
                    <a href="/" className="relative h-12 w-12 rounded-full flex justify-center items-center bg-[#F24E88]">
                        <FontAwesomeIcon icon={faDribbble} className="absolute text-xl" />
                    </a>
                    {/* Facebook */}
                    <a href="/" className="relative h-12 w-12 rounded-full flex justify-center items-center bg-[#3A5896]">
                        <FontAwesomeIcon icon={faFacebookF} className="absolute text-xl" />
                    </a>
                    {/* Pinterest */}
                    <a href="/" className="relative h-12 w-12 rounded-full flex justify-center items-center bg-[#C72527]">
                        <FontAwesomeIcon icon={faPinterest} className="absolute text-xl" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default IndexFooter;