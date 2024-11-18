import React from 'react'
import Image from 'next/image'
import { FaRegClock } from 'react-icons/fa'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { TrekDetails } from '../SingleTrek/types'
import Link from 'next/link'


const PackageCard: React.FC<TrekDetails> = ({
    name,
    overview,
    thumbnail,
    price,
    days,
    slug,
    difficulty
}) => {
    return (
        <Link href={`/trekking/${slug}`}>
            <div className="w-full max-w-sm mx-auto">
                <div className="relative bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg">
                    {/* Image Container */}
                    <div className="relative w-full pt-[60%]">
                        <Image 
                            src={thumbnail} 
                            alt={name}
                            fill
                            className="object-cover rounded-t-lg absolute top-0 left-0"
                        />
                    </div>

                    {/* Content Container */}
                    <div className="p-4 space-y-3">
                        {/* Title */}
                        <h2 className="font-bold text-lg md:text-xl line-clamp-2">{name}</h2>

                        {/* Stats Bar */}
                        <div className="bg-gray-100 rounded-md p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FaRegClock className="text-primary/60 text-lg" />
                                <span className="text-sm font-semibold">{`${days.min} - ${days.max}`} Days</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoSpeedometerOutline className="text-primary/60 text-lg" />
                                <span className="text-sm font-semibold">{difficulty}</span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 line-clamp-3">
                            {overview}
                        </p>

                        {/* View Details Link */}
                        <div className="pt-2">
                            <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors underline underline-offset-2">
                                View Details
                            </button>
                        </div>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute -left-4 top-4 bg-primary/90 text-white px-4 py-2 rounded-md text-sm shadow-md">
                        From ${price}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PackageCard