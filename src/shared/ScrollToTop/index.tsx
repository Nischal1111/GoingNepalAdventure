"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
    const [visible, setVisible] = React.useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 500) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {visible && (
                <Button
                    isIconOnly
                    className="border border-white shadow-2xl transition duration-300 hover:-translate-y-1 size-[3rem] flex items-center p-1 justify-center rounded-full fixed lg:bottom-32 bottom-16 lg:right-9 right-8 bg-primary z-[999] cursor-pointer"
                    onClick={handleTop}
                >
                    <AiOutlineArrowUp size={25} className="text-white" />
                </Button>
            )}
        </>
    );
};

export default ScrollToTop;
