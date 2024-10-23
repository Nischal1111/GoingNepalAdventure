"use client"
import React, { useState } from 'react'
import { trekProps } from '../types'
import { Avatar, Button } from '@nextui-org/react'
import { rowdies } from '@/utility/font'
import QuoteModal from './QuoteModal'
import Image from 'next/image'
import Link from 'next/link'

const RightSide: React.FC<trekProps> = ({ price, title }) => {
    const [isQuote, setIsQuote] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
    const [isCustomize, setIsCustomize] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState("");

    const handleQuote = () => {
        setIsQuote(true);
        setIsCustomize(false);
        setText(`I need a quotation for the trek: ${title}`);
        setIsOpen(true);
    };

    const handleCustomize = () => {
        setIsQuote(false);
        setIsCustomize(true);
        setText(`I need to customize this quotation for the trek: ${title}`);
        setIsOpen(true);
    };

    return (
        <>
        
            <div className='flex flex-col sticky top-12 py-2 z-[2]'>
                <div className='custom-right bg-white rounded-sm pt-6 pb-8 flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-3xl font-bold'>{price} <span className='text-gray-600 text-lg font-light'>/ person</span></h1>
                    <Button className='bg-primary text-white px-16 rounded-sm mt-4' onPress={handleQuote}>Get a trip quote</Button>
                    <Button className='bg-transparent border hover:bg-primary hover:text-white border-primary px-16 rounded-sm' onPress={handleCustomize}>Customize trek</Button>
                </div>
            </div>
                <div className='bg-white mt-4 rounded-sm custom-right px-8 flex flex-col gap-4 items-center justify-center py-4'>
                    <h1 className={`${rowdies.className} text-2xl`}>Speak to expert</h1>
                    <div className="flex -gap-2 items-center my-2">
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size='lg' className='-mr-2'/>
                        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className='w-20 h-20 text-large z-[1]'/>
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size='lg' className='-ml-2'/>
                    </div>
                    <p className='flex gap-2 items-center font-semibold text-sm'><span className='text-gray-500 text-light'>Whatsapp</span>+977 98757382933</p>
                </div>
                <div className='bg-white shadow-md rounded-md'>
                    <div className='flex w-full flex-col gap-6 py-4 mt-4 rounded-md shadow-md items-center justify-center'>
                        <h1 className={`${rowdies.className} text-2xl`}>Explore more treks</h1>
                        <div className='flex flex-col w-full items-center justify-center gap-4'>
                            <div className='flex px-4 w-full  items-start gap-4'>
                                <div className='w-[25%] h-[70px]'>
                                    <Image src="/assets/tour.avif" alt='tour' height={1000} width={1000} className='object-cover h-full w-full rounded-md'/>
                                </div>
                                <h1 className='font-semibold text-lg w-[70%]'>Langtang Trek : 7 Days</h1>
                            </div>
                            <div className='flex px-4 w-full  items-start gap-4'>
                                <div className='w-[25%] h-[70px]'>
                                    <Image src="/assets/faqBG.jpeg" alt='tour' height={1000} width={1000} className='object-cover h-full w-full rounded-md'/>
                                </div>
                                <h1 className='font-semibold text-lg w-[70%]'>Annapurna Circuit Trek : 15 - 17 Days</h1>
                            </div>
                            <div className='flex px-4 w-full  items-start gap-4'>
                                <div className='w-[25%] h-[70px]'>
                                    <Image src="/assets/about1.jpg" alt='tour' height={1000} width={1000} className='object-cover h-full w-full rounded-md'/>
                                </div>
                                <h1 className='font-semibold text-lg w-[70%]'>Tso Rolpa Altitude Trek : 11 - 13 Days</h1>
                            </div>
                            <div className='flex px-4 w-full  items-start gap-4'>
                                <div className='w-[25%] h-[70px]'>
                                    <Image src="/assets/trek.jpeg" alt='tour' height={1000} width={1000} className='object-cover h-full w-full rounded-md'/>
                                </div>
                                <h1 className='font-semibold text-lg w-[70%]'>Manaslu Tsum Valley Trek : 15 Days</h1>
                            </div>
                        </div>
                        <Link href={"/trekking"}>
                            <Button className='bg-transparent hover:underline hover:underline-offset-2 -my-2 text-primary text-sm'>View more treks</Button>
                        </Link>
                    </div>
                </div>
            <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} text={text} trekTitle={title}/>
        </>
    );
};

export default RightSide;
