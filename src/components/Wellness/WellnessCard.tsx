import React from 'react'
import { WellnessProps } from '../SingleTrek/types'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { CiLocationOn } from 'react-icons/ci'


const WellnessCard:React.FC<WellnessProps> = ({name,country,slug,overview,thumbnail,price}) => {
    return (
        <Link href={`/wellness/${slug}`}>
            <div className='w-full flex gap-8 h-[180px] shadow-md p-4 border border-gray-200 relative'>
                <div className='w-2/5 h-full '>
                    <Image src={thumbnail} alt={name}height={1000} width={1000} className='object-cover h-full w-full rounded-sm'/>
                </div>
                <div className='w-3/5 flex flex-col gap-2 text-justify'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-xl font-bold'>{name}</h1>
                        <p className='text-sm font-semibold text-primary'>From ${price}</p>
                    </div>
                    <p className='text-gray-600 text-xs'>{overview?.slice(0,150)}...</p>
                    <div className='flex items-center gap-2 mt-1'>
                        <CiLocationOn className='text-primary' size={16}/>
                        <p className='text-gray-800 text-sm font-semibold'>{country}</p>
                    </div>
                    <div className='flex items-center justify-end'>
                        <Button className='text-xs text-primary -mr-3 underline underline-offset-2' size='sm' variant='light'>View Details</Button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default WellnessCard
