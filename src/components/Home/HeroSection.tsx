import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import SearchSection from './SearchSection';

const HeroSection = () => {
    return (
        <>
            <main className='custom-main relative text-white'>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-20 z-[1]"></div>
            <Image src="/assets/hero.jpeg" alt='hero-section' height={1000} width={1000} className='object-cover h-[90vh] w-screen z-[0]'/>
            <div className='px-20 flex gap-8 z-[1000] absolute top-[15%]'>
                <div className='relative h-[50vh] flex gap-1'>
                    <div className='bg-white w-[1px] h-full'></div>
                    <div className='bg-white w-[1px] h-full relative top-3'></div>
                </div>
                <div className='text-2xl relative mt-20 text-white flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                        <h1 className='text-lg font-bold'>Plan your trip</h1>
                        <div className='bg-white h-[2px] w-32'></div>
                    </div>
                    <h1 className='font-semibold text-4xl w-[90%]'>The best views come from the hardest climbs.</h1>
                    <div className='flex gap-4 items-center text-sm'>
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
                    </div>
                    <Button className='rounded-sm mt-10 px-12 w-fit text-white border hover:bg-primary hover:border-primary border-white bg-transparent'>
                        Explore Treks
                    </Button>
                    <div className='relative mt-12 -left-8 flex flex-col gap-1'>
                        <div className='bg-white w-[90%] h-[1px]'></div>
                        <div className='bg-white w-[90%] h-[1px] relative left-3'></div>
                    </div>
                    </div>
            </div>
            </main>
            <div className='relative top-[-4rem]'>
                <SearchSection/>
            </div>
        </>
    );
};

export default HeroSection;
