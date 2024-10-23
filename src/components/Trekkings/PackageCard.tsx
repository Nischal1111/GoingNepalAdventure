import React from 'react'
import Image from 'next/image'
import { FaRegClock } from 'react-icons/fa'
import { IoSpeedometerOutline } from 'react-icons/io5'

interface packageProps{
    image:string
    name:string
    description:string
    price:number
    days:number
    region?:string
    className?:string
    difficulty:string
}
const PackageCard:React.FC<packageProps> = ({name,description,image,price,days,difficulty}) => {
    return (
        <div className='w-full my-8 max-w-md mx-auto shadow-xl h-auto cursor-pointer'>
            <div className='flex flex-col gap-4 rounded-lg relative bg-white custom-trek-package'>
                <section className='h-[170px] w-full'>
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
                    </div>
                    <p className=' overflow-hidden text-sm text-justify'>{description.slice(0,100)}...</p>
                    <p className='flex self-end underline underline-offset-2 font-medium text-sm text-primary cursor-pointer hover:text-primary/80 transition-colors'>View Details</p>
                </section>
                <p className='absolute top-4 -left-4 text-white z-[100] bg-primary/90 rounded-md text-sm px-4 py-2'>From ${price}</p>
            </div>
        </div>
    )
}

export default PackageCard