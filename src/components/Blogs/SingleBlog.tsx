"use client"
import { getSingleBlog } from '@/services/blogs'
import Loader from '@/shared/Loader'
import { Button } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { useMemo } from 'react'
import { FaChevronCircleLeft, FaRegEye } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'
import { GoLink } from 'react-icons/go'
import { IoMdMail } from 'react-icons/io'
import { toast } from 'sonner'
import { parseContentWithLinks } from '../SingleTrek/Itinerary'

interface ParamsProps {
    id: string
}

// Define a type for the blog data to ensure type safety
interface BlogData {
    title?: string;
    description?: string;
    createdAt?: string;
    blogViews?: number;
    blogImage?: string;
    links?: string | string[];
}

const SingleBlog: React.FC<ParamsProps> = ({ id }) => {
    const { data: singleBlog, isLoading } = useQuery({
        queryKey: ['singleBlog', id],
        queryFn: () => getSingleBlog(id)
    })

    // Safely extract blog data with default values
    const blogData: BlogData = useMemo(() => {
        // Provide safe default values
        if (!singleBlog?.data) return {
            title: 'Untitled Blog',
            description: '',
            createdAt: new Date().toISOString(),
            blogViews: 0,
            blogImage: '/placeholder-image.jpg',
            links: []
        };

        return {
            title: singleBlog.data.title || 'Untitled Blog',
            description: singleBlog.data.description || '',
            createdAt: singleBlog.data.createdAt || new Date().toISOString(),
            blogViews: singleBlog.data.blogViews || 0,
            blogImage: singleBlog.data.blogImage || '/placeholder-image.jpg',
            links: singleBlog.data.links || []
        };
    }, [singleBlog]);

    // Safely parse description
    const parsedDescription = useMemo(() => {
        try {
            // Attempt to strip HTML tags and extract text
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = blogData.description || '';
            return tempDiv.textContent || tempDiv.innerText || '';
        } catch (error) {
            console.error('Error parsing description:', error);
            return blogData.description || '';
        }
    }, [blogData.description]);

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = blogData.title;

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

    if (isLoading) return <Loader />

    return (
        <div className='w-full px-56 relative'>
            <Button
                className='absolute -top- left-20 z-50 rounded-full bg-primary p-0 text-white'
                isIconOnly
                onClick={() => window.history.back()}
            ><FaChevronCircleLeft /></Button>
            
            <h1 className='font-bold text-3xl w-4/5 mt-8'>
                {blogData.title}
            </h1>
            
            <div className='w-full flex items-center justify-between text-primary'>
                <div className='flex items-center gap-8 mt-4 font-bold'>
                    <h1>By Admin</h1>
                    <p>Published On: {blogData.createdAt?.split("T")[0]}</p>
                </div>
                <div className='flex items-center gap-2 mt-4 font-bold text-primary'>
                    <FaRegEye size={16} />
                    <p>{blogData.blogViews} Views</p>
                </div>
            </div>
            
            <div className='w-full h-[500px] mb-12 mt-6'>
                <Image 
                    src={blogData?.blogImage!} //eslint-disable-line @typescript-eslint/no-non-null-asserted-optional-chain
                    alt="blog image" 
                    width={1000} 
                    height={1000} 
                    className='object-cover h-full w-full rounded-md'
                />
            </div>
            
            <p className='my-12 text-justify text-lg leading-10'>
                {parseContentWithLinks(parsedDescription, Array.isArray(singleBlog?.data?.links) ? singleBlog?.data?.links : [singleBlog?.data?.links])}
            </p>
            
            <div className='flex gap-4 items-center justify-end w-full'>
                <Button isIconOnly size='sm' className='bg-pink-400 text-white' onPress={handleCopy}>
                    <GoLink className="lg:text-lg md:text-2xl text-2xl" />    
                </Button>
                <Button isIconOnly size='sm' className='bg-primary text-white' onPress={() => handleShare('facebook')}>
                    <FiFacebook size={22} className='transition duration-300 ' />
                </Button>
                <Button isIconOnly size='sm' className='bg-black text-white' onPress={() => handleShare('twitter')}>
                    <FaXTwitter size={20} className='transition duration-300 ' />
                </Button>
                <Button isIconOnly size='sm' className='bg-red-400 text-white' onPress={() => handleShare('email')}>
                    <IoMdMail size={20} className='transition duration-300 ' />
                </Button>
            </div>
        </div>
    )
}

export default SingleBlog