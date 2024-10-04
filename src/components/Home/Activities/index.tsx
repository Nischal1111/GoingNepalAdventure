"use client"
import SharedTitle from '@/shared/SharedTitle';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider, { CustomArrowProps } from 'react-slick';

interface CustomArrowComponentProps extends CustomArrowProps {
    onClick?: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute left-4 top-1/2 text-white -translate-y-1/2 z-10 bg-primary/60 bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronLeft />
    </Button>
);

const CustomNextArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute right-2 top-1/2 text-white -translate-y-1/2 z-10 bg-primary/60 bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronRight />
    </Button>
);

interface ActivityProps {
    activity: {
        title: string;
        img: string;
    };
}

const ActivityCard: React.FC<ActivityProps> = ({ activity }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-md mx-2 group transition ease-in-out duration-300">
            <div className="h-[300px] w-full overflow-hidden">
                <Image
                    src={activity.img}
                    alt={activity.title}
                    height={1000}
                    width={1000}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="absolute bottom-0 left-0 w-3/4 bg-white text-primary group-hover:bg-primary group-hover:text-white transition duration-300 cursor-pointer rounded-sm py-2 px-4 -translate-y-1/2 shadow-2xl">
                <h3 className="text-lg font-semibold">{activity.title}</h3>
            </div>
        </div>
    );
};

const Activities = () => {
    const activities = [
        { id: 1, title: "Climbing", img: "/assets/hero.jpg" },
        { id: 2, title: "Hiking", img: "/assets/hiking.avif" },
        { id: 3, title: "Wildlife", img: "/assets/wildlife.avif" },
        { id: 4, title: "Zoo", img: "/assets/zoo.avif" },
        { id: 5, title: "Paragliding", img: "/assets/activities.avif" },
        { id: 6, title: "Hot Air Balloon", img: "/assets/hot_air_balloon.avif" },
        { id: 7, title: "Rafting", img: "/assets/rafting.avif" },
        { id: 8, title: "Mountain Biking", img: "/assets/mountain_biking.avif" }
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <main className="px-16 my-16 mt-24">
            <SharedTitle title="Activities" subTitle="Explore thrilling activities" />
            <Slider {...settings} className='mt-20'>
                {activities.map(activity => (
                    <ActivityCard key={activity.id} activity={activity} />
                ))}
            </Slider>
        </main>
    );
};

export default Activities;
