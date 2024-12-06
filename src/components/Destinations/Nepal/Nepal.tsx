"use client"
import { TourDetails, TrekDetails } from '@/components/SingleTrek/types'
import TourCard from '@/components/Tours/TourCard'
import PackageCard from '@/components/Trekkings/PackageCard'
import { getToursByCountry } from '@/services/tour'
import { getAllTrekInCountry } from '@/services/treks'
import Loader from '@/shared/Loader'
import SharedSection from '@/shared/SharedSection'
import { rowdies } from '@/utility/font'
import { Pagination } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import React, { useRef, useState } from 'react'

const Nepal = () => {
    const [page,setPage]=useState(1)
    const limit=6
    const trekRef=useRef<HTMLDivElement>(null)
    const tourRef=useRef<HTMLDivElement>(null)

    const {data:trekData,isLoading}=useQuery({
        queryKey: ['trekData',page,limit],
        queryFn:()=>getAllTrekInCountry(page,limit)
    })

    const {data:tourData}=useQuery({
        queryKey: ['tourData'],
        queryFn:()=>getToursByCountry("Nepal",page,limit,)
    })


    const handlePageChange = (newPage: number) => {
    setPage(newPage);
    trekRef?.current?.scrollIntoView({behavior: 'smooth',block: 'start' });
    };

    const handleTourPageChange = (newPage: number) => {
    setPage(newPage);
    tourRef?.current?.scrollIntoView({behavior: 'smooth',block: 'start' });
    };

    const totalPages = trekData?.data?.totalPages || 1;

    const totalTourPages = tourData?.data?.totalPages || 1;

    return (
        <div>
            <SharedSection title={"Nepal"} link={'/nepal'} img='/assets/aboutBG.jpg'/>
            <div className='px-16 w-full'>
                <h1 className={`${rowdies.className} my-8 text-4xl`}>Introducing Nepal</h1>
                <p className='font-semibold my-4'> Nepal: A Land of Breathtaking Beauty and Rich Heritage </p>
                <p ref={trekRef} className='text-justify'>

                    Nestled in the heart of the Himalayas, Nepal is a country of unparalleled natural beauty, cultural diversity, and spiritual serenity. Known as the roof of the world, it is home to eight of the ten highest peaks, including Mount Everest, the crown jewel of adventure seekers and climbers worldwide.

                    Nepal&apos;s landscapes range from the snow-capped mountains in the north to lush green plains in the south, offering a visual treat for nature lovers. The serene lakes of Pokhara, the dense jungles of Chitwan, and the windswept high-altitude deserts of Mustang exemplify its diverse topography.

                    Culturally, Nepal is a melting pot of traditions, with over 100 ethnic groups and 123 spoken languages. Its history is interwoven with ancient Hindu and Buddhist practices, visible in the stunning temples, stupas, and monasteries scattered across the country. The UNESCO World Heritage Sites in Kathmandu Valley, including Swayambhunath (Monkey Temple), Pashupatinath Temple, and Bhaktapur Durbar Square, are testament to Nepal&apos;s architectural and spiritual legacy.

                    For adventurers, Nepal offers some of the world&apos;s best trekking routes, such as the Everest Base Camp Trek, Annapurna Circuit, and Langtang Valley Trek. Beyond trekking, visitors can enjoy thrilling activities like paragliding, white-water rafting, and jungle safaris.

                    Despite its modest size, Nepal&apos;s warmth lies in its people. Known for their hospitality, Nepalese are always eager to share their traditions and stories, making every traveler feel at home.

                    Whether you seek the solace of spiritual retreats, the thrill of mountain adventures, or the discovery of ancient cultures, Nepal promises an unforgettable journey in the heart of the Himalayas.

                </p>
                <h1 className={`${rowdies.className} my-8 text-4xl`}>Recommended Treks</h1>
                {isLoading ? <Loader/>:
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 my-4'>
                    {trekData?.data?.data?.map((item:TrekDetails,index:number)=>{
                        return(
                            <PackageCard {...item} key={index}/>
                        )
                    })}
                </div>
                }
                
                {totalPages > 1 && (
                    <div ref={tourRef} className="flex justify-center my-12">
                        <Pagination
                            isCompact
                            showControls
                            initialPage={1}
                            className='text-primary'
                            total={totalPages}
                            page={page}
                            onChange={handlePageChange}
                        />
                    </div>
                )}

                <h1 className={`${rowdies.className} my-8 text-4xl`}>Best trips in Nepal</h1>
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

export default Nepal

