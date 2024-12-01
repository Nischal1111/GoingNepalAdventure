"use client"
import { getSingleBlog } from '@/services/blogs'
import Loader from '@/shared/Loader'
import { Button } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React from 'react'
import { FaChevronCircleLeft, FaInstagram, FaLinkedin, FaRegEye } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'

interface paramsprops {
    id:string
}
const SingleBlog:React.FC<paramsprops> = ({id}) => {
    const {data:singleBlog,isLoading}=useQuery({
        queryKey:['singleBlog',id],
        queryFn:()=>getSingleBlog(id)
    })
      if(isLoading)return <Loader/>
    return (
        <div className='w-full px-56 relative'>
            <Button
                className='absolute -top- left-20 z-50 rounded-full bg-primary p-0 text-white'
                isIconOnly
                onClick={() => window.history.back()}
            ><FaChevronCircleLeft /></Button>
            <h1 className='font-bold text-3xl w-4/5 mt-8'>
                {singleBlog?.data?.title}
            </h1>
            <div className='w-full flex items-center justify-between text-primary'>
                <div className='flex items-center gap-8 mt-4 font-bold'>
                    <h1>By Admin</h1>
                    <p>Published On: {singleBlog?.data?.createdAt?.split("T")[0]}</p>
                </div>
                <div className='flex items-center gap-2 mt-4 font-bold text-primary'>
                    <FaRegEye size={16}/>
                    <p>{singleBlog?.data?.blogViews} Views</p>
                </div>
            </div>
            <div className='w-full h-[500px] mb-12 mt-6'>
                <Image src={singleBlog?.data?.blogImage} alt="blog image" width={1000} height={1000} className='object-cover h-full w-full rounded-md'/>
            </div>
            <p className='my-12 text-justify text-lg leading-10'>
                {singleBlog?.data?.description}
            </p>
            <div className='flex gap-4 items-center justify-end w-full'>
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
    )
}

export default SingleBlog
