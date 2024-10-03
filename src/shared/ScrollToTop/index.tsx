"use client";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className="shadow-2xl transition duration-300 hover:-translate-y-1 size-[3rem]  flex items-center p-1 justify-center rounded-full fixed lg:bottom-12 bottom-16 lg:right-12 right-8 bg-primary z-[999] cursor-pointer"
            onClick={handleTop}
        >
            <AiOutlineArrowUp size={25} className="text-white"/>
        </button>
    );
};

export default ScrollToTop;
