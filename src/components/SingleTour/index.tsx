"use client"
import { getSingleTour } from '@/services/tour'
import Loader from '@/shared/Loader'
import { rowdies } from '@/utility/font'
import { Button } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { CiLineHeight } from 'react-icons/ci'
import { FaBed, FaChevronCircleLeft, FaMapMarkerAlt, FaMountain, FaRegClock, FaUserFriends, FaUtensils } from 'react-icons/fa'
import TourOverView from './TourOverview'
import Itinerary from './Itinerary'
import TripQuote from '../SingleTrek/TripQuote'
import Services from '../SingleTrek/Services'
import TrekHighLights from '../SingleTrek/TrekHighLights'
import TrekFAQs from '../SingleTrek/TrekFAQs'
import Gallery from '../SingleTrek/Gallery'
import SharedTitle2 from '@/shared/SharedTitle2'
import LinedContainer from '@/shared/LinedContainer'
import Dot from '@/utility/Dot'
import RightSide from './RightSide/RightSide'

interface pageProps{
    id:string
}
const SingleTour:React.FC<pageProps> = ({id}) => {

    const {data:tourData,isLoading}=useQuery({
        queryKey:["tourData",id],
        queryFn:()=>getSingleTour(id),
        enabled:!!id
    })

    const tour={
        title:tourData?.data?.data?.name,
        price:JSON.stringify(tourData?.data?.data?.price),
        img:tourData?.data?.data?.thumbnail,
        desc:tourData?.data?.data?.overview
    }

    const minitourDetails = [
    {
        title: "Country",
        value: tourData?.data?.data?.country,
        icon: <FaMapMarkerAlt className='text-primary' size={28}/>
    },
    {
        title: "Duration",
        value: `${tourData?.data?.data?.days?.min} - ${tourData?.data?.data?.days?.max} days`,
        icon: <FaRegClock className='text-primary' size={28}/>
    },
    {
        title: "Best Seasons",
        value:tourData?.data?.data?.bestSeason?.join(", "),
        icon: <FaMountain className='text-primary' size={28}/>
    },
    {
        title: "Group Size",
        value: `${tourData?.data?.data?.groupSize?.min} - ${tourData?.data?.data?.groupSize?.max} people`,
        icon: <FaUserFriends className='text-primary' size={28}/>
    },
    {
        title: "Max Altitude",
        value: `${tourData?.data?.data?.maxAltitude}`,
        icon: <CiLineHeight className='text-primary' size={28}/>
    },
    {
        title: "Trip Type",
        value: tourData?.data?.data?.tripType,
        icon: <FaMountain className='text-primary' size={24}/>
    },
    {
        title: "Meals",
        value: tourData?.data?.data?.meal,
        icon: <FaUtensils className='text-primary' size={28}/>
    },
    {
        title: "Accommodations",
        value: tourData?.data?.data?.accommodation?.join(", "),
        icon: <FaBed className='text-primary' size={28}/>
    }
    ];

    const tourHighLights=tourData?.data?.data?.highlights

    const itineraryList = tourData?.data?.data?.itinerary

    const servicesIncluded= tourData?.data?.data?.servicesCostIncludes
    const servicesNotIncluded= tourData?.data?.data?.servicesCostExcludes

    const gallery=tourData?.data?.data?.images

    const FAQs=tourData?.data?.data?.faq

    if(isLoading) return <Loader/>
    return (
        <main className='relative lg:px-16 px-4 lg:pt-0 pt-12'>
            <Button
                className='absolute lg:flex hidden top-0 left-4 z-50 rounded-full bg-primary p-0 text-white'
                isIconOnly
                onClick={() => window.history.back()}
            >
                <FaChevronCircleLeft />
            </Button>
            <section className='relative lg:h-[75vh] h-[40vh] lg:mt-4 mt-12 w-full rounded-md' style={{background:`url(${tourData?.data?.data?.thumbnail})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}>
                <div className='absolute inset-0 bg-black/20 w-full'></div>
                <div className='w-fit relative flex items-center justify-start top-[70%] left-[5%] '>
                    <div className='flex flex-col items-start'>
                        <h1 className={`${rowdies.className} lg:text-7xl text-3xl w-fit text-[#DFDCDC]/70`}>{tour.title}</h1>
                        <p className={`${rowdies.className} lg:text-5xl text-2xl absolute top-10 antialiased text-white`}>{tour.title}</p>
                    </div>
                </div>
            </section>
            <section className='lg:flex-row flex-col lg:gap-12 gap-4 w-full lg:my-12 my-4 justify-between'>
                <div className='lg:w-[65%] w-full'>
                    <section className='grid lg:grid-cols-3 grid-cols-2 gap-4 bg-[#5D83C4]/20 rounded-md px-8 py-6 shadow-md'>
                        {
                            minitourDetails.map((item,index)=>(
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
                    
                    <TourOverView name={tour?.title} overview={tourData?.data?.data?.overview}/>
                    <TrekHighLights title={tour?.title} trekHighlights={tourHighLights}/>
                    <Services servicesIncluded={servicesIncluded} servicesNotIncluded={servicesNotIncluded}/>
                    <Itinerary itinerary={itineraryList}/>
                    <TripQuote title={tour?.title} desc={tour.desc}/>
                    <div className='my-12'>
                        <SharedTitle2 title='Things To Know' />
                        <LinedContainer>
                            <div className='mt-8'>
                                {tourData?.data?.data?.thingsToKnow?.map((item:string, index:number) => (
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
                    
                    <Gallery title={tour?.title} gallery={gallery}/>
                </div>
                <div className='lg:w-[35%] w-full flex justify-start flex-col items-center'>
                    <RightSide price={tour?.price} name={tour?.title} _id={tourData?.data?.data?._id} slug={tourData?.data?.data?.slug} category={tourData?.data?.data?.category}/>
                </div>
            </section>
            
        </main>
    )
}

export default SingleTour
