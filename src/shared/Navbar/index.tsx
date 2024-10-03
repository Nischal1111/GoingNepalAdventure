"use client"
import { Button, Divider } from '@nextui-org/react'
import React from 'react'
import Image from 'next/image'
import { IoMdCall } from 'react-icons/io'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const nav=[
        {
            title:"Home",
            link:"/"
        },
        {
            title:"Trekking",
            link:"/trekking"
        },
        {
            title:"Tours",
            link:"/tours"
        },
        {
            title:"Activities",
            link:"/activities"
        },
        {
            title:"Destinations",
            link:"/destinations"
        },
        {
            title:"Hotels",
            link:"/hotels"
        },
        
        {
            title:"Contact Us",
            link:"/contact-us"
        },
        {
            title:"About Us",
            link:"/about-us"
        }
    ]
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <main className='w-full '>
            <section className='flex items-center justify-between py-2 px-12'>
                <div className='flex gap-10 items-center'>
                    <Image src={"/assets/logo.png"} alt='GoingNepalLogo' height={1000} width={1000} className='object-contain h-16 w-28'/>
                    <div className='flex gap-2 items-center'>
                        <IoMdCall size={18}/>
                        <p className='font-semibold'>+977 9867429313</p>
                    </div>
                </div>
                <Button className='rounded-md bg-primary text-white px-12'>Plan trip</Button>
            </section>
            <section className='px-16 py-3 bg-primary text-white flex gap-8 items-center font-semibold tracking-wide'>
                {nav.map((item,index)=>{
                    return(
                        <Link key={index} href={item.link}>
                            <div className='group relative'>
                                <p>{item.title}</p>
                                <span
                                    className={`absolute -bottom-0 left-0 h-[2px] bg-white transition-all ${
                                    isActive(`${item.link}`) ? "w-full" : "w-0"
                                    } group-hover:w-full`}
                                ></span>
                            </div>
                        </Link>
                    )
                })}
            </section>
        </main>
    )
}

export default Navbar
