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
            link:"/tours"
        },
        {
            id: 2,
            title: "Plan your trip",
            desc: "The best views come from the hardest climbs.",
            button: "Explore Treks",
            link:"/trekking"
        },
        {
            id: 3,
            title: "Thrill-Packed Experiences",
            desc: "Discover the thrill beyond the ordinary.",
            button: "Explore Activities",
            link:"/activities"
        }
    ];

    const homeImages = ["/assets/hero.jpg", "/assets/hero2.jpg", "/assets/aboutBG.jpg"];
    
    const [currentSlide, setCurrentSlide] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % homeImages.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    const slideVariants = {
        enter: { opacity: 0, y: 20 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <>
            <main className='custom-main relative text-white lg:h-[90vh] h-[65vh] overflow-hidden'>
                <div className="absolute inset-0 bg-black opacity-20 z-[1]"></div>
                {homeImages.map((img, index) => (
                    <Image 
                        key={img} 
                        src={img} 
                        alt='hero-section' 
                        height={1000} 
                        width={1000} 
                        className={`object-cover lg:h-[90vh] h-[65vh] w-screen z-[0] absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`} 
                    />       
                ))}
                
                <div className='lg:px-20 px-4 flex gap-8 z-[1000] absolute top-[15%]'>
                    <div className='relative lg:h-[50vh] h-[35vh] flex gap-1'>
                        <div className='bg-white w-[1px] h-full'></div>
                        <div className='bg-white w-[1px] h-full relative top-3'></div>
                    </div>
                    
                    <div className='lg:text-2xl text-lg relative mt-20 text-white flex flex-col gap-4'>
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
                                    <h1 className='lg:text-lg text-sm font-bold'>{descSlider[currentSlide].title}</h1>
                                    <div className='bg-white h-[2px] w-32'></div>
                                </motion.div>
                                <motion.h1 
                                    className='font-semibold lg:text-4xl text-xl lg:w-[80%] w-full'
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
                                        <p className='lg:text-base text-xs'>Mountain Vibes</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <PiStarFourFill size={20} />
                                        <p className='lg:text-base text-xs'>Into The Wild</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <PiStarFourFill size={20} />
                                        <p className='lg:text-base text-xs'>Wander Lust</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <Link href={descSlider[currentSlide].link}>
                                        <Button className='rounded-sm lg:mt-10 mt-6 px-12 z-[100] w-fit text-white border hover:bg-primary hover:border-primary border-white bg-transparent'>
                                            {descSlider[currentSlide].button}
                                        </Button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className='absolute -bottom-6 ml-6'>
                        <div className='bg-white w-[40vw] h-[1px]'></div>
                        <div className='bg-white w-[40vw] h-[1px] relative left-3 mt-1'></div>
                    </div>
                </div>

                <div className='absolute top-8 right-8 bg-primary/50 px-3 py-4 rounded-full lg:flex hidden flex-col gap-6 z-[100]'>
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

            <div className='relative z-10 mt-[-4rem]'>
                <SearchSection />
            </div>
        </>
    );
};

export default HeroSection;