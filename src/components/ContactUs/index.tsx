"use client"
import Breadcrumb from '@/shared/BreadCrumbs'
import SharedTitle from '@/shared/SharedTitle'
import { Button, Input, Textarea } from '@nextui-org/react'
import { Rowdies } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'
import { IoMdCall, IoMdClock, IoMdMail } from 'react-icons/io'
import Image from 'next/image'
import { IoLocation } from 'react-icons/io5'

const rowdies=Rowdies({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
const ContactUs = () => {
    const details=[
        {
            title:"Philipines",
            location:"4th Floor Unit 4A, 335 Mille Bldg. Sen. Gil Puyat Avenue corner Dominga Street, Pasay City 1300",
            phone:"+63 2 586-06-94, +63 2 215-81-06",
            email:"bong.agrazada@herodtravel.com",
            img:"/assets/countries/phil.png"
        },
        {
            title:"Argentina",
            location:"Av. Andrés Rolón 100, Local 19 San Isidro, Buenos Aires, Argentina",
            phone:"+54 11 5350-8169",
            email:"hola@viajoya.com.ar",
            img:"/assets/countries/arg.webp"
        },
        {
            title:"Sri Lanka",
            location:"Absolute Sri-Lanka 7B, Mission Road, Kotte,Sri Lanka.",
            phone:"+94 11 2 861946",
            email:"sales_marketing@absolutesrilanka.asia",
            img:"/assets/countries/sri.webp"
        },
        {
            title:"India",
            location:"Second Floor Regency House, M.G Road, Secundarabad 03, Hyderabad - 500082",
            phone:"+94 11 2 861946",
            email:"director@valmikitravels.com",
            img:"/assets/countries/ind.webp"
        },
        {
            title:"Turkey",
            location:"Ulke Sok.Ulke Apt. No:9 B 34738 Erenkoy - Kadikoy / Istanbul",
            phone:"+90 532 311 18 88",
            email:"info@seyahatterzisi.com.tr",
            img:"/assets/countries/tur.webp"
        }
    ]
    return (
        <main className='relative w-full'>
            <section className='relative h-[70vh] w-full' style={{background:"url('/assets/contactBG.jpg')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}>
                <div className='absolute inset-0 bg-black/20 w-full'></div>
                <Breadcrumb title={"Contact Us"} link='/contact-us'/>
            </section>

            <section className='relative flex items-center justify-center top-[-5rem] '>
                <div className='w-[90%] bg-primary/80 flex items-start justify-between rounded-md px-12 py-8 text-white'>
                    <section className='flex flex-col gap-4 font-light z-[999]'>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-semibold text-xl tracking-wide'>Visit us at</h1>
                            <div className='bg-white h-[2px] w-24'></div>
                        </div>
                        <div className='flex flex-col gap-2 px-2'>
                            <p className='tracking-wide'>Kathmandu Metropolitan City,</p>
                            <p className='tracking-wide'>Ward No 2, Uttar Dhoka Marg,</p>
                            <p className='tracking-wide'>Lazimpat, Kathmandu, Nepal</p>
                        </div>
                    </section>

                    <section className='flex flex-col gap-4 font-light'>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-semibold text-xl tracking-wide'>Contact us at</h1>
                            <div className='bg-white h-[2px] w-24'></div>
                        </div>
                        <div className='flex flex-col gap-2 px-2'>
                            <div className='flex items-center gap-2'>
                                <IoMdCall size={20}/>
                                <div className='bg-white h-[.5px] w-4'></div>
                                <p className='tracking-wide'>+977-1-4519145 / 1-4517230</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoMdMail size={20}/>
                                <div className='bg-white h-[.5px] w-4'></div>
                                <p className='tracking-wide'>info@goingnepal.com /<br></br> goingnepal@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoMdClock size={20}/>
                                <div className='bg-white h-[.5px] w-4'></div>
                                <p className='tracking-wide'>(9:00am - 05:00pm office hour)</p>
                            </div>
                        </div>
                    </section>

                    <section className='flex flex-col gap-4 font-light'>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-semibold text-xl tracking-wide'>Follow Us On</h1>
                            <div className='bg-white h-[2px] w-24'></div>
                        </div>
                        <div className='flex flex-col gap-2 px-2'>
                            <div className='flex items-center gap-3'>
                                <FiFacebook size={20}/>
                                <div className='bg-white h-[.5px] w-4'></div>

                                <Link href={"https://www.facebook.com/going2nepal/"} target='_blank'>
                                    <p className='tracking-wide underline underline-offset-4'>facebook.com/goingnepal</p>
                                </Link>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaInstagram size={20}/>
                                <div className='bg-white h-[.5px] w-4'></div>
                                <Link href={"https://www.instagram.com/goingnepal/"} target='_blank'>
                                    <p className='tracking-wide underline underline-offset-4'>instagram.com/goingnepal</p>
                                </Link>

                            </div>
                            <div className='flex items-center gap-3'>
                                <FaXTwitter size={20}/>
                                <div className='bg-white h-[.5px] w-4'></div>
                                <Link href={"https://x.com/goingnepal"} target='_blank'>      
                                    <p className='tracking-wide underline underline-offset-4'>x.com/goingnepal</p>
                                </Link>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaLinkedin size={20}/>
                                <div className='bg-white h-[.5px] w-4'></div>
                                <Link href={"https://www.linkedin.com/in/liladhar-bhandari-1b4832140/?originalSubdomain=np"} target='_blank'>      
                                    <p className='tracking-wide underline underline-offset-4'>linkedin.com/goingnepal</p>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <section className='px-16 h-[600px]'>
                <div className='flex items-start justify-between gap-12 w-full'>
                    <div className='w-1/2 px-12'>
                        <section className='w-full h-[600px] rounded-xl' style={{background:"url('/assets/contactFormBg.jpg')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}></section>
                    </div>
                    <div className='flex flex-col gap-8 w-1/2 items-center justify-center'>
                        <h1 className={`${rowdies.className} font-semibold text-2xl tracking-wider`}>Feel free to reach out to us</h1>
                        <form action="" className='flex flex-col gap-8 w-full px-8'>
                            <Input type='text' size='lg' label="Name" labelPlacement='outside' radius='sm' required placeholder='Enter your name' variant='bordered' className='bg-white' />
                            <Input type='email' size='lg' required label="Email" radius='sm' labelPlacement='outside' placeholder='Enter your email' variant='bordered'  className='bg-white'/>
                            <Textarea
                                type='text'
                                size='lg'
                                label="Message"
                                radius='sm'
                                labelPlacement='outside'
                                placeholder='Enter your message'
                                classNames={{
                                    inputWrapper:"bg-white border border-gray-300 shadow-md",
                                    input: "bg-white text-red-400 min-h-[150px]"
                                }}
                            />
                            <Button className='bg-primary rounded-md px-12 text-white w-fit'>Submit</Button>

                        </form>
                    </div>
                </div>
            </section>

            <div className="w-full h-[90vh] my-16">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9927385581045!2d85.32190857546776!3d27.717510476176777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19da434dc251%3A0x9f38fff86882064b!2sGoing%20Nepal%20Pvt%20Ltd%2C%20Tailor-Made%20Luxury%20DMC!5e0!3m2!1sen!2snp!4v1728413039018!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    style={{border:"none",outline:"none"}}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            <section className=' bg-white px-12 py-8'>
                <SharedTitle title='Our Contacts Abroad' subTitle='Our Contacts Abroad'/>
                <div className='grid grid-cols-3 items-start gap-12 my-12'>
                    {details.map((item,index)=>{
                        return(
                            <div key={index} className='flex flex-col gap-4 rounded-md border border-primary/20 p-4 '>
                                <div className='flex gap-8 items-center'>
                                    <Image src={item.img} alt={item.title} height={1000} width={1000} className='rounded-full size-16 object-cover'/>
                                    <h1 className='font-semibold tracking-wide text-xl'>{item.title}</h1>
                                </div>
                                <div className='flex flex-col gap-4 px-2 text-sm'>
                                    <div className='flex items-center gap-2'>
                                        <IoLocation size={20} className='text-primary'/>
                                        <div className='bg-black h-[.5px] w-4'></div>
                                        <p className='tracking-wide w-4/5'>{item.location}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <IoMdMail size={20} className='text-primary'/>
                                        <div className='bg-black h-[.5px] w-4'></div>
                                        <p className='tracking-wide'>{item.email}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <IoMdCall size={20} className='text-primary'/>
                                        <div className='bg-black h-[.5px] w-4'></div>
                                        <p className='tracking-wide'>{item.phone}</p>
                                    </div>
                                </div>
                            </div>  
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default ContactUs