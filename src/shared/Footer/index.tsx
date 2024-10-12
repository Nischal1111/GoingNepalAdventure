import React from 'react'
import { Button, Divider } from '@nextui-org/react'
import { FiFacebook } from 'react-icons/fi'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'
import { rowdies } from '@/utility/font'

const FooterLink = ({ children}:{children:string}) => (
  <p className="text-sm font-semibold flex items-center gap-2 group cursor-pointer text-zinc-300 hover:text-white">
    <span className="group-hover:translate-x-1 group-hover:underline transition-all duration-300">
      {children}
    </span>
    <BsArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={12} />
  </p>
)

const Footer = () => {
    const national=[
        "/assets/Affiliate/Aff1.JPG",
        "/assets/Affiliate/Aff2.JPG",
        "/assets/Affiliate/Aff3.PNG",
        "/assets/Affiliate/Aff4.JPG",
        "/assets/Affiliate/Aff5.JPG",
    ]
    const international=[
        "/assets/Affiliate/inter/IMG_1917.JPG",
        "/assets/Affiliate/inter/IMG_1918.JPG",
        "/assets/Affiliate/inter/IMG_1919.JPG",
        "/assets/Affiliate/inter/IMG_1920.PNG",
        "/assets/Affiliate/inter/IMG_1921.JPG",
        "/assets/Affiliate/inter/IMG_1922.PNG",
        "/assets/Affiliate/inter/IMG_1923.PNG",
        "/assets/Affiliate/inter/IMG_1924.JPG",
    ]
    const date = new Date().getFullYear()
    return (
        <>
            <main className='flex flex-col my-4 mt-20 gap-4 w-full items-center justify-center'>
                <div className='flex flex-col gap-12 w-full items-center justify-center'>
                    <h1 className={`text-4xl ${rowdies.className}`}>National Affiliates</h1>
                    <div className='flex items-center flex-wrap justify-between px-[12rem] w-full'>
                        {national?.map((item,index)=>{
                            return(
                                <Image key={index} src={item} alt="image" height={1000} width={1000} className='object-contain size-24 rounded-md'/>
                            )
                        })}
                    </div>
                </div>
                <div className='flex flex-col gap-12 mt-12 w-full items-center justify-center'>
                    <h1 className={`text-4xl ${rowdies.className}`}>International Affiliates</h1>
                    <div className='flex items-center flex-wrap justify-between px-[8rem] w-full'>
                        {international?.map((item,index)=>{
                            return(
                                <Image key={index} src={item} alt="image" height={1000} width={1000} className='object-contain size-24 rounded-md'/>
                            )
                        })}
                    </div>
                </div>
            </main>
            <main className='bg-[#161D6F]/90 px-32 mt-12 py-8 pt-16 flex flex-col gap-8 '>
                <main className='flex items-start justify-between'>
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
                            <FooterLink>Home</FooterLink>
                            <FooterLink>Trekking</FooterLink>
                            <FooterLink>Tours</FooterLink>
                            <FooterLink>Activities</FooterLink>
                            <FooterLink>Destinations</FooterLink>
                            <FooterLink>Contact Us</FooterLink>
                            <FooterLink>About Us</FooterLink>
                        </div>
                    </section>

                    <section className='text-white flex flex-col gap-6'>
                        <div className='text-white flex flex-col gap-2'>
                            <h1 className='font-semibold text-lg'>Extra Links</h1>
                            <div className='w-24 bg-white h-[1px]'></div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <FooterLink>Travel Blogs</FooterLink>
                            <FooterLink>Travel Guides</FooterLink>
                            <FooterLink>FAQs</FooterLink>
                            <FooterLink>Resources</FooterLink>
                            <FooterLink>Travel Permits</FooterLink>
                            <FooterLink>Terms and Conditions</FooterLink>
                        </div>
                    </section>
                    <section className='text-white flex flex-col gap-6'>
                        <div className='text-white flex flex-col gap-2'>
                            <h1 className='font-semibold text-lg'>Our Services</h1>
                            <div className='w-24 bg-white h-[1px]'></div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <FooterLink>Trekking Packages</FooterLink>
                            <FooterLink>Luxury Tours</FooterLink>
                            <FooterLink>Customize Own Trips</FooterLink>
                            <FooterLink>MultiDestination Tours</FooterLink>
                        </div>
                    </section>
                </main>
                <main className='flex flex-col w-full gap-4 mt-4 items-center justify-center'>
                    <Divider className='bg-gray-400'/>
                    <div className='flex items-center w-full justify-between text-gray-400'>
                        <p>Copyright © {date} by Going Nepal Adventures</p>
                        <p>© Powered by SBN Innovation PVT. LTD.</p>
                    </div>
                </main>
            </main>
        </>
    )
}

export default Footer