import React from 'react'
import Image from "next/image"
import { Button } from '@nextui-org/react'
import { FiFacebook } from 'react-icons/fi'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <main className='bg-[#161D6F] px-20 mt-12 py-8 pt-16 flex items-start justify-between'>
            <section className='text-white flex flex-col gap-6'>
                <div className='text-white flex flex-col gap-2'>
                    <h1 className='font-semibold text-lg'>Need Help ?</h1>
                    <div className='w-24 bg-white h-[1px]'></div>
                </div>
                <div className='text-zinc-300'>
                    <p className='font-medium text-lg'>Call Us</p>
                    <p className='font-semibold text-sm'>Phone: 014892842</p>
                    <p className='font-semibold text-sm'>Mobile: 9843729421</p>
                </div>
                <div className='text-zinc-300'>
                    <p className='font-medium text-lg'>Email Us</p>
                    <p className='font-semibold text-sm'>info@goingnepaladventure.com</p>
                </div>
                <div className='text-zinc-300'>
                    <p className='font-medium text-lg'>Follow Us On</p>
                    <div className='flex gap-4 mt-2'>
                        <Button isIconOnly size='sm' className='bg-primary text-white'>
                            <FiFacebook size={22} className='transition duration-300 '/>
                        </Button>
                        <Button isIconOnly size='sm' className='bg-pink-400 text-white'>
                            <FaInstagram size={20} className='transition duration-300 '/>      
                        </Button>
                        <Button isIconOnly size='sm' className='bg-black text-white'>
                            <FaXTwitter size={20} className='transition duration-300 '/>
                        </Button>
                        <Button isIconOnly size='sm' className='bg-blue-700 text-white'>
                            <FaLinkedin size={20} className='transition duration-300 '/>
                        </Button>
                    </div>
                </div>
            </section>

            <section className='text-white flex flex-col gap-6'>
                <div className='text-white flex flex-col gap-2'>
                    <h1 className='font-semibold text-lg'>Quick Links</h1>
                    <div className='w-24 bg-white h-[1px]'></div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm font-semibold'>Home</p>
                    <p className='text-sm font-semibold'>Trekking</p>
                    <p className='text-sm font-semibold'>Tours</p>
                    <p className='text-sm font-semibold'>Activities</p>
                    <p className='text-sm font-semibold'>Destinations</p>
                    <p className='text-sm font-semibold'>Hotels</p>
                    <p className='text-sm font-semibold'>Contact Us</p>
                    <p className='text-sm font-semibold'>About Us</p>
                </div>
            </section>

            <section className='text-white flex flex-col gap-6'>
                <div className='text-white flex flex-col gap-2'>
                    <h1 className='font-semibold text-lg'>Extra Links</h1>
                    <div className='w-24 bg-white h-[1px]'></div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm font-semibold'>FAQs</p>
                    <p className='text-sm font-semibold'>Resources</p>
                    <p className='text-sm font-semibold'>Privacy Policy</p>
                    <p className='text-sm font-semibold'>Wellness</p>
                    <p className='text-sm font-semibold'>Travel Permits</p>
                    <p className='text-sm font-semibold'>Legal Documents</p>
                </div>
            </section>
        </main>
    )
}

export default Footer
