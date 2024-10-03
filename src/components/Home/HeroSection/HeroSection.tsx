"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { PiStarFourFill } from "react-icons/pi";
import SearchSection from './SearchSection';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

const HeroSection = () => {
    const descSlider = [
        {
            id: 1,
            title: "Go on a journey",
            desc: "Elevate your adventure with wonderful moments.",
            button: "Explore Tours",
        },
        {
            id: 2,
            title: "Plan your trip",
            desc: "The best views come from the hardest climbs.",
            button: "Explore Treks",
        },
        {
            id: 3,
            title: "Thrill-Packed Experiences",
            desc: "Discover the thrill beyond the ordinary.",
            button: "Explore Activities",
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % descSlider.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [descSlider.length]);

    const slideVariants = {
        enter: { opacity: 0, y: 20 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <>
            <main className='custom-main relative text-white'>
                <div className="absolute inset-0 bg-black opacity-20 z-[1]"></div>
                <Image src="/assets/hero.jpg" alt='hero-section' height={1000} width={1000} className='object-cover h-[90vh] w-screen z-[0]' />
                
                <div className='px-20 flex gap-8 z-[1000] absolute top-[15%]'>
                    <div className='relative h-[50vh] flex gap-1'>
                        <div className='bg-white w-[1px] h-full'></div>
                        <div className='bg-white w-[1px] h-full relative top-3'></div>
                    </div>
                    
                    <div className='text-2xl relative mt-20 text-white flex flex-col gap-4'>
                        <AnimatePresence mode="wait">
                            <motion.div
                                className='flex flex-col gap-4'
                                key={descSlider[currentSlide].id}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div 
                                    className='flex items-center gap-4'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h1 className='text-lg font-bold'>{descSlider[currentSlide].title}</h1>
                                    <div className='bg-white h-[2px] w-32'></div>
                                </motion.div>
                                <motion.h1 
                                    className='font-semibold text-4xl w-[80%]'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {descSlider[currentSlide].desc}
                                </motion.h1>
                                <motion.div 
                                    className='flex gap-4 items-center text-sm'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <div className='flex gap-2 items-center'>
                                        <PiStarFourFill size={20} />
                                        <p>Mountain Vibes</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <PiStarFourFill size={20} />
                                        <p>Into The Wild</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <PiStarFourFill size={20} />
                                        <p>Wander Lust</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <Button className='rounded-sm mt-10 px-12 z-[100] w-fit text-white border hover:bg-primary hover:border-primary border-white bg-transparent'>
                                        {descSlider[currentSlide].button}
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                    </div>
                    <div className='absolute -bottom-6 ml-6'>
                        <div className='bg-white w-[40vw] h-[1px]'></div>
                        <div className='bg-white w-[40vw] h-[1px] relative left-3 mt-1'></div>
                    </div>
                </div>

                <div className='absolute top-8 right-8 bg-primary/50 px-3 py-4 rounded-full flex flex-col gap-6 z-[100]'>
                    <Link href={"https://www.facebook.com/going2nepal/"} target='_blank'>
                        <FiFacebook size={22} className='transition duration-300 hover:scale-[1.3]'/>
                    </Link>
                    <Link href={"https://www.instagram.com/goingnepal/"} target='_blank'>
                        <FaInstagram size={20} className='transition duration-300 hover:scale-[1.3]'/>      
                    </Link>
                    <Link href={"https://x.com/goingnepal"} target='_blank'>      
                        <FaXTwitter size={20} className='transition duration-300 hover:scale-[1.3]'/>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/liladhar-bhandari-1b4832140/?originalSubdomain=np"} target='_blank'>      
                        <FaLinkedin size={20} className='transition duration-300 hover:scale-[1.3]'/>
                    </Link>
                </div>
            </main>

            <div className='relative top-[-4rem]'>
                <SearchSection />
            </div>
        </>
    );
};

export default HeroSection;