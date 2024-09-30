import { Button, Divider } from '@nextui-org/react'
import React from 'react'
import Image from 'next/image'
import { IoMdCall } from 'react-icons/io'

const Navbar = () => {
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
                <p>
                    Home
                </p>
                <p>
                    Hotels
                </p>
                <p>
                    Destinations
                </p>
                <p>
                    Contact Us
                </p>
                <p>
                    About Us
                </p>
            </section>
        </main>
    )
}

export default Navbar
