"use client"
import SharedTitle from '@/shared/SharedTitle';
import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getTourTypes } from '@/services/tour';

const Trips = () => {

    const {data:tourTypesData}=useQuery({
        queryKey: ['tourTypesTrips'],
        queryFn:()=>getTourTypes(),
    })

    
    const trekbg = "/assets/mountBG.png";
    
    return (
        <main className='lg:px-16 px-4 mt-16 flex flex-col items-center justify-center relative'>
            <div 
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: `url(${trekbg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    opacity: 0.3,
                }}
            ></div>
            <SharedTitle title='Trips and Tours' subTitle='Trips and Tours'/>
            <p className='lg:px-16 px-0 lg:pt-0 pt-8 text-justify'>We offer a range of tour options, including cultural, luxury, wildlife, pilgrimage, day trips, and climbing and expeditions. These options cater to various interests and preferences, ensuring unforgettable experiences in the Himalayas, with personalized services.We offer a range of tour options, including cultural, luxury, wildlife, pilgrimage, day trips, and climbing and expeditions. These options cater to various interests and preferences, ensuring unforgettable experiences in the Himalayas, with personalized services.</p>
            <section className='lg:w-[90%] w-full grid grid-cols-2 gap-x-8 gap-y-4 my-12 place-content-center'>
                {tourTypesData?.data?.map((item:any) => ( //eslint-disable-line @typescript-eslint/no-explicit-any
                    <div key={item._id} className='lg:h-[250px] h-[160px] w-full relative group overflow-hidden cursor-pointer'>
                        <div className='absolute inset-0 bg-black/40 rounded-md z-10 transition-opacity duration-300'></div>
                        <Image 
                            src={item.coverImage} 
                            alt={item.title} 
                            height={1000} 
                            width={1000} 
                            className='object-cover h-full w-full rounded-md transition-transform duration-300 group-hover:scale-110'
                        />
                        <h1 className='font-bold text-xl absolute left-4 bottom-4 text-white z-20'>{item.title}</h1>
                        <p className='absolute right-0 top-0 bg-primary/80 px-6 py-2 text-xs rounded-bl-xl text-white z-20'>{item.totalTours} Tours</p>
                    </div>
                ))}
            </section>
            <div className='flex items-center justify-center my-12'>
                <Link href={"/tours"}>
                    <Button className='w-fit bg-primary rounded-md -mt-8 text-white px-8'>View all trips</Button>
                </Link>
            </div>
        </main>
    );
};

export default Trips;