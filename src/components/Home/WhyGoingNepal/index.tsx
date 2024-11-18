import SharedTitle from '@/shared/SharedTitle'
import React from 'react'

import { BsArrowRight } from 'react-icons/bs'
import { IoLocation } from 'react-icons/io5'
import { FaInfoCircle, FaUserShield } from 'react-icons/fa'
import { GiGearHammer } from 'react-icons/gi'
import Info from './Info'
import Link from 'next/link'

const WhyGoingNepal = () => {
    const sections = [
    {
        title: "Trekking Destinations",
        icon:<IoLocation size={18}/>,
        description: "Explore a curated list of the world&apos;s most stunning trekking locations, from serene forest trails to rugged mountain paths."
    },
    {
        title: "Guided Tours",
        icon:<FaUserShield size={18}/>,
        description: "Join our expert-led trekking tours for an unforgettable journey. We offer tailored treks to suit your experience and fitness level."
    },
    {
        title: "Gear Recommendations",
        icon:<GiGearHammer size={18}/>,
        description: "Find out what gear you need to make your trek safe and enjoyable, from boots to backpacks, with our detailed reviews."
    },
    {
        title: "Trekking Tips",
        icon:<FaInfoCircle size={18}/>,
        description: "Get expert advice on trekking techniques, safety protocols, and preparation strategies to enhance your trekking experience."
    }
];

return (
    <main className='w-full px-32 py-16'>
        <section className='relative flex gap-32 items-center'>
            <Info/>
            <div className='w-full relative'>
                <SharedTitle title='Why Us' subTitle='Going Nepal Adventure'/>
                <p className='text-sm text-justify'>At Going Nepal, we are passionate about exploring the great outdoors. Our mission is to help adventurers discover breathtaking trekking routes across the globe. Whether you&apos;re a beginner or an experienced trekker, we provide expert guidance and resources to make your next trek unforgettable.</p>
                <div className='grid grid-cols-2 gap-x-8 gap-y-4 mt-8'>
                    {sections.map((section,index)=>{
                        return(
                            <div key={index} className='bg-primary/90 rounded-md p-2 px-4 text-white'>
                                <div className='flex gap-2 items-center'>
                                    {section.icon}
                                    <h1 className='font-semibold text-lg'>{section.title}</h1>
                                </div>
                                <p className='text-xs font-light mt-2 text-justify'>{section.description}</p>
                            </div>
                        )
                    })}
                </div>
                <Link href={"/about-us"}>
                    <div className='flex items-center gap-1 justify-end mt-12 text-primary text-sm cursor-pointer group'>
                        <p className=' font-semibold underline underline-offset-2'>More about us</p>
                        <BsArrowRight className='transform transition-transform duration-200 group-hover:translate-x-2' />
                    </div>
                </Link>
            </div>
        </section>
    </main>
    )
}

export default WhyGoingNepal
