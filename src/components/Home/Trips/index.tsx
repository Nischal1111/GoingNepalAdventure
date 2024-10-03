import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

const Trips = () => {
    const trips=[
        {
            id:1,
            title:"Luxury Tours",
            count:7,
            img:"/assets/trips/luxury.avif",
            button:"View all treks"
        },
        {
            id:2,
            title:"Climbing and Expeditions",
            count:27,
            img:"/assets/hero.jpg",
            button:"View all treks"
        },
        {
            id:3,
            title:"Cultural Tour and Sightseeing",
            count:23,
            img:"/assets/trips/culture.avif",
            button:"View all treks"
        },
        {
            id:4,
            title:"Nepal Excursion Tours",
            count:32,
            img:"/assets/tour.avif",
            button:"View all treks"
        },
        {
            id:5,
            title:"Wellness, Yoga & Meditation ",
            count:4,
            img:"/assets/trips/yoga.avif",
            button:"View all treks"
        },
        {
            id:6,
            title:"Festival Celebration Tour",
            count:12,
            img:"/assets/trips/festival.avif",
            button:"View all treks"
        },
    ]
    return (
        <main className='px-16 mt-24 flex flex-col items-center justify-center'>
            <SharedTitle title='Trips and Tours' subTitle='Trips and Tours'/>
            <section className='w-[90%] grid grid-cols-2 gap-x-8 gap-y-4 my-20 place-content-center'>
                {trips.map(item=>{
                    return(
                        <div key={item.title} className='h-[150px] w-full relative'>
                            <div className='inset-0 absolute bg-black/40 rounded-md '></div>
                            <Image src={item.img} alt={item.title} height={1000} width={1000} className='object-cover h-full w-full rounded-md'/>
                            <h1 className='font-bold text-xl absolute left-4 bottom-4 text-white'>{item.title}</h1>
                            <p className='absolute right-0 top-0 bg-primary/80 px-6 py-2 text-xs rounded-bl-xl text-white'>{item.count} Tours</p>
                            <Button className='absolute right-2 bottom-4 bg-transparent border border-white rounded-md hover:bg-primary hover:border-primary px-4 py-1 text-xs text-white'>View all details</Button>
                        </div>
                        
                    )
                })}
            </section>
            <div className='flex items-center justify-center'>
                <Link href={"/tours"}>
                    <Button className=' w-fit bg-primary rounded-md -mt-8 text-white px-8'>View other trips</Button>
                </Link>
            </div>
        </main>
    )
}

export default Trips
