"use client"
import { Button } from '@nextui-org/react';
import React, { useState } from 'react'
import { trekProps } from './types';
import { FaCircleQuestion } from 'react-icons/fa6';
import QuoteModal from './RightSide/QuoteModal';

const TripQuote:React.FC<trekProps> = ({title,slug}) => {
    const [isQuote, setIsQuote] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState("");

    const handleQuote = () => {
        setIsQuote(true);
        setText(`I need to customize the trek: ${title}`);
        setIsOpen(true);
    };
    return (
        <main className='bg-primary/30 px-8 py-4 rounded-md flex items-center justify-between my-16'>
            <section className='flex flex-col items-start h-full text-white'>
                <div className='flex items-center gap-4 mb-2'>
                    <FaCircleQuestion size={52} className='text-primary'/>
                    <h1 className='font-semibold text-xl'>Customize this Trek</h1>
                </div>
            </section>
            <Button onPress={handleQuote} className='bg-primary rounded-sm px-12 text-white'>
                Trip Quote
            </Button>
            <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} text={text} trekTitle={title} slug={slug}/>
        </main>
    )
}

export default TripQuote
