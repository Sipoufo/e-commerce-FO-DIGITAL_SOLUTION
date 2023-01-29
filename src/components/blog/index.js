import React from "react";
import AboutUs from "./aboutUs";
import BlogItems from "./blogItem";
import Categories from "./categories";
import LatestPost from "./latestPosts";
import Subscribe from "./subscribe";
import Tags from "./tags";

const IndexBlog = () => {
    return(
        <div className="w-full flex justify-center text-black text-sm py-20">
            <div className="flex flex-col max-w-screen-xl w-full gap-4 justify-center">
                <h1 className="text-4xl text-center">Blog Standard</h1>
                <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet, nec in adipiscing purus luctus, urna pellentesque fringilla vel</p>
                <div className="w-full flex flex-col md:flex-row gap-10 mt-10">
                    {/* Blog Items */}
                    <div className="w-full sm:w-8/12 flex flex-col gap-10">
                        <BlogItems image="/images/blog1.jpg" type="Development, Finance" title="We Help Your Time Work For Your Money." date="AUG 27, 2015" author="BY PETER WARREN" nbLikes="26" nbComment="3" />
                        <BlogItems image="/images/blog2.jpg" type="Development, Finance" title="We Help Your Time Work For Your Money." date="AUG 27, 2015" author="BY PETER WARREN" nbLikes="26" nbComment="3" />
                        <BlogItems type="Development, Finance" title="We Help Your Time Work For Your Money." date="AUG 27, 2015" author="BY PETER WARREN" nbLikes="26" nbComment="3" />
                    </div>
                    {/* Blog other */}
                    <div className="w-full sm:w-4/12 flex flex-col gap-6">
                        {/* About */}
                        <AboutUs />
                        {/* Category */}
                        <Categories />
                        {/* Latest Post */}
                        <LatestPost />
                        {/* Subscribe To Newsletter */}
                        <Subscribe />
                        {/* Tags */}
                        <Tags />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default IndexBlog;