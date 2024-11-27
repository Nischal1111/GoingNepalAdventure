import SharedSection from '@/shared/SharedSection'
import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import BlogSection, { blogs } from '../Home/Blogs/BlogSection'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'

const Blogs = () => {
    return (
        <div className='w-full'>
            <SharedSection title='Blogs' link='/blogs' img="https://images.unsplash.com/photo-1665575070545-5be57b8142be?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <SharedTitle title="Travel Blogs" subTitle='Insipration for you'/>
            <div className='px-20 py-12'>
                <BlogSection/>
                <div className='grid grid-cols-4 gap-x-10 gap-y-10 my-6'>
                    {blogs.map((blog,index)=>(
                        <div key={index} className='w-full flex flex-col gap-2 pb-2 shadow-sm'>
                            <div className='w-full h-[200px]'>
                                <Image src={blog.image} alt={blog.title} height={1000} width={1000} className='object-cover h-full w-full rounded-sm'/>
                            </div>
                            <div className='flex flex-col w-full px-2'>
                                <h1 className='font-semibold text-lg'>{blog.title}</h1>
                                <div className='flex items-center justify-between text-gray-500 mt-2 text-sm'>
                                    <p>{blog.date}</p>
                                    <p>By Admin</p>
                                </div>
                                <div className='underline underline-offset-2 text-primary text-base mt-2 flex gap-1 items-center cursor-pointer group'>
                                    <p>View post </p>
                                    <BsArrowRight className='transform transition-transform duration-200 group-hover:-rotate-45' />
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Blogs
