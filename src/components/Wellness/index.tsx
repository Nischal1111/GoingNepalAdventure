"use client"
import SharedSection from '@/shared/SharedSection'
import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { getAllWellness } from '@/services/wellness'
import WellnessCard from './WellnessCard'
import { WellnessProps } from '../SingleTrek/types'
import Loader from '@/shared/Loader'

const Wellness = () => {

    const {data:wellnessData,isLoading}=useQuery({
        queryKey:["Wellness"],
        queryFn:()=>getAllWellness()
    })
    const data=wellnessData?.data?.data

    if(isLoading) return <Loader/>

    return (
        <main className='w-full'>
            <SharedSection title='Wellness' link='/wellness' img='/assets/wellness.avif'/>
            <SharedTitle title="Your Wellness" subTitle='Introducing our expertise'/>
            <div className='flex flex-col items-center px-24 py-8'>
                <div className='flex items-start gap-12 w-full'>
                    <div className='w-[300px] h-[300px]'>
                        <Image 
                            src="/assets/wellnessPerson.jpg" 
                            alt='wellness' 
                            height={300} 
                            width={300}  
                            className='object-cover h-full w-full rounded-md shadow-lg'
                        />
                    </div>
                    <div className='flex flex-col w-4/5'>
                        <h1 className='font-semibold text-4xl tracking-wide'>Mr. Krishna Dahal</h1>
                        <h2 className='font-semibold text-2xl tracking-wide text-primary mt-4'>Overview</h2>
                        <p className='text-justify mt-2'>
                            Meet Mr. Krishna Dahal, a distinguished and highly respected expert in the field of therapeutic massage treatments, with a well-established reputation across Europe. His career in wellness and spa management has spanned decades, during which he has garnered immense knowledge and skill in various holistic and healing modalities. Mr. Dahal&apos;s expertise covers an impressive and diverse range of therapeutic practices, making him one of the most sought-after trainers and practitioners in the industry.
                            His mastery extends to the ancient wisdom of Ayurveda, the soothing techniques of Lomi Lomi, and the deep, meditative practices of Shiatsu. Additionally, he is highly proficient in Aroma Therapy, known for its powerful emotional and physical benefits, as well as in Hot Stone Wellness Relaxing Massage, a popular method for relieving tension and promoting relaxation. 
                            His skills also include Deep Tissue Massage, a technique widely praised for its ability to alleviate chronic muscle pain, and the traditional art of Thai Massage, which combines acupressure and assisted yoga postures for enhanced flexibility and well-being.
                        </p>
                    </div>
                </div>
                <p className='text-justify mt-4'>
                    Mr. Dahal is also an expert in Lymphatic Drainage, a specialized technique used to support the body&apos;s immune system by improving lymph flow. His extensive repertoire of body treatments includes a variety of rejuvenating services such as specialized facials, aimed at restoring skin vitality and enhancing natural beauty.
                    In addition to his exceptional expertise in therapeutic massage, Mr. Dahal is a certified Yoga Trainer, further solidifying his comprehensive approach to wellness and his ability to guide others toward both physical and mental well-being. His holistic approach, vast knowledge, and dedication to the art of healing make him an invaluable resource in the world of wellness, ensuring that every client receives a deeply enriching and revitalizing experience.
                </p>
            </div>
            <div className='w-full px-24'>
                <h2 className='font-semibold text-2xl tracking-wide text-primary'>A Holistic Approach to Wellness:</h2>
                <p className='text-justify mt-4'>Guided by Mr. Dahal&apos;s leadership, Senses Spa and Wellness transcends conventional spa programs and massage therapies. We offer an all-encompassing array of treatment-based therapies meticulously crafted to nurture and harmonize the body, mind, and soul. Our holistic approach to wellness activities is dedicated to empowering individuals to harness their inner energy for self-healing and profound transformation. At Senses Spa and Wellness, we&apos;re not just about relaxation; we&apos;re your partners on the journey to holistic well-being.</p>
                <div className='grid grid-cols-2 gap-8 w-full mt-8'>
                    {data?.map((item:WellnessProps,index:number)=>{
                        return(
                            <WellnessCard key={index} {...item}/>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default Wellness