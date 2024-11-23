"use client"
import { TourDetails} from '@/components/SingleTrek/types'
import TourCard from '@/components/Tours/TourCard'
import { getToursByCountry } from '@/services/tour'
import Loader from '@/shared/Loader'
import SharedSection from '@/shared/SharedSection'
import { rowdies } from '@/utility/font'
import { Pagination } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import React, { useRef, useState } from 'react'

const Tibet = () => {
    const [page,setPage]=useState(1)
    const limit=6
    const tourRef=useRef<HTMLDivElement>(null)

    const {data:tourData,isLoading}=useQuery({
        queryKey: ['tourData'],
        queryFn:()=>getToursByCountry("Tibet",page,limit,)
    })

    const handleTourPageChange = (newPage: number) => {
    setPage(newPage);
    tourRef?.current?.scrollIntoView({behavior: 'smooth',block: 'start' });
    };


    const totalTourPages = tourData?.data?.totalPages || 1;

    return (
        <div>
            <SharedSection title={"Tibet"} link={'/destinations/tibet'} img='/assets/tibet/t2.avif'/>
            <div className='px-16 w-full'>
                <h1 className={`${rowdies.className} my-8 text-4xl`}>Introducing Tibet</h1>
                <p className='font-semibold my-4'> Tibet: The Roof of the World</p>
                <p ref={tourRef} className='text-justify'>
                    Tibet, often called the Roof of the World, is a land of dramatic landscapes, ancient traditions, and profound spirituality. Nestled on the world&apos;s highest plateau, Tibet is surrounded by towering Himalayan peaks, including the majestic Mount Everest. This mystical region is not only a paradise for nature lovers but also a sacred destination for those seeking spiritual awakening.

The capital city of Lhasa, with its iconic Potala Palace, stands as a symbol of Tibetan heritage and Buddhist devotion. The Jokhang Temple, a UNESCO World Heritage Site, is the spiritual heart of Tibet, drawing pilgrims from across the region. Monasteries like Drepung, Sera, and Tashilhunpo preserve the teachings and practices of Tibetan Buddhism, offering visitors a chance to witness centuries-old rituals.

Tibet&apos;s landscapes are a breathtaking blend of vast grasslands, serene lakes like Yamdrok and Namtso, and rugged mountains. The serene beauty of these places, combined with the thin, crisp air, creates a sense of tranquility and otherworldliness. Travelers often find peace exploring the sacred Mount Kailash, considered the spiritual axis of the world by Buddhists, Hindus, Jains, and Bon followers.

The Tibetan people are warm and resilient, preserving their unique culture and language despite modern challenges. Festivals like Losar (Tibetan New Year) and the Shoton Festival, featuring colorful rituals, traditional music, and dance, provide a glimpse into their rich heritage.

For adventurers, Tibet offers thrilling trekking routes, awe-inspiring mountain passes, and the chance to experience one of the most remote and rugged regions on Earth. Its blend of natural beauty and spiritual depth makes Tibet a destination like no other.

Whether you seek to connect with nature, delve into spiritual practices, or explore ancient traditions, Tibet promises an unforgettable journey at the top of the world.



                </p>
                <h1 className={`${rowdies.className} my-8 text-4xl`}>Recommended trips in Tibet</h1>
                {isLoading ? <Loader/>:
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 my-4'>
                    {tourData?.data?.data?.map((item:TourDetails,index:number)=>{
                        return(
                            <TourCard {...item} key={index}/>
                        )
                    })}
                </div>
                }
                {totalTourPages > 1 && (
                    <div className="flex justify-center my-12">
                        <Pagination
                            isCompact
                            showControls
                            initialPage={1}
                            className='text-primary'
                            total={totalTourPages}
                            page={page}
                            onChange={handleTourPageChange}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Tibet

