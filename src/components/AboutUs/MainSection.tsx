import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import Image from 'next/image'
import { rowdies } from '@/utility/font'
import { IoLocation } from 'react-icons/io5'
import { FaGlobeAsia, FaInfoCircle, FaRunning, FaShieldAlt, FaUserShield } from 'react-icons/fa'
import { GiGearHammer } from 'react-icons/gi'
import { WiCloud } from 'react-icons/wi'

const MainSection = () => {
    const sections = [
        {
            title: "Destinations",
            icon: <IoLocation size={18} />,
            description: "Discover breathtaking trekking spots, from serene forest trails to rugged mountain paths."
        },
        {
            title: "Guided Treks",
            icon: <FaUserShield size={18} />,
            description: "Join our expert-led treks, tailored to match your experience and fitness level."
        },
        {
            title: "Gear Guide",
            icon: <GiGearHammer size={18} />,
            description: "Get gear recommendations to ensure a safe and enjoyable trek, from boots to backpacks."
        },
        {
            title: "Trekking Tips",
            icon: <FaInfoCircle size={18} />,
            description: "Expert advice on techniques, safety, and preparation for your trekking adventures."
        },
        {
            title: "Weather Updates",
            icon: <WiCloud size={18} />,
            description: "Stay informed with real-time weather updates to plan your treks perfectly."
        },
        {
            title: "Fitness Prep",
            icon: <FaRunning size={18} />,
            description: "Learn how to prepare physically for your trek, with tailored fitness advice."
        },
        {
            title: "Local Culture",
            icon: <FaGlobeAsia size={18} />,
            description: "Immerse yourself in the local culture and traditions as part of your trekking journey."
        },
        {
            title: "Safety First",
            icon: <FaShieldAlt size={18} />,
            description: "Understand essential safety protocols to ensure a worry-free trekking experience."
        }
    ];

    return (
        <main className='px-16 flex items-center justify-center flex-col'>
            <SharedTitle title='We are' subTitle='Going Nepal Adventure'/>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-center font-bold text-lg text-primary'>
                    <p>{'"Your Gateway to Unforgettable Himalayan Adventures"'}</p>
                </div>
                <p className='text-justify text-base'>Going Nepal Adventure is a premier trekking company that specializes in curating unique, personalized trekking experiences across Nepal&apos;s most iconic and hidden trails. With years of expertise, we bring adventurers closer to the natural beauty of Nepal, from the towering peaks of the Himalayas to the lush, green valleys. Our approach combines adventure with cultural immersion, offering treks that showcase not just the physical grandeur of Nepal, but also its rich traditions and local way of life. Whether you&apos;re an experienced trekker or a beginner, we provide custom itineraries that ensure you experience the best of what Nepal has to offer.</p>
            </div>

            <section className='flex gap-12 items-center w-full mt-16'>
                <div className='relative group overflow-hidden w-2/5 h-[400px]'>
                    <div className='w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'>
                        <Image 
                            src="/assets/about1.jpg" 
                            alt='about-img1' 
                            layout='fill'
                            objectFit='cover'
                            className='rounded-md'
                        />
                    </div>
                </div>
                <div className='flex flex-col w-3/5 gap-4 py-8'>
                    <h1 className={`${rowdies.className} text-4xl w-full flex `}>Our Story</h1>
                    <div className='flex items-center justify-start font-bold text-lg text-primary'>
                        <p>{'"From the Foothills to the Peaks: Our Journey"'}</p>
                    </div>
                    <p className='text-justify text-base'>Going Nepal Adventure was born from a group of friends with a deep passion for exploring Nepal&apos;s mountains. What began as casual treks among locals soon evolved into a professional trekking company, aimed at sharing the thrill of these experiences with the world. Our founders, all seasoned trekkers, understood the challenges and joys of navigating Nepal&apos;s diverse landscapes, and they committed to building a company that would offer both adventure and security. Today, our company stands as a beacon for adventure seekers worldwide, providing safe, guided journeys through Nepal&apos;s most captivating trails, always with a focus on local culture, sustainability, and unforgettable experiences.</p>
                </div>
            </section>

            <div className='w-full relative my-20 items-center justify-center flex flex-col gap-4'>
                <div className='flex items-center justify-center'>
                    <h1 className={`${rowdies.className} text-4xl w-full`}>Why Going Nepal Adenture</h1>
                </div>
                    <div className='flex items-center justify-start font-bold text-lg text-primary'>
                        <p>{'"Expert Guides, Personalized Service, and Unforgettable Memories"'}</p>
                    </div>
                <p className='text-base text-justify'>At Going Nepal Adventure, we pride ourselves on providing more than just trekking tours—we offer personalized, memorable experiences that last a lifetime. Our team of certified, experienced guides has an intimate knowledge of Nepal’s terrain, weather, and culture, ensuring that every aspect of your trek is smooth, safe, and enriching. </p>
                <div className='grid grid-cols-3 gap-x-8 gap-y-4 mt-8'>
                    {sections.map((section,index)=>{
                        return(
                            <div key={index} className='bg-primary/90 duration-200 transition-all cursor-pointer hover:bg-primary rounded-md py-4 px-6 text-white'>
                                <div className='flex gap-2 items-center'>
                                    {section.icon}
                                    <h1 className='font-semibold text-lg'>{section.title}</h1>
                                </div>
                                <p className='text-sm font-light mt-2 text-justify'>{section.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <section className='flex flex-row-reverse gap-12 items-center w-full mt-16'>
                <div className='relative group overflow-hidden w-2/5 h-[400px]'>
                    <div className='w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'>
                        <Image 
                            src="/assets/about2.jpg" 
                            alt='about-img1' 
                            layout='fill'
                            objectFit='cover'
                            className='rounded-md'
                        />
                    </div>
                </div>
                <div className='flex flex-col w-3/5 gap-4 py-8'>
                    <h1 className={`${rowdies.className} text-4xl w-full flex `}>Our Mission</h1>
                    <div className='flex items-center justify-start font-bold text-lg text-primary'>
                        <p>{'"Bringing You Closer to Nature, One Trek at a Time"'}</p>
                    </div>
                    <p className='text-justify text-base'>At Going Nepal Adventure, our mission is to help adventurers connect with the pristine beauty of Nepal in a meaningful way. We believe that trekking is more than just a physical journey—it’s an opportunity to immerse yourself in the landscapes, people, and culture that make Nepal unique. We strive to offer trekking experiences that are safe, sustainable, and personalized to each individual’s desires. From high-altitude expeditions like Everest Base Camp to off-the-beaten-path treks in lesser-known regions, we tailor each journey to ensure every trekker finds their perfect adventure. We are also committed to sustainable tourism, ensuring that the beauty of Nepal is preserved for generations to come.</p>
                </div>
            </section>

            <div className='w-full relative my-20 items-center justify-center flex flex-col gap-4'>
                <div className='flex items-center justify-center'>
                    <h1 className={`${rowdies.className} text-4xl w-full`}>Meet Our Team of Travel Experts</h1>
                </div>
                    <div className='flex items-center justify-start font-bold text-lg text-primary'>
                        <p>{'" Passionate Professionals Creating Unforgettable Journeys"'}</p>
                    </div>
                <p className='text-base text-justify'>
                    At Going Nepal, our team of experienced travel professionals is dedicated to crafting unforgettable travel experiences. With years of industry expertise, we specialize in creating personalized itineraries for all types of trips, from romantic getaways to family vacations and adventure excursions. We take the time to understand our clients' preferences to ensure each journey is tailored to their needs. Beyond planning, we provide exceptional customer service throughout the travel process, offering support from booking to arrival. We believe travel is about connecting with people and cultures, and we aim to make every trip both memorable and meaningful. Let us help plan your next adventure!
                </p>
                <div className='grid grid-cols-3 gap-x-32 gap-y-4 mt-12'>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={"/assets/ceo.jpg"} alt='ceo' height={1000} width={1000} className='object-cover rounded-md shadow-lg h-[300px]'/>
                        <h1 className='text-xl font-semibold mt-4'>Lila Dhar Bhandari</h1>
                        <p className='text-primary text-lg font-bold mt-2'>CEO</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={"/assets/account.jpg"} alt='ceo' height={1000} width={1000} className='object-cover rounded-md shadow-lg h-[300px]'/>
                        <h1 className='text-xl font-semibold mt-4'>Suvas KC</h1>
                        <p className='text-primary text-lg font-bold mt-2'>Account</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={"/assets/sales.jpg"} alt='ceo' height={1000} width={1000} className='object-cover rounded-md shadow-lg h-[300px]'/>
                        <h1 className='text-xl font-semibold mt-4'>Bikash Tamang</h1>
                        <p className='text-primary text-lg font-bold mt-2'>Sales</p>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default MainSection