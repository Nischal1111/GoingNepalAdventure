    'use client'
import { getAllActivitys } from '@/services/activities'
import SharedSection from '@/shared/SharedSection'
import { rowdies } from '@/utility/font'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'

interface activityProps {
    title:string,
    slug:string
    thumbnail:string
}
const Activities = () => {
    const {data:activityData}=useQuery({
        queryKey: ['all-activities'],
        queryFn:()=>getAllActivitys(),
    })

    return (
        <div>
            <SharedSection title='Activities' link='/activities' img='https://images.unsplash.com/photo-1709810953776-ee6027ff8104?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <section className='px-16 my-12'>
                <h1 className={`${rowdies.className} text-4xl `}>Adventure Activites in Nepal</h1>
                <p className='text-gray-700 text-justify my-8'>
                    Nepal is a premier destination for adventure seekers, offering a diverse array of thrilling activities set against breathtaking backdrops. From the soaring peaks of the Himalayas to deep river gorges, dense forests, and sprawling plains, Nepal provides both challenging and exhilarating experiences for adrenaline enthusiasts. <br /><br />

                    Whether you&apos;re drawn to the skies, rivers, or rugged landscapes, there&apos;s an adventure to match every interest and thrill level. Paragliding over serene lakes, white-water rafting through rapid rivers, and bungee jumping into dramatic gorges are just a few ways to get your heart racing in Nepal. For trekkers and climbers, the country offers trails that navigate pristine alpine regions and some of the world&apos;s tallest mountains. Other activities include mountain biking along rugged trails, zip-lining through lush valleys, rock climbing on steep cliffs, canyoning down waterfalls, and heli-skiing on fresh, untouched snow in the Himalayas. <br /><br />

                    Each adventure promises a unique way to explore Nepal&apos;s untamed beauty and vibrant culture, making the country a must-visit for thrill-seekers worldwide. <br /><br />
                </p>

            </section>
            <h1 className={`${rowdies.className} text-3xl  mt-4 px-16`}>All Activities</h1>
            <div className='grid grid-cols-4 gap-8 px-16 mt-8'>
                {activityData?.data?.map((activity:activityProps)=>{
                    return(
                        <Link key={activity.slug} href={`/activities/${activity.slug}`}>
                            <div  className="relative h-[300px] mx-auto max-w-[280px] rounded-lg shadow-md group cursor-pointer">
                                <div className="h-full w-full overflow-hidden rounded-lg">
                                    <img
                                        src={activity.thumbnail}
                                        alt={activity.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-3/4 bg-white text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 rounded-sm py-2 px-4 -translate-y-1/2 shadow-2xl">
                                    <h3 className="text-lg font-semibold truncate">{activity.title}</h3>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>    
        </div>
    )
}

export default Activities
