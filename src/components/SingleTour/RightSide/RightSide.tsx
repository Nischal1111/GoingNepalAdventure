"use client"
import React, { useState } from 'react'
import { Avatar, Button, Checkbox, CheckboxGroup, DatePicker, Divider } from '@nextui-org/react'
import QuoteModal from './QuoteModal'
import Image from 'next/image'
import Link from 'next/link'
import { Rowdies } from "next/font/google";
import {today, getLocalTimeZone, CalendarDate} from "@internationalized/date";
import { FaMinus, FaPlus, FaRegEye } from 'react-icons/fa6'
import { Tour } from '@/components/SingleTrek/types'
import { useQuery } from '@tanstack/react-query'
import { getBlogsByViews } from '@/services/blogs'
import { excludeTour } from '@/services/tour'
import { GoDotFill } from 'react-icons/go'
import { getAllActivitys } from '@/services/activities'
import { useRouter } from 'next/navigation'


export const rowdies=Rowdies({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const RightSide: React.FC<Tour> = ({ price, name, _id, slug, category, discount }) => {
    const [isQuote, setIsQuote] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
    const [isCustomize, setIsCustomize] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState("");
    const [quantity, setQuantity] = useState(1)
    const [guide, setGuide] = useState(false)
    const [potter, setPotter] = useState(false)
    const [fullboard, setFullboard] = useState(false)
    const [selectedDate, setSelectedDate] = useState<CalendarDate>(today(getLocalTimeZone()))
    const GUIDE_SERVICE_PRICE = 100;
    const POTTER_SERVICE_PRICE = 150;
    const FULLBOARD_SERVICE_PRICE = 200;

    const handleQuote = () => {
        setIsQuote(true);
        setIsCustomize(false);
        setText(`I need a quotation for the trek: ${name}`);
        setIsOpen(true);
    };

    const {data:exploreBlogsData} = useQuery({
        queryKey: ['exploreBlogsData'],
        queryFn:() => getBlogsByViews(),
    })

    const {data:excludeData} = useQuery({
        queryKey: ['excludeDataTour'],
        queryFn:() => excludeTour(_id!),
        enabled: !!_id
    })
    
    const handleCustomize = () => {
        setIsQuote(false);
        setIsCustomize(true);
        setText(`I need to customize this quotation for the trek: ${name}`);
        setIsOpen(true);
    };
    
    const {data:activityData} = useQuery({
        queryKey: ['activityDatainTrek'],
        queryFn:() => getAllActivitys()
    })

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(prev => prev > 1 ? prev - 1 : 1)
    }

    // Parse the base price and calculate discounted price
    const basePrice = Number(price?.replace(/[^0-9]/g, '')) || 0;
    const discountPercent = Number(discount) || 0;
    const discountedPrice = basePrice * (1 - discountPercent / 100);
    
    // Calculate total prices based on quantity and services
    const totalBasePrice = basePrice * quantity; //eslint-disable-line @typescript-eslint/no-unused-vars
    const totalDiscountedPrice = discountedPrice * quantity;
    const finalPrice = totalDiscountedPrice + 
                    (guide ? (GUIDE_SERVICE_PRICE * quantity) : 0) + 
                    (potter ? (POTTER_SERVICE_PRICE * quantity) : 0) + 
                    (fullboard ? (FULLBOARD_SERVICE_PRICE * quantity) : 0);

    const router=useRouter()

    const handleBookNow = () => {
        const bookingDetails = {
            name,
            price: discountPercent > 0 ? discountedPrice : basePrice,
            quantity,
            bookingDate: selectedDate,
            extraServices: {
                guide,
                potter,
                fullboard
            }
        };
        
        // Using searchParams for Next.js 13+
        const searchParams = new URLSearchParams();
        searchParams.set('details', JSON.stringify(bookingDetails));
        
        router.push(`/checkout?${searchParams.toString()}`);
    };

    return (
        <>
        <div className='px-12'>
            <Button className='px-12 bg-primary rounded-sm text-white mb-4 w-full'>Download PDF</Button>
        </div>
            <div className='flex flex-col top-12'>
                <div className=' py-2 z-[2] px-8 w-[440px]'>
                    <div className='custom-right bg-white rounded-sm pt-6 pb-8 flex flex-col items-center justify-center gap-4'>
                        <h1 className={`${rowdies.className} text-2xl text-primary`}>Seek more info</h1>
                        <Button className='bg-primary text-white px-16 rounded-sm mt-4' onPress={handleQuote}>Get a trip quote</Button>
                        <Button className='bg-transparent border hover:bg-primary hover:text-white border-primary px-16 rounded-sm' onPress={handleCustomize}>Customize tour</Button>        
                    </div>
                </div>

                <div className='px-8'>
                    <div className='w-full bg-white shadow-md mt-4 rounded-sm pt-6 pb-8 flex flex-col items-center justify-center gap-4'>
                        <h1 className={`${rowdies.className} text-2xl text-primary`}>Book your tour</h1>
                        
                        {discountPercent > 0 ? (
                            <div className="flex flex-col items-center">
                                <h1 className='text-xl font-bold text-primary'>${discountedPrice.toFixed(0)} <span className='text-gray-600 text-sm font-light'>/ person</span></h1>
                                <div className="flex items-center gap-2">
                                    <span className='text-gray-600 text-sm line-through'>${basePrice}</span>
                                    <span className='text-green-600 text-sm font-medium'>Save {discountPercent}%</span>
                                </div>
                            </div>
                        ) : (
                            <h1 className='text-xl font-bold'>${price} <span className='text-gray-600 text-sm font-light'>/ person</span></h1>
                        )}
                        
                        <div className="flex w-full px-4 mt-4">
                            <DatePicker 
                                label="Select booking date:"
                                variant='flat'
                                classNames={{
                                    inputWrapper: 'w-full',
                                    input: 'w-full bg-white border border-primary',
                                }}
                                defaultValue={today(getLocalTimeZone())}
                                value={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                minValue={today(getLocalTimeZone())}
                                labelPlacement='outside'
                                radius='sm'
                                isRequired
                            />
                        </div>

                        {/* Quantity selector */}
                        <div className="flex items-center w-full justify-between px-6 mt-4">
                            <h1 className='font-bold text-lg'>Person</h1>
                            <section className='flex items-center justify-between'>
                                <Button 
                                    isIconOnly
                                    variant="bordered" 
                                    onPress={decreaseQuantity}
                                    isDisabled={quantity <= 1}
                                    size='sm'
                                    className='bg-primary text-white'
                                >
                                    <FaMinus size={12} />
                                </Button>
                                
                                <span className="text-lg font-medium min-w-[3rem] text-center">
                                    {quantity}
                                </span>
                                
                                <Button 
                                    isIconOnly
                                    variant="bordered" 
                                    onPress={increaseQuantity}
                                    size='sm'
                                    className='bg-primary text-white'
                                >
                                    <FaPlus size={12} />
                                </Button>
                            </section>
                        </div>
                        <div className='flex flex-col justify-start gap-2 w-full px-6'>
                            <CheckboxGroup label="Select extra services">
                                {/* Guide Service Checkbox */}
                                <Checkbox
                                    isSelected={guide}
                                    onChange={(e) => setGuide(e.target.checked)}
                                    value="guide-service"
                                    isDisabled={potter || fullboard || quantity > 1}
                                >
                                    Solo Private Tour (+${GUIDE_SERVICE_PRICE})
                                </Checkbox>

                                {/* Potter Service Checkbox */}
                                <Checkbox
                                    isSelected={potter}
                                    onChange={(e) => {
                                            setPotter(e.target.checked);
                                    }}
                                    value="potter-service"
                                    isDisabled={guide || fullboard} // Disable unless Guide service is selected
                                >
                                    4 Star (9 Nights) (+${POTTER_SERVICE_PRICE*quantity})
                                </Checkbox>

                                {/* Fullboard Service Checkbox */}
                                <Checkbox
                                    isSelected={fullboard}
                                    onChange={(e) => {
                                            setFullboard(e.target.checked);
                                        
                                    }}
                                    value="fullboard-service"
                                    isDisabled={guide || potter} // Disable unless Guide service is selected
                                >
                                    5 Star (9 Nights) (+${FULLBOARD_SERVICE_PRICE*quantity})
                                </Checkbox>
                            </CheckboxGroup>
                        </div>
                        <Divider className='w-full'/>
                        <div className="w-full font-bold text-lg flex items-center justify-between px-6">
                            <h1>Total:</h1> 
                            <div className='flex gap-2 items-center'>
                                {discountPercent > 0 ? (
                                    <span className='text-xs text-gray-400'>{quantity} x ${discountedPrice.toFixed(0)} = </span>
                                ) : (
                                    <span className='text-xs text-gray-400'>{quantity} x ${basePrice} = </span>
                                )}
                                <span>${finalPrice.toFixed(0)}</span>
                            </div>
                        </div>
                        <Button className='-mb-4 mt-4 bg-primary rounded-sm text-white w-[90%] flex self-center' onPress={handleBookNow}>Book Now</Button>
                    </div>
                </div>
            </div>
                
            <div className='px-8 max-w-[800px] w-[440px] my-8'>
                    <div className='bg-white mt-4 rounded-sm custom-right px-8 flex flex-col gap-4 items-center justify-center py-4'>
                        <h1 className={`${rowdies.className} text-2xl text-primary`}>Speak to expert</h1>
                        <div className="flex -gap-2 items-center my-2">
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size='lg' className='-mr-2'/>
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className='w-20 h-20 text-large z-[1]'/>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size='lg' className='-ml-2'/>
                        </div>
                        <p className='flex gap-2 items-center font-semibold text-sm'><span className='text-gray-500 text-light'>Whatsapp</span>+977 98757382933</p>
                    </div>
            </div>
            <div className='px-8 max-w-[800px] w-[440px] my-4'>
                <div className='bg-white shadow-md rounded-md'>
                    <div className='flex w-full flex-col gap-6 py-4 mt-4 rounded-md shadow-md items-center justify-center'>
                        <h1 className={`${rowdies.className} text-2xl text-primary`}>Add activities to your tour</h1>
                        <div className='flex flex-col w-full items-center justify-center gap-4 mt-4'>
                            {activityData?.data?.map((item:any)=>(//eslint-disable-line @typescript-eslint/no-explicit-any
                                <Link href={`/activities/${item?.slug}`} key={item?.id} className='w-full'>
                                    <div className='flex px-4 w-full  items-center gap-4'>
                                        <div className='w-[25%] h-[70px]'>
                                            <Image src={item?.thumbnail} alt='tour' height={1000} width={1000} className='object-cover h-full w-full rounded-md'/>
                                        </div>
                                        <div className='w-[70%]'>
                                            <h1 className='font-semibold text-lg leading-5 '>{item?.title}</h1>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link href={"/activities"}>
                            <Button className='bg-transparent hover:underline hover:underline-offset-2 -my-2 text-primary text-sm'>View all activities</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='px-8 max-w-[800px] w-[440px] my-4'>
                <div className='bg-white shadow-md rounded-md'>
                    <div className='flex w-full flex-col gap-6 py-4 mt-4 rounded-md shadow-md items-center justify-center'>
                        <h1 className={`${rowdies.className} text-2xl text-primary`}>Explore tours</h1>
                        <div className='flex flex-col w-full items-center justify-center gap-4 mt-4'>
                            {excludeData?.data?.map((item:any)=>( //eslint-disable-line @typescript-eslint/no-explicit-any
                                <Link href={`/trekking/${item?.slug}`} key={item?.id} className='w-full'>
                                    <div className='flex px-4 w-full  items-start gap-4'>
                                        <div className='w-[25%] h-[70px]'>
                                            <Image src={item?.thumbnail} alt='tour' height={1000} width={1000} className='object-cover h-full w-full rounded-md'/>
                                        </div>
                                        <div className='w-[70%] flex flex-col'>
                                            <h1 className='font-semibold text-lg leading-5 '>{item?.name}</h1>
                                            <div className='flex items-center gap-2 text-gray-600 text-xs mt-2'>
                                                <p className='text-gray-500 text-sm'>{item?.location}</p>
                                                <GoDotFill size={8}/>
                                                <p className='text-gray-500 text-sm'>{item?.tripType}</p>

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link href={"/tours"}>
                            <Button className='bg-transparent hover:underline hover:underline-offset-2 -my-2 text-primary text-sm'>View more tours</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='px-8 max-w-[800px] w-[440px] my-4'>
                <div className='bg-white shadow-md rounded-md'>
                    <div className='flex w-full flex-col gap-6 py-4 mt-4 rounded-md shadow-md items-center justify-center'>
                        <h1 className={`${rowdies.className} text-2xl text-primary`}>Our Popular blogs</h1>
                        <div className='flex flex-col w-full items-center justify-center gap-4 mt-4'>
                            {exploreBlogsData?.data?.map((item:any)=>(//eslint-disable-line @typescript-eslint/no-explicit-any
                                <Link href={`/blogs/${item?.slug}`} key={item?.id} className='w-full'>
                                    <div className='flex px-4 w-full  items-start gap-4'>
                                        <div className='w-[25%] h-[70px]'>
                                            <Image src={item?.blogImage} alt='tour' height={1000} width={1000} className='object-cover h-full w-full rounded-md'/>
                                        </div>
                                        <div className='flex flex-col w-[70%]'>
                                            <h1 className='font-semibold text-base leading-6'>{item?.title?.slice(0,50)}</h1>
                                            <p className='mt-2 flex items-center text-xs text-gray-600'><FaRegEye size={12} className='mr-2 text-primary'/>{item?.blogViews} Views</p>
                                        </div>
                                    </div>    
                                </Link>
                            ))}
                        </div>
                        <Link href={"/blogs"}>
                            <Button className='bg-transparent hover:underline hover:underline-offset-2 -my-2 text-primary text-sm'>Explore more blogs</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} text={text} trekTitle={name} slug={slug} type={category}/>
        </>
    );
};

export default RightSide;