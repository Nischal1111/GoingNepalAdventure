"use client"
import React from 'react'
import { FaMapMarkerAlt, FaRegClock, FaMountain, FaUserFriends, FaUtensils, FaBed, FaChevronCircleLeft, FaHiking, FaFirstAid } from 'react-icons/fa';
import { GiPathDistance } from 'react-icons/gi';
import { MdDateRange } from 'react-icons/md';
import TrekOverView from './TrekOverView';
import TrekHighLights from './TrekHighLights';
import Itinerary from './Itinerary';
import TripQuote from './TripQuote';
import Services from './Services';
import PackingList from './PackingList';
import Gallery from './Gallery';
import TrekFAQs from './TrekFAQs';
import RightSide from './RightSide/RightSide';
import { Button } from '@nextui-org/react';
import { Rowdies } from "next/font/google";
import { IoShirtSharp } from 'react-icons/io5';
import { BsGearFill } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { useQuery } from '@tanstack/react-query';
import { getSingleTrek } from '@/services/treks';
import Loader from '@/shared/Loader';

export const rowdies=Rowdies({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

interface paramsProps{
    id: string
}
const SingleTrek:React.FC<paramsProps> = ({id}) => {

    const {data:SingleTrekData,isLoading}=useQuery({
        queryKey: ['singleTrekData',id],
        queryFn:()=>getSingleTrek(id),
        enabled:!!id
    })

    const trek={
        title:SingleTrekData?.data?.data?.name,
        price:JSON.stringify(SingleTrekData?.data?.data?.price),
        img:"/assets/contactBG.jpg",
        desc:SingleTrekData?.data?.data?.overview
    }

    const minitrekDetails = [
    {
        title: "Location",
        value: SingleTrekData?.data?.data?.location,
        icon: <FaMapMarkerAlt className='text-primary' size={28}/>
    },
    {
        title: "Duration",
        value: `${SingleTrekData?.data?.data?.days?.min} - ${SingleTrekData?.data?.data?.days?.max} days`,
        icon: <FaRegClock className='text-primary' size={28}/>
    },
    {
        title: "Difficulty",
        value:SingleTrekData?.data?.data?.difficulty,
        icon: <FaMountain className='text-primary' size={28}/>
    },
    {
        title: "Group Size",
        value: `${SingleTrekData?.data?.data?.groupSize?.min} - ${SingleTrekData?.data?.data?.groupSize?.max} people`,
        icon: <FaUserFriends className='text-primary' size={28}/>
    },
    {
        title: "Starting/Ending Point",
        value: `${SingleTrekData?.data?.data?.startingPoint} / ${SingleTrekData?.data?.data?.endingPoint}`,
        icon: <GiPathDistance className='text-primary' size={28}/>
    },
    {
        title: "Meals",
        value: SingleTrekData?.data?.data?.meal,
        icon: <FaUtensils className='text-primary' size={24}/>
    },
    {
        title: "Best Season",
        value: SingleTrekData?.data?.data?.bestSeason?.join(", "),
        icon: <MdDateRange className='text-primary' size={28}/>
    },
    {
        title: "Accommodations",
        value: SingleTrekData?.data?.data?.accommodation?.join(", "),
        icon: <FaBed className='text-primary' size={28}/>
    }
    ];

    const trekHighLights=SingleTrekData?.data?.data?.trekHighlights

    const itineraryList = SingleTrekData?.data?.data?.itinerary

    const servicesIncluded= SingleTrekData?.data?.data?.servicesCostIncludes

    const servicesNotIncluded=SingleTrekData?.data?.data?.servicesCostExcludes

    const trekkingEquipment: { category: string; items: string[]; icon: IconType }[] = [
    {
        category: "General Equipment",
        icon: FaHiking,
        items: [...(SingleTrekData?.data?.data?.packingList?.general || [])]
    },
    {
        category: "Clothes",
        icon: IoShirtSharp,
        items: [...(SingleTrekData?.data?.data?.packingList?.clothes || [])]
    },
    {
        category: "First Aid Kit",
        icon: FaFirstAid,
        items: [...(SingleTrekData?.data?.data?.packingList?.firstAid || [])]
    },
    {
        category: "Other Essentials",
        icon: BsGearFill,
        items: [...(SingleTrekData?.data?.data?.packingList?.otherEssentials || [])]
    }
];

    const gallery=SingleTrekData?.data?.data?.images

    const FAQs=SingleTrekData?.data?.data?.faq

    if(isLoading){
        return <Loader/>
    }

    return (
        <main className='relative px-16'>
            <Button
                className='absolute top-0 left-4 z-50 rounded-full bg-primary p-0 text-white'
                isIconOnly
                onClick={() => window.history.back()}
            >
                <FaChevronCircleLeft />
            </Button>
            <section className='relative h-[75vh] mt-4 w-full rounded-md' style={{background:`url(${SingleTrekData?.data?.data?.thumbnail})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}>
                <div className='absolute inset-0 bg-black/20 w-full'></div>
                <div className='w-fit relative flex items-center justify-start top-[70%] left-[5%] '>
                    <div className='flex flex-col items-start'>
                        <h1 className={`${rowdies.className} text-7xl w-fit text-[#DFDCDC]/70`}>{trek.title}</h1>
                        <p className={`${rowdies.className} text-5xl absolute top-10 antialiased text-white`}>{trek.title}</p>
                    </div>
                </div>
            </section>
            <section className='flex gap-12 w-full my-12 justify-between'>
                <div className='w-[65%]'>
                    <section className='grid grid-cols-3 gap-4 bg-[#5D83C4]/20 rounded-md px-8 py-6 shadow-md'>
                        {
                            minitrekDetails.map((item,index)=>(
                                <div className='w-full flex items-center justify-start gap-2' key={index}>
                                    <div className='w-[20%] flex items-center justify-center'>
                                        {item.icon}
                                    </div>
                                    <div className='w-[80%]'>
                                        <p className='text-sm text-[#838383]'>{item.title}</p>
                                        <p className='text-base'>{item.value}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                    <TrekOverView title={trek?.title} desc={trek.desc}/>
                    <TrekHighLights title={trek?.title} trekHighlights={trekHighLights}/>
                    <Services servicesIncluded={servicesIncluded} servicesNotIncluded={servicesNotIncluded}/>
                    <Itinerary itinerary={itineraryList}/>
                    <TripQuote title={trek?.title} desc={trek.desc}/>
                    <PackingList trekkingEquipment={trekkingEquipment}/>
                    <TrekFAQs FAQs={FAQs}/>
                    <Gallery title={trek?.title} gallery={gallery}/>
                </div>
                <div className='w-[35%] flex justify-start flex-col items-center'>
                    <RightSide price={trek?.price} title={trek?.title} trekPdf={SingleTrekData?.data?.data?.trekPdf}/>
                </div>
            </section>
            
        </main>
    )
}

export default SingleTrek

