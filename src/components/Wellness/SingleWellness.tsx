"use client"
import { getSingleWellness } from '@/services/wellness'
import Loader from '@/shared/Loader'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { CiLineHeight } from 'react-icons/ci'
import { FaBed, FaChevronCircleLeft, FaMapMarkerAlt, FaMountain, FaRegClock, FaUserFriends, FaUtensils } from 'react-icons/fa'
import { RiShieldKeyholeFill } from 'react-icons/ri'
import TourOverView from '../SingleTour/TourOverview'
import TrekHighLights from '../SingleTrek/TrekHighLights'
import Services from '../SingleTrek/Services'
import Itinerary from '../SingleTour/Itinerary'
import TripQuote from '../SingleTrek/TripQuote'
import SharedTitle2 from '@/shared/SharedTitle2'
import LinedContainer from '@/shared/LinedContainer'
import Dot from '@/utility/Dot'
import TrekFAQs from '../SingleTrek/TrekFAQs'
import Gallery from '../SingleTrek/Gallery'
import { Button } from '@nextui-org/react'
import { rowdies } from '@/utility/font'
import RightSide from '../SingleTour/RightSide/RightSide'


interface wellnessProps {
    id: string
}
const SingleWellness: React.FC<wellnessProps> = ({id}) => {

    const {data:wellnessData,isLoading}=useQuery({
        queryKey: ['wellness',id],
        queryFn:()=>getSingleWellness(id)
    })

    const wellness={
        title:wellnessData?.data?.data?.name,
        price:JSON.stringify(wellnessData?.data?.data?.price),
        img:wellnessData?.data?.data?.thumbnail,
        desc:wellnessData?.data?.data?.overview
    }

    const miniwellnessDetails = [
    {
        title: "Country",
        value: wellnessData?.data?.data?.country,
        icon: <FaMapMarkerAlt className='text-primary' size={28}/>
    },
    {
        title: "Duration",
        value: `${wellnessData?.data?.data?.days?.min} - ${wellnessData?.data?.data?.days?.max} days`,
        icon: <FaRegClock className='text-primary' size={28}/>
    },
    {
        title: "Best Seasons",
        value:wellnessData?.data?.data?.bestSeason?.join(", "),
        icon: <FaMountain className='text-primary' size={28}/>
    },
    {
        title: "Group Size",
        value: `${wellnessData?.data?.data?.groupSize?.min} - ${wellnessData?.data?.data?.groupSize?.max} people`,
        icon: <FaUserFriends className='text-primary' size={28}/>
    },
    {
        title:"Suitable Age",
        value: wellnessData?.data?.data?.suitableAge,
        icon: <RiShieldKeyholeFill className='text-primary' size={28}/>
    },
    {
        title: "Max Altitude",
        value: `${wellnessData?.data?.data?.maxAltitude}`,
        icon: <CiLineHeight className='text-primary' size={28}/>
    },
    {
        title: "Meals",
        value: wellnessData?.data?.data?.meal,
        icon: <FaUtensils className='text-primary' size={28}/>
    },
    {
        title: "Accommodations",
        value: wellnessData?.data?.data?.accommodation?.join(", "),
        icon: <FaBed className='text-primary' size={28}/>
    }
    ];

    const wellnessHighLights=wellnessData?.data?.data?.highlights

    const itineraryList = wellnessData?.data?.data?.itinerary

    const servicesIncluded= wellnessData?.data?.data?.servicesCostIncludes
    const servicesNotIncluded= wellnessData?.data?.data?.servicesCostExcludes

    const gallery=wellnessData?.data?.data?.images

    const FAQs=wellnessData?.data?.data?.faq


    if(isLoading) return <Loader/>
    return (
        <main className='relative lg:px-16 px-4 lg:pt-0 pt-12'>
            <Button
                className='absolute  lg:flex hidden top-0 left-4 z-50 rounded-full bg-primary p-0 text-white'
                isIconOnly
                onClick={() => window.history.back()}
            >
                <FaChevronCircleLeft />
            </Button>
            <section className='relative lg:h-[75vh] h-[40vh] lg:mt-4 mt-12 w-full rounded-md' style={{background:`url(${wellnessData?.data?.data?.thumbnail})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}>
                <div className='absolute inset-0 bg-black/20 w-full'></div>
                <div className='w-fit relative flex items-center justify-start top-[70%] left-[5%] '>
                    <div className='flex flex-col items-start'>
                        <h1 className={`${rowdies.className} lg:text-7xl text-3xl w-fit text-[#DFDCDC]/70`}>{wellness.title}</h1>
                        <p className={`${rowdies.className} lg:text-5xl text-2xl absolute top-10 antialiased text-white`}>{wellness.title}</p>
                    </div>
                </div>
            </section>
            <section className='flex lg:flex-row flex-col lg:gap-12 gap-4 w-full lg:my-12 my-4 justify-between'>
                <div className='lg:w-[65%] w-full'>
                    <section className='grid lg:grid-cols-3 grid-cols-2 gap-4 bg-[#5D83C4]/20 rounded-md px-8 py-6 shadow-md'>
                        {
                            miniwellnessDetails.map((item,index)=>(
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
                    
                    <TourOverView name={wellness?.title} overview={wellnessData?.data?.data?.overview}/>
                    <TrekHighLights title={wellness?.title} trekHighlights={wellnessHighLights}/>
                    <Services servicesIncluded={servicesIncluded} servicesNotIncluded={servicesNotIncluded}/>
                    <Itinerary itinerary={itineraryList}/>
                    <TripQuote title={wellness?.title} desc={wellness.desc}/>
                    <div className='my-12'>
                        <SharedTitle2 title='Things To Know' />
                        <LinedContainer>
                            <div className='mt-8'>
                                {wellnessData?.data?.data?.thingsToKnow?.map((item:string, index:number) => (
                                    <div key={index} className='flex mt-4 gap-4 items-center'>
                                    <Dot />
                                    <p className='text-base text-justify font-semibold'>
                                        {item}
                                    </p>
                                    </div>
                                ))}
                                </div>
                        </LinedContainer>
                    </div>
                    <TrekFAQs FAQs={FAQs}/>
                    <Gallery title={wellness?.title} gallery={gallery}/>
                </div>
                <div className='lg:w-[35%] w-full flex justify-start flex-col items-center'>
                    <RightSide price={wellness?.price} name={wellness?.title}/>
                </div>
            </section>
            
        </main>
    )
}

export default SingleWellness
