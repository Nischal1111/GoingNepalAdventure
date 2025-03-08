"use client"
import { getAllActivitys } from '@/services/activities';
import Loader from '@/shared/Loader';
import SharedTitle from '@/shared/SharedTitle';
import { Button } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
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
        title:string,
        slug:string
        thumbnail:string
    };
}

const ActivityCard: React.FC<ActivityProps> = ({ activity }) => {
    return (
        <Link href={`/activities/${activity.slug}`}>
            <div className="relative h-[300px] mx-auto max-w-[280px] rounded-lg shadow-md group cursor-pointer">
                <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                        src={activity.thumbnail}
                        alt={activity.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
                <div className="absolute bottom-0 left-0 w-3/4 bg-white text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 rounded-sm py-2 px-4 -translate-y-1/2 shadow-2xl">
                    <h3 className="text-lg font-semibold truncate">{activity.title}</h3>
                </div>
            </div>
        </Link>
    );
};

const Activities = () => {

    const {data:activityData,isLoading}=useQuery({
        queryKey: ['all-activities-home-slider'],
        queryFn:()=>getAllActivitys(),
    })


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplay: true,
        pauseOnHover: true,
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
        <main className="lg:px-16 px-4 my-16 lg:mt-24 mt-12">
            <SharedTitle title="Activities" subTitle="Explore thrilling activities" />
            {isLoading && <Loader/>}
            <Slider {...settings} className='mt-20'>
                {activityData?.data?.map((activity:any) => ( //eslint-disable-line @typescript-eslint/no-explicit-any
                    <div key={activity._id} className="px-2">
                            <ActivityCard activity={activity} />
                        </div>
                ))}
            </Slider>
            <div className='flex items-center justify-center'>
                <Link href={"/activities"}>
                    <Button className=' w-fit bg-primary rounded-md -mt-4 mb-4 text-white px-8 my-12'>Explore Activities</Button>
                </Link>
            </div>
        </main>
    );
};

export default Activities;
