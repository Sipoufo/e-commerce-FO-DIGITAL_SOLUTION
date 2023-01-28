import React from "react";

const Categories = () => {
    return(
        <div className="w-full flex flex-col p-6 gap-2 bg-white border border-gray-200 shadow-lg">
            <h1 className="text-xl">Categories</h1>
            <div className="w-6 border border-primary-color"></div>
            <div className="flex flex-col gap-2 mt-2 text-gray-600">
                <div className="flex flex-row gap-2">
                    <a href="/blog" className="hover:text-primary-color">Business</a>
                    <p>(9)</p>
                </div>
                <div className="w-full border-t border-gray-300"></div>
                <div className="flex flex-row gap-2">
                    <a href="/blog" className="hover:text-primary-color">Capital</a>
                    <p>(9)</p>
                </div>
                <div className="w-full border-t border-gray-300"></div>
                <div className="flex flex-row gap-2">
                    <a href="/blog" className="hover:text-primary-color">Development</a>
                    <p>(8)</p>
                </div>
                <div className="w-full border-t border-gray-300"></div>
                <div className="flex flex-row gap-2">
                    <a href="/blog" className="hover:text-primary-color">Economy</a>
                    <p>(11)</p>
                </div>
                <div className="w-full border-t border-gray-300"></div>
                <div className="flex flex-row gap-2">
                    <a href="/blog" className="hover:text-primary-color">Featured</a>
                    <p>(3)</p>
                </div>
                <div className="w-full border-t border-gray-300"></div>
                <div className="flex flex-row gap-2">
                    <a href="/blog" className="hover:text-primary-color">Finance</a>
                    <p>(10)</p>
                </div>
                <div className="w-full border-t border-gray-300"></div>
                <div className="flex flex-row gap-2">
                    <a href="/blog" className="hover:text-primary-color">Marketing</a>
                    <p>(3)</p>
                </div>
                <div className="w-full border-t border-gray-300"></div>
                <div className="flex flex-row gap-2">
                    <a href="/blog" className="hover:text-primary-color">Strategy</a>
                    <p>(4)</p>
                </div>
                <div className="w-full border-t border-gray-300"></div>
                <div className="flex flex-row gap-2">
                    <a href="/blog" className="hover:text-primary-color">Technology</a>
                    <p>(10)</p>
                </div>
                <div className="w-full border-t border-gray-300"></div>
                <div className="flex flex-row gap-2">
                    <a href="/blog" className="hover:text-primary-color">Trade</a>
                    <p>(3)</p>
                </div>
            </div>
        </div>
    )
};

export default Categories;