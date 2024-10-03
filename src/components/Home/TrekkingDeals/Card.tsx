import React from 'react'
import Image from 'next/image'
import { FaRegClock, FaStar } from 'react-icons/fa'
import { IoSpeedometerOutline } from 'react-icons/io5'

const Card = () => {
    return (
        <main className='py-12'>
            <div className='flex flex-col gap-4 w-[97%] rounded-lg relative bg-white custom-trek-card'>
                <section className='h-[200px] w-full'>
                    <Image src="/assets/hero.jpg" alt="Trek" height={1000} width={1000} className='object-cover h-full w-full rounded-t-lg'/>
                </section>
                <section className='px-4 flex flex-col gap-4 mb-6'>
                    <h1 className='font-bold text-xl'>Langtang Valley Trek</h1>
                    <div className='bg-[#EAEAEA] rounded-md px-4 py-3 flex items-center justify-between'>
                        <div className='flex gap-2 items-center'>
                            <FaRegClock size={20} className="text-primary/60 text-bold"/>
                            <p className='text-sm font-semibold'>7-9 Days</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <IoSpeedometerOutline size={20} className="text-primary/60"/>
                            <p className='text-sm font-semibold'>Moderate</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaStar size={16} className="text-primary/60"/>
                            <p className='text-sm font-semibold'>4.5</p>
                        </div>
                    </div>
                    <p className='h-20 overflow-hidden text-sm text-justify'>The Langtang Trek is a popular trekking route in Nepal, located north of Kathmandu near the Tibetan border. It offers stunning views of the Langtang Himalayan range, lush forests, and unique cultural experiences in traditional Tamang and Sherpa villages. The trek typically lasts 7-10 days, taking trekkers through diverse landscapes,</p>
                    <p className='flex self-end underline underline-offset-2 font-medium text-sm text-primary cursor-pointer hover:text-primary/80 transition-colors'>View Details</p>
                </section>
                <p className='absolute top-4 -left-4 text-white z-[100] bg-primary/90 rounded-md text-sm px-4 py-2'>From $1200</p>
            </div>
        </main>
    )
}

export default Card