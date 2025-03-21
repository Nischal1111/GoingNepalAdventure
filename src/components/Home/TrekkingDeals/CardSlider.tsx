"use client"
import React from 'react'
import Slider from "react-slick"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomArrowProps } from "react-slick"
import { Button } from '@nextui-org/react';
import Card from './Card';
import { useQuery } from '@tanstack/react-query';
import { getTreksSlider } from '@/services/treks';
import Loader from '@/shared/Loader';

interface CardProps {
    name: string;
    overview: string;
    thumbnail: string;
    price: number;
    days:{min:string,max:string}
    difficulty:string
    slug:string
    discount:string
}
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

const CardSlider: React.FC = () => {
    const {data:trekData,isLoading}=useQuery({
        queryKey: ['trekData'],
        queryFn:()=>getTreksSlider(),
    })

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

    if(isLoading) return <Loader/>

    return (
        <div className="relative lg:px-12 px-4 py-8">
            <Slider {...settings} className='lg:pr-12 pr-0 lg:pl-16 pl-0'>
                {trekData?.data?.data?.map((item:CardProps, index:number) => (
                    <div key={index} className="px-4"><Card discount={item?.discount} name={item?.name} link={item?.slug} overview={item?.overview} image={item?.thumbnail} price={item?.price} days={`${item?.days?.min} - ${item?.days?.max}`} difficulty={item?.difficulty}/></div>
                ))}
            </Slider>
        </div>
    )
}

export default CardSlider