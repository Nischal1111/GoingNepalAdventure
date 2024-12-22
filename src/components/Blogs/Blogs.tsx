"use client"
import SharedSection from '@/shared/SharedSection'
import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import BlogSection from '../Home/Blogs/BlogSection'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { useQuery } from '@tanstack/react-query'
import { getAllBlogs, searchBlogs } from '@/services/blogs'
import Loader from '@/shared/Loader'
import Link from 'next/link'
import { Input } from '@nextui-org/react'
import { FaSearch } from 'react-icons/fa'
import { rowdies } from '@/utility/font'
import { FaRegEye } from 'react-icons/fa6'

interface Blogs{
    blogImage:string
    title:string
    description:string
    createdAt:string
    slug:string
    blogViews:string
}
const Blogs = () => {
    const [search,setSearch]=React.useState<string>("")

    const {data:allblogsData,isLoading}=useQuery({
        queryKey:["blogs","all"],
        queryFn:()=>getAllBlogs()
    })

    const {data:searchData}=useQuery({
        queryKey:["blogs",search],
        queryFn:()=>searchBlogs(search),
        enabled:!!search
    })

    const allblogs=searchData?.data||allblogsData?.data


    if(isLoading)return <Loader/>
    return (
        <div className='w-full'>
            <SharedSection title='Blogs' link='/blogs' img="https://images.unsplash.com/photo-1665575070545-5be57b8142be?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <SharedTitle title="Travel Blogs" subTitle='Insipration for you'/>
            <div className='lg:px-20 px-4 py-12'>
                <BlogSection/>
                <div className='w-full flex lg:flex-row flex-col gap-4 items-center justify-between my-4'>
                    <h1 className={`lg:w-3/5 font-semibold text-4xl ${rowdies.className} text-primary`}>All Blogs</h1>
                    <Input placeholder='Search Blogs' value={search} onChange={(e)=>setSearch(e.target.value)} className='lg:w-[30%] w-full py-4' size='lg' radius='sm' classNames={{inputWrapper:"bg-white border border-gray-200 group-data-[focus=true]:bg-white"}} startContent={<FaSearch className='text-gray-500 mr-2' size={20}/>}></Input>
                </div>
                <div className='grid lg:grid-cols-4 grid-cols-1 gap-x-10 lg:gap-y-10 gap-y-4 my-6'>
                    {allblogs?.map((blog:Blogs,index:number)=>(
                        <div key={index} className='w-full flex flex-col gap-2 pb-2 shadow-sm'>
                            <div className='w-full h-[200px]'>
                                <Image src={blog?.blogImage} alt={blog?.title} height={1000} width={1000} className='object-cover shadow-md h-full w-full rounded-sm'/>
                            </div>
                            <div className='flex flex-col w-full px-2'>
                                <h1 className='font-semibold text-lg'>{blog?.title}</h1>
                                <div className='flex items-center justify-between text-gray-500 mt-2 text-sm'>
                                    <p>{blog?.createdAt?.split("T")[0]}</p>
                                    <p>By Admin</p>
                                </div>
                                <Link href={`/blogs/${blog?.slug}`} className='w-full flex items-center justify-between mt-4 '>
                                    <div className='underline underline-offset-2 text-primary text-base flex gap-1 items-center cursor-pointer group'>
                                        <p>View post </p>
                                        <BsArrowRight className='transform transition-transform duration-200 group-hover:-rotate-45' />
                                    </div>
                                    <p className='text-xs text-gray-600 flex items-center'><FaRegEye size={12} className='mr-2'/>{blog?.blogViews} Views</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Blogs
