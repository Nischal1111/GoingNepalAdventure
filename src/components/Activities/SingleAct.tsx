'use client'
import { getActivitybySlug } from '@/services/activities'
import { rowdies } from '@/utility/font'
import { Button } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FaChevronCircleLeft, FaMapMarkerAlt, FaMountain, FaRegClock, FaUserFriends } from 'react-icons/fa'
import TourOverView from '../SingleTour/TourOverview'
import Services from './Services'
import Loader from '@/shared/Loader'
import SharedTitle2 from '@/shared/SharedTitle2'
import LinedContainer from '@/shared/LinedContainer'
import TrekFAQs from '../SingleTrek/TrekFAQs'
import Dot from '@/utility/Dot'
import Gallery from '../SingleTrek/Gallery'
import RightSide from './RightSide/Right'

interface Props {
    id:string
}
const SingleAct:React.FC<Props> = ({id}) => {

    const {data:activityData,isLoading}=useQuery({
        queryKey:['activity'],
        queryFn:()=>getActivitybySlug(id),
        enabled:!!id
    })

    const minitourDetails = [
    {
        title: "Country",
        value: activityData?.data?.country,
        icon: <FaMapMarkerAlt className='text-primary' size={28}/>
    },
    {
        title: "Duration",
        value: `1 day`,
        icon: <FaRegClock className='text-primary' size={28}/>
    },
    {
        title: "Best Season",
        value:activityData?.data?.bestSeason?.join(", "),
        icon: <FaMountain className='text-primary' size={28}/>
    },
    {
        title: "Group Size",
        value: `${activityData?.data?.groupSize?.min} - ${activityData?.data?.groupSize?.max} people`,
        icon: <FaUserFriends className='text-primary' size={28}/>
    },
    ];
    const servicesIncluded= activityData?.data?.serviceIncludes
    const FAQs=activityData?.data?.FAQs
    const gallery=activityData?.data?.gallery
    

    if(isLoading){
        return (
            <Loader/>
        )}
    
    return (
        <main className='relative px-16'>
            <Button
                className='absolute top-0 left-4 z-50 rounded-full bg-primary p-0 text-white'
                isIconOnly
                onClick={() => window.history.back()}
            >
                <FaChevronCircleLeft />
            </Button>
            <section className='relative h-[75vh] mt-4 w-full rounded-md' style={{
                background: `url(${activityData?.data?.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed"
            }}>
                <div className='absolute inset-0 bg-black/20 w-full'></div>
                <div className='w-fit relative flex items-center justify-start top-[70%] left-[5%] '>
                    <div className='flex flex-col items-start'>
                        <h1 className={`${rowdies.className} text-7xl w-fit text-[#DFDCDC]/70`}>{activityData?.data?.title}</h1>
                        <p className={`${rowdies.className} text-5xl absolute top-10 antialiased text-white`}>{activityData?.data?.title}</p>
                    </div>
                </div>
            </section>
            <section className='flex gap-12 w-full my-12 justify-between'>
                <div className='w-[65%]'>
                    <section className='grid grid-cols-3 gap-4 bg-[#5D83C4]/20 rounded-md px-8 py-6 shadow-md'>
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
                    <TourOverView name={activityData?.data?.title} overview={activityData?.data?.overview}/>
                    <Services servicesIncluded={servicesIncluded}/>
                    <div className='my-12'>
                        <SharedTitle2 title='Things To Know' />
                        <LinedContainer>
                            <div className='mt-8'>
                                {activityData?.data?.thingsToKnow?.map((item:string, index:number) => (
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
                    <Gallery title={activityData?.data?.title} gallery={gallery}/>
                </div>
                <div className='w-[35%] flex justify-start flex-col items-center'>
                    <RightSide price={activityData?.data?.price} name={activityData?.data?.title}/>
                </div>
            </section>
        </main>
    )
}

export default SingleAct
