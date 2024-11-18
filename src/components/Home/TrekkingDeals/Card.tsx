import React from 'react'
import Image from 'next/image'
import { FaRegClock, FaStar } from 'react-icons/fa'
import { IoSpeedometerOutline } from 'react-icons/io5'
import Link from 'next/link';

interface CardProps {
    name: string;
    overview: string;
    image: string;
    price: number;
    days:string
    difficulty:string
    link:string
}
const Card:React.FC<CardProps> = ({name,overview,image,price,days,difficulty,link}) => {
    return (
        <Link href={`/trekking/${link}`}>
            <div className='w-full py-12 max-w-md mx-auto'>
                <div className='flex flex-col gap-4 rounded-lg relative bg-white custom-trek-card'>
                    <section className='h-[200px] w-full'>
                        <Image src={image} alt="Trek" height={1000} width={1000} className='object-cover h-full w-full rounded-t-lg'/>
                    </section>
                    <section className='px-4 flex flex-col gap-4 mb-6'>
                        <h1 className='font-bold text-xl'>{name}</h1>
                        <div className='bg-[#EAEAEA] rounded-md px-4 py-3 flex items-center justify-between'>
                            <div className='flex gap-2 items-center'>
                                <FaRegClock size={20} className="text-primary/60 text-bold"/>
                                <p className='text-sm font-semibold'>{days} Days</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <IoSpeedometerOutline size={20} className="text-primary/60"/>
                                <p className='text-sm font-semibold'>{difficulty}</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaStar size={16} className="text-primary/60"/>
                                <p className='text-sm font-semibold'>4.5</p>
                            </div>
                        </div>
                        <p className='h-20 overflow-hidden text-sm text-justify'>{overview}</p>
                        <p className='flex self-end underline underline-offset-2 font-medium text-sm text-primary cursor-pointer hover:text-primary/80 transition-colors'>View Details</p>
                    </section>
                    <p className='absolute top-4 -left-4 text-white z-[100] bg-primary/90 rounded-md text-sm px-4 py-2'>From ${price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card