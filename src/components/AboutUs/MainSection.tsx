"use client"
import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import Image from 'next/image'
import { rowdies } from '@/utility/font'
import { IoLocation } from 'react-icons/io5'
import { FaCheckCircle, FaGlobeAsia, FaInfoCircle, FaRunning, FaShieldAlt, FaUserShield } from 'react-icons/fa'
import { GiGearHammer } from 'react-icons/gi'
import { WiCloud } from 'react-icons/wi'
import { Button } from '@nextui-org/react'
import { motion, useInView } from 'framer-motion'

const MainSection = () => {
    const sectionsRef = React.useRef<HTMLDivElement>(null);
    const teamRef = React.useRef<HTMLDivElement>(null);
    const sectionsInView = useInView(sectionsRef, { once: true, amount: 0.3 });
    const teamInView = useInView(teamRef, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };
    
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

    const teamMembers = [
        { name: "Lila Dhar Bhandari", role: "CEO", image: "/assets/ceo.jpg" },
        { name: "Suvas KC", role: "Account", image: "/assets/account.jpg" },
        { name: "Bikash Tamang", role: "Sales", image: "/assets/sales.jpg" },
    ];

    return (
        <main className='lg:px-16 px-4 flex items-center justify-center flex-col gap-6 lg:mt-8 mt-4'>
            <SharedTitle title='We are' subTitle='Going Nepal Adventure'/>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-center font-bold text-lg text-primary'>
                    <p>{'"Your Gateway to Unforgettable Himalayan Adventures"'}</p>
                </div>
                <p className='text-justify text-base'>Going Nepal Adventure is a premier trekking company that specializes in curating unique, personalized trekking experiences across Nepal&apos;s most iconic and hidden trails. With years of expertise, we bring adventurers closer to the natural beauty of Nepal, from the towering peaks of the Himalayas to the lush, green valleys. Our approach combines adventure with cultural immersion, offering treks that showcase not just the physical grandeur of Nepal, but also its rich traditions and local way of life. Whether you&apos;re an experienced trekker or a beginner, we provide custom itineraries that ensure you experience the best of what Nepal has to offer.</p>
            </div>

            <section className='flex lg:gap-12 gap-4 lg:flex-row flex-col-reverse items-center w-full mt-16'>
                <div className='relative group overflow-hidden lg:w-2/5 w-full lg:h-[400px] h-[300px]'>
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
                <div className='flex flex-col lg:w-3/5 w-full gap-4 lg:py-8 py-0'>
                    <h1 className={`${rowdies.className} text-4xl w-full flex `}>Our Story</h1>
                    <div className='flex items-center justify-start font-bold text-lg text-primary'>
                        <p>{'"From the Foothills to the Peaks: Our Journey"'}</p>
                    </div>
                    <p className='text-justify text-base'>Going Nepal Adventure was born from a group of friends with a deep passion for exploring Nepal&apos;s mountains. What began as casual treks among locals soon evolved into a professional trekking company, aimed at sharing the thrill of these experiences with the world. Our founders, all seasoned trekkers, understood the challenges and joys of navigating Nepal&apos;s diverse landscapes, and they committed to building a company that would offer both adventure and security. Today, our company stands as a beacon for adventure seekers worldwide, providing safe, guided journeys through Nepal&apos;s most captivating trails, always with a focus on local culture, sustainability, and unforgettable experiences.</p>
                </div>
            </section>

            <div   className='w-full relative lg:my-20 my-4 items-center justify-center flex flex-col gap-4'>
                <div className='flex items-center justify-center'>
                    <h1 className={`${rowdies.className} text-4xl w-full`}>Why Going Nepal Adenture</h1>
                </div>
                    <div className='flex items-center justify-start font-bold text-lg text-primary'>
                        <p>{'"Expert Guides, Personalized Service, and Unforgettable Memories"'}</p>
                    </div>
                <p className='text-base text-justify'>At Going Nepal Adventure, we pride ourselves on providing more than just trekking tours—we offer personalized, memorable experiences that last a lifetime. Our team of certified, experienced guides has an intimate knowledge of Nepal’s terrain, weather, and culture, ensuring that every aspect of your trek is smooth, safe, and enriching. </p>
                <motion.div 
                    ref={sectionsRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={sectionsInView ? "visible" : "hidden"}
                    className='grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-4 mt-8'
                >
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className='bg-primary/90 cursor-pointer hover:bg-primary rounded-md py-4 px-6 text-white transition-colors duration-300'
                        >
                            <div className='flex gap-2 items-center'>
                                {section.icon}
                                <h1 className='font-semibold text-lg'>{section.title}</h1>
                            </div>
                            <p className='text-sm font-light mt-2 text-justify'>{section.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <section className='flex lg:flex-row-reverse flex-col-reverse lg:gap-12 gap-4 items-center w-full lg:mt-16 mt-4'>
                <div className='relative group overflow-hidden lg:w-2/5 w-full lg:h-[400px] h-[300px]'>
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
                <div className='flex flex-col lg:w-3/5 w-full gap-4 py-8'>
                    <h1 className={`${rowdies.className} text-4xl w-full flex `}>Our Mission</h1>
                    <div className='flex items-center justify-start font-bold text-lg text-primary'>
                        <p>{'"Bringing You Closer to Nature, One Trek at a Time"'}</p>
                    </div>
                    <p className='text-justify text-base'>At Going Nepal Adventure, our mission is to help adventurers connect with the pristine beauty of Nepal in a meaningful way. We believe that trekking is more than just a physical journey—it’s an opportunity to immerse yourself in the landscapes, people, and culture that make Nepal unique. We strive to offer trekking experiences that are safe, sustainable, and personalized to each individual’s desires. From high-altitude expeditions like Everest Base Camp to off-the-beaten-path treks in lesser-known regions, we tailor each journey to ensure every trekker finds their perfect adventure. We are also committed to sustainable tourism, ensuring that the beauty of Nepal is preserved for generations to come.</p>
                </div>
            </section>

            <div className='w-full relative lg:my-20 my-4 items-center justify-center flex flex-col gap-4'>
                <div className='flex items-center justify-center'>
                    <h1 className={`${rowdies.className} text-4xl w-full`}>Meet Our Team of Travel Experts</h1>
                </div>
                    <div className='flex items-center justify-start font-bold text-lg text-primary'>
                        <p>{'" Passionate Professionals Creating Unforgettable Journeys"'}</p>
                    </div>
                <p className='text-base text-justify'>
                    At Going Nepal, our team of experienced travel professionals is dedicated to crafting unforgettable travel experiences. With years of industry expertise, we specialize in creating personalized itineraries for all types of trips, from romantic getaways to family vacations and adventure excursions. We take the time to understand our clients&apos; preferences to ensure each journey is tailored to their needs. Beyond planning, we provide exceptional customer service throughout the travel process, offering support from booking to arrival. We believe travel is about connecting with people and cultures, and we aim to make every trip both memorable and meaningful. Let us help plan your next adventure!
                </p>
                <motion.div 
                    ref={teamRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={teamInView ? "visible" : "hidden"}
                    className='grid lg:grid-cols-3 grid-cols-1 gap-x-32 gap-y-4 lg:mt-12 mt-4'
                >
                    {teamMembers.map((member, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className='flex flex-col items-center justify-center'
                        >
                            <Image 
                                src={member.image} 
                                alt={member.name} 
                                height={1000} 
                                width={1000} 
                                className='object-cover rounded-md shadow-lg h-[300px]'
                            />
                            <h1 className='text-xl font-semibold mt-4'>{member.name}</h1>
                            <p className='text-primary text-lg font-bold mt-2'>{member.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <main className='h-full mt-12 w-full flex lg:flex-row flex-col mb-12'>
                <div className='lg:flex hidden relative lg:w-1/2 w-full flex px-8 '>
                    <section className='relative lg:h-[500px] h-[400px] lg:w-[600px] w-full p-2 rounded-md bg-white shadow-md'>
                        <Image src={"/assets/achievement1.jpg"} alt='Ach' height={1000} width={1000} className='object-cover rounded-md h-full w-full'/>
                    </section>
                    <section className='relative h-[250px] w-[250px] p-2 rounded-md bg-white shadow-m -bottom-[19rem] right-20'>
                        <Image src={"/assets/achievement2.jpg"} alt='Ach' height={1000} width={1000} className='object-cover rounded-md h-full w-full'/>
                    </section>
                </div>
                <div className='relative lg:w-1/2 w-full flex items-start justify-start flex-col gap-4'>
                        <h1 className={`${rowdies.className} text-4xl w-full flex `}>Achievements</h1>
                        <div className='flex items-center justify-start font-bold text-lg text-primary'>
                            <p>{'"Epic Milestones, Unforgettable Journeys"'}</p>
                        </div>
                        <p className='text-justify text-base text-gray-700'>At Going Nepal Adventure, we take pride in our achievements, having guided countless adventurers through Nepal&apos;s majestic landscapes. From successful expeditions to the Himalayas to creating sustainable and community-focused trekking experiences, our milestones reflect our commitment to excellence and passion for the great outdoors.</p>
                        <div className='flex gap-4 items-center mt-2'>
                            <FaCheckCircle className='text-primary' size={22}/>
                            <p className='text-base'><span className='font-semibold'>2022</span> Travellers&apos; choice - <span className='font-bold'>Trip Advisor</span></p>
                        </div>
                        <div className='flex gap-4 items-center mt-2'>
                            <FaCheckCircle className='text-primary' size={22}/>
                            <p className='text-base'><span className='font-semibold'>2023</span> Travellers&apos; choice - <span className='font-bold'>Trip Advisor</span></p>
                        </div>
                        <div className='flex gap-4 mt-2 items-center'>
                            <FaCheckCircle className='text-primary' size={22}/>
                            <p className='text-base'><span className='font-semibold'>2024</span> Travellers&apos; choice - <span className='font-bold'>Trip Advisor</span></p>
                        </div>

                        <div className='grid lg:grid-cols-4 grid-cols-2 w-full items-center justify-between mt-4'>
                            <div className='flex flex-col'>
                                <h1 className='font-bold text-5xl text-primary'>13+</h1>
                                <p className='text-lg text-gray-500 mt-2'>Years of </p>
                                <p className='text-lg text-gray-500 mt-[-6px]'>experience</p>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='font-bold text-5xl text-primary'>350+</h1>
                                <p className='text-lg text-gray-500 mt-2'>Destination </p>
                                <p className='text-lg text-gray-500 mt-[-6px]'>collaborations</p>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='font-bold text-5xl text-primary'>1300+</h1>
                                <p className='text-lg text-gray-500 mt-2'>Successful</p>
                                <p className='text-lg text-gray-500 mt-[-6px]'>treks</p>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='font-bold text-5xl text-primary'>2100+</h1>
                                <p className='text-lg text-gray-500 mt-2'>Satisfied </p>
                                <p className='text-lg text-gray-500 mt-[-6px]'>clients</p>
                            </div>
                        </div>

                        <Button className='px-8 bg-primary -bottom-4 rounded-md relative text-white'>Plan your trip </Button>
                        
                </div>
            </main>

        </main>
    )
}

export default MainSection