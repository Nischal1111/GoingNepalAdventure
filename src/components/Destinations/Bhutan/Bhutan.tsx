"use client"
import { TourDetails } from '@/components/SingleTrek/types'
import TourCard from '@/components/Tours/TourCard'
import { getToursByCountry } from '@/services/tour'
import Loader from '@/shared/Loader'
import SharedSection from '@/shared/SharedSection'
import { rowdies } from '@/utility/font'
import { Pagination } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import React, { useRef, useState } from 'react'

const Bhutan = () => {
    const [page,setPage]=useState(1)
    const limit=6
    const tourRef=useRef<HTMLDivElement>(null)

    const {data:tourData,isLoading}=useQuery({
        queryKey: ['tourData'],
        queryFn:()=>getToursByCountry("Bhutan",page,limit,)
    })

    const handleTourPageChange = (newPage: number) => {
    setPage(newPage);
    tourRef?.current?.scrollIntoView({behavior: 'smooth',block: 'start' });
    };


    const totalTourPages = tourData?.data?.totalPages || 1;

    return (
        <div>
            <SharedSection title={"Bhutan"} link={'/destinations/bhutan'} img='/assets/bhutan/b3.avif'/>
            <div className='px-16 w-full'>
                <h1 className={`${rowdies.className} my-8 text-4xl`}>Introducing Bhutan</h1>
                <p className='font-semibold my-4'> Bhutan: The Last Shangri-La</p>
                <p ref={tourRef} className='text-justify'>

                    Tucked away in the eastern Himalayas, Bhutan is a mystical kingdom that harmoniously blends natural beauty, spiritual heritage, and a profound sense of happiness. Known as the Land of the Thunder Dragon, this small but enchanting country is celebrated for its untouched landscapes, vibrant culture, and commitment to Gross National Happiness – a unique development philosophy prioritizing well-being over material wealth.

Bhutan&apos;s landscapes are a treasure trove of wonders, from lush valleys and dense forests to snow-capped peaks. The iconic Tiger&apos;s Nest Monastery, perched on a cliff in Paro, is a testament to Bhutan&apos;s spiritual devotion and architectural marvels. The serene Punakha Dzong, surrounded by rivers and jacaranda trees, and the ancient monasteries of Bumthang Valley reflect Bhutan&apos;s deeply rooted Buddhist traditions.

Rich in culture, Bhutan remains one of the few countries where ancient customs and modern life coexist seamlessly. Festivals like Tshechu bring communities together in joyous celebrations featuring masked dances and traditional music, offering a glimpse into the country&apos;s vibrant heritage.

For nature enthusiasts, Bhutan offers pristine trekking routes such as the Snowman Trek and the Druk Path Trek, revealing the nation&apos;s breathtaking scenery and biodiversity. The valleys of Phobjikha and Haa provide havens for rare wildlife like the black-necked crane, further cementing Bhutan&apos;s reputation as an environmental sanctuary.

What sets Bhutan apart is its commitment to sustainability and cultural preservation. Tourism is carefully managed to ensure minimal environmental impact, making every visit both exclusive and meaningful.

Whether you&apos;re seeking spiritual enlightenment, awe-inspiring adventures, or an escape into an idyllic landscape, Bhutan invites you to experience its serene beauty and unique way of life.



                </p>
                <h1 className={`${rowdies.className} my-8 text-4xl`}>Recommended trips in Bhutan</h1>
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

export default Bhutan

