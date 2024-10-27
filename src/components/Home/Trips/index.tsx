import SharedTitle from '@/shared/SharedTitle';
import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

const Trips = () => {
    const trips = [
        {
            id: 1,
            title: "Luxury Tours",
            count: 7,
            img: "/assets/trips/luxury.avif",
            button: "View all treks"
        },
        {
            id: 2,
            title: "Climbing and Expeditions",
            count: 27,
            img: "/assets/hero.jpg",
            button: "View all treks"
        },
        {
            id: 3,
            title: "Cultural Tour and Sightseeing",
            count: 23,
            img: "/assets/trips/culture.avif",
            button: "View all treks"
        },
        {
            id: 4,
            title: "Nepal Excursion Tours",
            count: 32,
            img: "/assets/tour.avif",
            button: "View all treks"
        },
        {
            id: 5,
            title: "Wellness, Yoga & Meditation ",
            count: 4,
            img: "/assets/trips/yoga.avif",
            button: "View all treks"
        },
        {
            id: 6,
            title: "Festival Celebration Tour",
            count: 12,
            img: "/assets/trips/festival.avif",
            button: "View all treks"
        },
    ];
    
    const trekbg = "/assets/mountBG.png";
    
    return (
        <main className='px-16 mt-16 flex flex-col items-center justify-center relative'>
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
            <p className='px-16'>We offer a range of tour options, including cultural, luxury, wildlife, pilgrimage, day trips, and climbing and expeditions. These options cater to various interests and preferences, ensuring unforgettable experiences in the Himalayas, with personalized services.We offer a range of tour options, including cultural, luxury, wildlife, pilgrimage, day trips, and climbing and expeditions. These options cater to various interests and preferences, ensuring unforgettable experiences in the Himalayas, with personalized services.</p>
            <section className='w-[90%] grid grid-cols-2 gap-x-8 gap-y-4 my-12 place-content-center'>
                {trips.map(item => (
                    <div key={item.id} className='h-[150px] w-full relative group overflow-hidden cursor-pointer'>
                        <div className='absolute inset-0 bg-black/40 rounded-md z-10 transition-opacity duration-300'></div>
                        <Image 
                            src={item.img} 
                            alt={item.title} 
                            height={1000} 
                            width={1000} 
                            className='object-cover h-full w-full rounded-md transition-transform duration-300 group-hover:scale-110'
                        />
                        <h1 className='font-bold text-xl absolute left-4 bottom-4 text-white z-20'>{item.title}</h1>
                        <p className='absolute right-0 top-0 bg-primary/80 px-6 py-2 text-xs rounded-bl-xl text-white z-20'>{item.count} Tours</p>
                        <Button className='absolute right-2 bottom-4 bg-transparent group-hover:bg-primary border border-white rounded-md hover:bg-primary hover:border-primary px-4 py-1 text-xs text-white z-20'>View all details</Button>
                    </div>
                ))}
            </section>
            <div className='flex items-center justify-center my-12'>
                <Link href={"/tours"}>
                    <Button className='w-fit bg-primary rounded-md -mt-8 text-white px-8'>View other trips</Button>
                </Link>
            </div>
        </main>
    );
};

export default Trips;