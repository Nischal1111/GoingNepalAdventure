"use client"
import React from 'react'
import { trekProps } from './types'
import SharedTitle2 from '@/shared/SharedTitle2'
import { Button } from '@nextui-org/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider, { CustomArrowProps } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

interface CustomArrowComponentProps extends CustomArrowProps {
    onClick?: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute left-4 top-1/2 text-white -translate-y-1/2 z-10 bg-primary/40 bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronLeft />
    </Button>
)

const CustomNextArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute right-2 top-1/2 text-white -translate-y-1/2 z-10 bg-primary/40 bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronRight/>
    </Button>
)

interface props{
    title:string
    gallery:trekProps["gallery"]
    className?:string
}

const Gallery:React.FC<props> = ({title,gallery,className}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplay:true,
        pauseOnHover: true,
        autoplaySpeed:4000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <main className={`mt-16 ${className}`}>
                <SharedTitle2 title={`${title} Gallery`}/>
                <div className="relative px-0 py-8 w-full mt-4">
                    <Slider {...settings} className='px-12'>
                        {gallery?.map((item,index)=>{
                            return(
                                <div key={index} className='h-[200px] w-[150px] px-4'>
                                    <Image src={item} alt='Image' height={1000} width={1000} className='object-cover h-full w-full rounded-md shadow-md'/>
                                </div>
                            )
                        })}
                    </Slider>
            </div>
            </main>

            <main className={`mt-8 ${className}`}>
                <SharedTitle2 title={`${title} Video`}/>
                <div className="w-[90%] h-[50vh] bg-primary my-12 relative overflow-hidden">
                    <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/19g66ezsKAg`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    />
                </div>
            </main>
        </>
    )
}

export default Gallery
