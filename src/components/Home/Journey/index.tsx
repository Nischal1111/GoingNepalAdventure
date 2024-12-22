"use client"
import SharedTitle from '@/shared/SharedTitle'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Rowdies } from 'next/font/google'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

const rowdies = Rowdies({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const Journey = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const bhutanImages = ["/assets/bhutan/b1.avif", "/assets/bhutan/b2.avif", "/assets/bhutan/b3.avif", "/assets/bhutan/b4.avif"];
    const tibetImages = ["/assets/tibet/t1.avif", "/assets/tibet/t2.avif", "/assets/tibet/t3.avif", "/assets/tibet/t4.avif"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % bhutanImages.length);
        }, 4000); 

        return () => clearInterval(intervalId);
    }, []);

    return (
        <main className='lg:px-16 px-4 flex flex-col gap-12'>
            <SharedTitle title='Plan your Trips' subTitle='Plan your Trips'/>
            <section className='lg:px-12 px-4 flex flex-col gap-4 w-full'>
                <div className='w-full flex lg:flex-row flex-col items-start lg:h-[220px] h-[660px] gap-4'>
                    <div className='lg:w-1/3 w-full h-full relative flex items-center justify-center overflow-hidden rounded-md'>
                        {bhutanImages.map((img, index) => (
                            <Image 
                                key={img}
                                src={img} 
                                alt={`Bhutan ${index + 1}`} 
                                layout="fill"
                                objectFit="cover"
                                className={`absolute transition-opacity duration-1000 ease-in-out ${
                                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                            />
                        ))}
                        <div className='absolute inset-0 bg-black/40 z-20'></div>
                        <p className={`${rowdies.className} lg:text-5xl text-xl lg:tracking-widest tracking-normal absolute text-white z-30`}>Bhutan</p>
                    </div>
                    <div className='lg:w-1/3 w-full h-full relative flex flex-col gap-2 items-center justify-start'>
                        <h1 className='font-semibold lg:text-xl text-lg'>Exploring Hidden Trails: Unforgettable Treks in the Himalayas</h1>
                        <p className='lg:text-base text-xs'>Nepal, Bhutan and Tibet are Himalayan gems, offering stunning landscapes, rich cultural heritage and unique trekking adventures through some of the world&apos;s most majestic mountain ranges.</p>
                        <Link href={"/plan-trip"}>
                            <Button className='rounded-md bg-primary px-10 text-white lg:mt-2 mt-4'>Plan your trip</Button>
                        </Link>
                    </div>
                    <div className='lg:w-1/3 w-full h-full relative flex items-center justify-center rounded-md overflow-hidden'>
                        {tibetImages.map((img, index) => (
                            <Image 
                                key={img}
                                src={img} 
                                alt={`Bhutan ${index + 1}`} 
                                layout="fill"
                                objectFit="cover"
                                className={`absolute transition-opacity duration-1000 ease-in-out ${
                                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                            />
                        ))}
                        <div className='absolute inset-0 bg-black/40'></div>
                        <p className={`${rowdies.className} lg:text-5xl text-xl lg:tracking-widest tracking-normalt absolute text-white z-10`}>Tibet</p>
                    </div>
                </div>
                <div className='w-full flex items-start h-[220px] gap-4'>
                    <div className='lg:w-1/3 w-full flex h-full relative items-center justify-center'>
                        <Image src={"/assets/why.jpg"} alt='Bhutan' height={1000} width={1000} className='w-full h-full object-cover rounded-md' />
                        <div className='h-full w-full bg-black/40 rounded-md inset-0 absolute'></div>
                        <p className={`${rowdies.className} lg:text-5xl text-xl lg:tracking-widest tracking-normal absolute text-white`}>Nepal</p>
                    </div>
                    <div className='w-1/3 h-full relative lg:flex hidden items-center justify-center'>
                        <Image src={"/assets/hero.jpg"} alt='Bhutan' height={1000} width={1000} className='w-full h-full object-cover rounded-md' />
                        <div className='h-full w-full bg-black/40 rounded-md inset-0 absolute'></div>
                        <p className={`${rowdies.className} text-5xl tracking-widest absolute text-white`}>Nepal</p>
                    </div>
                    <div className='w-1/3 h-full relative lg:flex hidden items-center justify-center'>
                        <Image src={"/assets/tour.avif"} alt='Bhutan' height={1000} width={1000} className='w-full h-full object-cover rounded-md' />
                        <div className='h-full w-full bg-black/40 rounded-md inset-0 absolute'></div>
                        <p className={`${rowdies.className} text-5xl tracking-widest absolute text-white`}>Nepal</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Journey