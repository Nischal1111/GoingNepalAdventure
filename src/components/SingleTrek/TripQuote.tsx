"use client"
import { Button } from '@nextui-org/react';
import React from 'react'
import { trekProps } from './types';
import { FaCircleQuestion } from 'react-icons/fa6';

const TripQuote:React.FC<trekProps> = () => {
    return (
        <main className='bg-primary/30 px-8 py-4 rounded-md flex items-center justify-between my-16'>
            <section className='flex flex-col items-start h-full text-white'>
                <div className='flex items-center gap-4 mb-2'>
                    <FaCircleQuestion size={52} className='text-primary'/>
                    <h1 className='font-semibold text-xl'>Customize your Own Trek</h1>
                </div>
            </section>
            <Button className='bg-primary rounded-md px-12 text-white'>
                Get a Trip Quote
            </Button>
        </main>
    )
}

export default TripQuote
