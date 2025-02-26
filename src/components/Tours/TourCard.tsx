import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegClock } from 'react-icons/fa'
import { TourDetails } from '../SingleTrek/types'

const PackageCard: React.FC<TourDetails> = ({
    name,
    overview,
    thumbnail,
    price,
    days,
    country,
    slug,
    discount
}) => {
    const basePrice = Number(price) || 0;
    const discountPercent = Number(discount) || 0;
    const discountedPrice = basePrice * (1 - discountPercent / 100);
    return (
        <Link href={`/tours/${slug}`}>
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
                                <span className="text-sm font-semibold">{`${days.min}`} - {`${days.max}`} Days</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold">{country}</span>
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

                    {discountPercent > 0 ? (
                        <>
                            <div className="absolute -left-4 top-4 ">
                                <div className="flex gap-2 bg-primary/90 text-white px-4 py-2 rounded-md shadow-md">
                                    <div className="text-xs flex items-center gap-1">
                                        From
                                        <span className="line-through text-white/80">${basePrice}</span>
                                    </div>
                                    <div className="text-sm font-medium">${discountedPrice.toFixed(0)}</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="absolute -left-4 top-4 bg-primary/90 text-white px-4 py-2 rounded-md text-sm shadow-md">
                            From ${price}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    )
}

export default PackageCard