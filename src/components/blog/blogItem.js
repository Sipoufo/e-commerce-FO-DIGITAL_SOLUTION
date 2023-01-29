import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faThumbsUp, faUser } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faDribbble, faFacebookF, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";

const BlogItems = ({id, image, type, title, date, author, nbLikes, nbComment, description}) => {
    return(
        <div className="w-full flex flex-col bg-white">
            <img src={process.env.PUBLIC_URL + image} className={(image ? "" : "hidden") + ` w-full h-96 object-cover`} alt="blogItemIllustration" />
            <div className="p-10 flex flex-col gap-4">
                <span className="text-primary-color">{type}</span>
                <h1 className="text-2xl hover:text-primary-color">{title}</h1>
                <div className="w-full flex flex-row gap-2 text-gray-400 text-base items-center">
                    {/* Date */}
                    <div className="flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>{date}</span>
                    </div>
                    <div className="h-4 border-r border-gray-400"></div>
                    {/* Author */}
                    <div className="flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faUser} />
                        <span>{author}</span>
                    </div>
                    <div className="h-4 border-r border-gray-400"></div>
                    {/* Number of like */}
                    <div className="flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span>{nbLikes}</span>
                    </div>
                    <div className="h-4 border-r border-gray-400"></div>
                    {/* Number of comments */}
                    <div className="flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span>{nbComment} COMMENTS</span>
                    </div>
                    <div className="h-4 border-r border-gray-400"></div>
                    {/* Share */}
                    <div className="flex flex-row gap-2 items-center group">
                        <FontAwesomeIcon icon={faShareNodes} />
                        <div className="hidden group-hover:flex flex-row gap-2 text-white">
                            {/* Tweeter */}
                            <a href="/" className="relative h-6 w-6 rounded-full flex justify-center items-center bg-[#00ACEC]">
                                <FontAwesomeIcon icon={faTwitter} className="absolute text-base" />
                            </a>
                            {/* Dribbble */}
                            <a href="/" className="relative h-6 w-6 rounded-full flex justify-center items-center bg-[#F24E88]">
                                <FontAwesomeIcon icon={faDribbble} className="absolute text-base" />
                            </a>
                            {/* Facebook */}
                            <a href="/" className="relative h-6 w-6 rounded-full flex justify-center items-center bg-[#3A5896]">
                                <FontAwesomeIcon icon={faFacebookF} className="absolute text-base" />
                            </a>
                            {/* Pinterest */}
                            <a href="/" className="relative h-6 w-6 rounded-full flex justify-center items-center bg-[#C72527]">
                                <FontAwesomeIcon icon={faPinterest} className="absolute text-base" />
                            </a>
                        </div>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, nec in adipiscing purus luctus, urna pellentesque fringilla vel, non sed arcu integer, mauris ullamcorper ante ut non torquent. Justo praesent, vivamus eleifend torquent, suspendisse etiam lorem vestibulum, vestibulum in lorem nec vel, sit curabitur dui ligula vehicula quam. Nec...
                </p>
                <div className="flex w-full">
                    <a href="/" className="rounded-2xl bg-white text-primary-color border border-primary-color font-bold px-6 py-3 hover:bg-primary-color hover:text-white">Read More</a>
                </div>
            </div>
        </div>
    )
};

export default BlogItems;