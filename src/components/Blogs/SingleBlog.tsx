"use client"
import { getSingleBlog } from '@/services/blogs'
import Loader from '@/shared/Loader'
import { Button } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React from 'react'
import { FaChevronCircleLeft,FaRegEye } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'
import { GoLink } from 'react-icons/go'
import { IoMdMail } from 'react-icons/io'
import { toast } from 'sonner'

interface paramsprops {
    id:string
}
const SingleBlog:React.FC<paramsprops> = ({id}) => {
    const {data:singleBlog,isLoading}=useQuery({
        queryKey:['singleBlog',id],
        queryFn:()=>getSingleBlog(id)
    })
    
    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = singleBlog?.data?.title

        let shareUrl = "";
        switch (platform) {
        case "twitter":
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
            )}&text=${encodeURIComponent(title || "")}`;
            break;
        case "facebook":
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
            )}`;
            break;
        case "email":
            shareUrl = `mailto:?subject=${encodeURIComponent(
            title || ""
            )}&body=${encodeURIComponent(url)}`;
            break;
        default:
            return;
        }

        window.open(shareUrl, "_blank");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Copied to clipboard");
    };

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
                        <Button isIconOnly size='sm' className='bg-pink-400 text-white' onPress={()=>handleCopy()}>
                            <GoLink className="lg:text-lg md:text-2xl text-2xl" />    
                        </Button>
                        <Button isIconOnly size='sm' className='bg-primary text-white' onPress={()=>handleShare('facebook')}>
                            <FiFacebook size={22} className='transition duration-300 '/>
                        </Button>
                        <Button isIconOnly size='sm' className='bg-black text-white' onPress={()=>handleShare('twitter')}>
                            <FaXTwitter size={20} className='transition duration-300 '/>
                        </Button>
                        <Button isIconOnly size='sm' className='bg-red-400 text-white' onPress={()=>handleShare('email')}>
                            <IoMdMail size={20} className='transition duration-300 '/>
                        </Button>
                        
                    </div>
        </div>
    )
}

export default SingleBlog
