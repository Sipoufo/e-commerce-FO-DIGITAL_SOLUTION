import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const RecentPost = ({image, name, date, id}) => {
    return(
        <div className="flex flex-row w-full h-20 gap-4">
            <div className="w-20 h-full">
                <img src={process.env.PUBLIC_URL + image} alt="recent post" className="object-cover"/>
            </div>
            <div className="flex flex-col h-full justify-between text-base py-2">
                <a href={`/${id}`} className="hover:text-primary-color">{name}</a>
                <p className="text-sm text-gray-400">
                    <FontAwesomeIcon icon={faCalendar} />
                    &nbsp;
                    &nbsp;
                    {date}
                </p>
            </div>
        </div>
    )
}

export default RecentPost;