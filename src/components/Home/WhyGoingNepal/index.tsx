import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import Image from 'next/image'
import { Avatar, AvatarGroup } from '@nextui-org/react'
import { BsArrowRight } from 'react-icons/bs'

const WhyGoingNepal = () => {
    const sections = [
    {
        title: "Trekking Destinations",
        description: "Explore a curated list of the world's most stunning trekking locations, from serene forest trails to rugged mountain paths."
    },
    {
        title: "Guided Tours",
        description: "Join our expert-led trekking tours for an unforgettable journey. We offer tailored treks to suit your experience and fitness level."
    },
    {
        title: "Gear Recommendations",
        description: "Find out what gear you need to make your trek safe and enjoyable, from boots to backpacks, with our detailed reviews."
    },
    {
        title: "Trekking Tips",
        description: "Get expert advice on trekking techniques, safety protocols, and preparation strategies to enhance your trekking experience."
    }
];

return (
    <main className='w-full px-32 py-16'>
        <section className='flex gap-12 items-center'>
            <div>
                <section className='relative rounded-full size-[500px]'>
                    <Image src={"/assets/why.jpg"} alt='Why-Going' height={1000} width={1000} className='size-full rounded-full object-cover relative'/>
                    <div className='absolute top-[25%] -left-20 w-fit bg-zinc-200 px-6 py-2 rounded-full flex gap-4 items-center shadow-2xl border border-gray-300'>
                        <AvatarGroup isBordered className=''>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                        </AvatarGroup>
                        <div className='flex flex-col'>
                            <p className='font-extrabold text-primary'>1200+</p>
                            <h1 className='text-xs font-semibold'>Satisfied Clients</h1>
                        </div>
                    </div>
                </section>
            </div>
            <div className='w-full relative'>
                <SharedTitle title='Why Us' subTitle='Going Nepal Adventure'/>
                <p className='text-sm text-justify'>At Going Nepal, we are passionate about exploring the great outdoors. Our mission is to help adventurers discover breathtaking trekking routes across the globe. Whether you're a beginner or an experienced trekker, we provide expert guidance and resources to make your next trek unforgettable.</p>
                <div className='grid grid-cols-2 gap-x-8 gap-y-4 mt-8'>
                    {sections.map((section)=>{
                        return(
                            <div className='bg-primary/60 rounded-md p-2 px-4 text-white'>
                                <h1 className='font-semibold text-lg'>{section.title}</h1>
                                <p className='text-xs font-light mt-2 text-justify'>{section.description}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='flex items-center gap-1 justify-end mt-12 text-primary text-sm cursor-pointer group'>
                    <p className=' font-semibold underline underline-offset-2'>More about us</p>
                    <BsArrowRight className='transform transition-transform duration-200 group-hover:translate-x-2' />
                </div>
            </div>
        </section>
    </main>
  )
}

export default WhyGoingNepal
