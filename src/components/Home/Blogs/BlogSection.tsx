"use client"
import React from 'react'
import Image from 'next/image'
import { GoDotFill } from 'react-icons/go';
import { BsArrowRight } from 'react-icons/bs';
import {  FaRegEye } from 'react-icons/fa';
import { Button } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import {getBlogsByViews } from '@/services/blogs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Blogs{
    blogImage:string
    title:string
    description:string
    createdAt:string
    slug:string
    blogViews:string
}

const BlogSection = () => {
    
    const {data:blogsData}=useQuery({
        queryKey:["popularblogs"],
        queryFn:()=>getBlogsByViews()
    })



    const pathname=usePathname()as string

  return (
    <main className='flex gap-12 items-stretch w-full pb-12 z-[999]'>

            <section className='w-3/5 flex flex-col gap-2'>
                <Image src={blogsData?.data[0]?.blogImage} alt={blogsData?.data[0]?.title} height={1000} width={1000} className='object-cover shadow-md rounded-md w-full h-[400px]'/>
                <div className='text-gray-600 flex items-center gap-2 text-sm'>
                    <p>By Admin</p>
                    <GoDotFill size={8}/>
                    <p>{blogsData?.data[0]?.createdAt?.split("T")[0]}</p>
                    <GoDotFill size={8}/>
                    <p className='text-xs text-gray-600 flex items-center'><FaRegEye size={12} className='mr-2'/>{blogsData?.data[0]?.blogViews} Views</p>
                </div>
                <h1 className='font-bold text-2xl'>{blogsData?.data[0]?.title}</h1>
                <div className='flex items-center justify-between mt-auto'>
                    <Link href={`/blogs/${blogsData?.data[0]?.slug}`}>
                        <div className='underline underline-offset-2 text-primary text-base flex gap-1 items-center cursor-pointer group'>
                            <p>View post </p>
                            <BsArrowRight className='transform transition-transform duration-200 group-hover:-rotate-45' />
                        </div>
                    </Link>
                    
                </div>
            </section>
        
        <section className='w-2/5 flex flex-col gap-6'>
            {blogsData?.data?.slice(1,4).map((blog:Blogs, index:number) => (
                
                <div key={index} className='flex gap-4'>
                    <Image src={blog?.blogImage} alt={blog?.title} height={500} width={500} className='object-cover shadow-md rounded-md w-1/3 h-[120px]'/>
                    <div className='flex flex-col justify-between w-2/3'>
                        <div>
                            <div className='text-gray-600 flex items-center gap-2 text-xs'>
                                <p>By Admin</p>
                                <GoDotFill size={6}/>
                                <p>{blog?.createdAt?.split("T")[0]}</p>
                                <GoDotFill size={6}/>
                                <p className='text-xs text-gray-600 flex items-center'><FaRegEye size={12} className='mr-2'/>{blog?.blogViews} Views</p>
                            </div>
                            <h3 className='font-semibold text-base mt-1'>{blog?.title}</h3>
                        </div>
                        <Link href={`/blogs/${blog?.slug}`}>
                            <div className='underline underline-offset-2 text-primary text-sm flex gap-1 items-center cursor-pointer group'>
                                <p>View post </p>
                                <BsArrowRight className='transform transition-transform duration-200 group-hover:-rotate-45' />
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
            {pathname!=="/blogs" && (
                <Link href={"/blogs"}>
                    <Button className='rounded-md px-12 w-fit bg-primary text-white'>View all</Button>
                </Link>
            )}
        </section>

    </main>
  )
}

export default BlogSection