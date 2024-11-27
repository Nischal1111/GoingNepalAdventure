import React from 'react'
import Image from 'next/image'
import { GoDotFill } from 'react-icons/go';
import { BsArrowRight } from 'react-icons/bs';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { Button } from '@nextui-org/react';

export const blogs = [
    {
        title: "The Ultimate Guide to Mountain Trekking",
        image: "/assets/hot_air_balloon.avif",
        date: "2024-10-01"
    },
    {
        title: "Top 10 Trekking Destinations for Beginners",
        image: "/assets/mountain_biking.avif",
        date: "2024-09-28"
    },
    {
        title: "How to Prepare for Your First Trekking Adventure",
        image: "/assets/activities.avif",
        date: "2024-09-15"
    },
    {
        title: "Essential Gear for a Successful Trek",
        image: "/assets/hero.jpg",
        date: "2024-08-30"
    },{
        title: "The Ultimate Guide to Mountain Trekking",
        image: "/assets/hot_air_balloon.avif",
        date: "2024-10-01"
    },
];

const BlogSection = () => {
    

  return (
    <main className='flex gap-12 items-stretch w-full pb-12 z-[999]'>
        <section className='w-3/5 flex flex-col gap-2'>
            <Image src={blogs[0].image} alt={blogs[0].title} height={1000} width={1000} className='object-cover rounded-md w-full h-[400px]'/>
            <div className='text-gray-400 flex items-center gap-2 text-sm'>
                <p>By Admin</p>
                <GoDotFill size={8}/>
                <p>{blogs[0].date}</p>
            </div>
            <h1 className='font-bold text-2xl'>{blogs[0].title}</h1>
            <div className='flex items-center justify-between mt-auto'>
                <div className='underline underline-offset-2 text-primary text-base flex gap-1 items-center cursor-pointer group'>
                    <p>View post </p>
                    <BsArrowRight className='transform transition-transform duration-200 group-hover:-rotate-45' />
                </div>
                <div className='flex gap-4'>
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
        
        <section className='w-2/5 flex flex-col gap-6'>
            {blogs.slice(1).map((blog, index) => (
                <div key={index} className='flex gap-4'>
                    <Image src={blog.image} alt={blog.title} height={500} width={500} className='object-cover rounded-md w-1/3 h-[120px]'/>
                    <div className='flex flex-col justify-between w-2/3'>
                        <div>
                            <div className='text-gray-400 flex items-center gap-2 text-xs'>
                                <p>By Admin</p>
                                <GoDotFill size={6}/>
                                <p>{blog.date}</p>
                            </div>
                            <h3 className='font-semibold text-base mt-1'>{blog.title}</h3>
                        </div>
                        <div className='underline underline-offset-2 text-primary text-sm flex gap-1 items-center cursor-pointer group'>
                            <p>View post </p>
                            <BsArrowRight className='transform transition-transform duration-200 group-hover:-rotate-45' />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    </main>
  )
}

export default BlogSection