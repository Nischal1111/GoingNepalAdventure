import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import CardSlider from './CardSlider'
import { Button } from '@nextui-org/react'
import Link from 'next/link'


const TrekkingDeals = () => {
    
    const trekbg = "/assets/trekBG.jpg";

    return (
        <main className='relative my-12'>
            <div 
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: `url(${trekbg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    opacity: 0.05,
                    }}
                ></div>
            <SharedTitle title='Popular Treks' subTitle='Best Selling Packages'/>
            <CardSlider/>
            <div className='flex items-center justify-center'>
                <Link href={"/treks"}>
                    <Button className=' w-fit bg-primary rounded-md -mt-8 text-white px-8'>View all Treks</Button>
                </Link>
            </div>
        </main>
    )
}

export default TrekkingDeals
