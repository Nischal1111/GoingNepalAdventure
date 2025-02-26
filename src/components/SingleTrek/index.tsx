"use client"
import React, { useRef } from 'react'
import { FaMapMarkerAlt, FaRegClock, FaMountain, FaUserFriends, FaUtensils, FaBed, FaChevronCircleLeft, FaHiking, FaFirstAid } from 'react-icons/fa';
import { GiPathDistance } from 'react-icons/gi';
import { MdDateRange } from 'react-icons/md';
import TrekOverView from './TrekOverView';
import TrekHighLights from './TrekHighLights';
import Itinerary from './Itinerary';
import TripQuote from './TripQuote';
import Services from './Services';
import PackingList from './PackingList';
import Gallery from './Gallery';
import TrekFAQs from './TrekFAQs';
import RightSide from './RightSide/RightSide';
import { Button } from '@nextui-org/react';
import { Rowdies } from "next/font/google";
import { IoShirtSharp } from 'react-icons/io5';
import { BsGearFill } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { useQuery } from '@tanstack/react-query';
import { getSingleTrek } from '@/services/treks';
import Loader from '@/shared/Loader';
import { ItineraryItem, trekHighLightsProps } from './types';

export const rowdies=Rowdies({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

interface paramsProps{
    id: string
}
const SingleTrek:React.FC<paramsProps> = ({id}) => {
    const pdfContentRef = useRef<HTMLDivElement>(null); 

    const {data:SingleTrekData,isLoading}=useQuery({
        queryKey: ['singleTrekData',id],
        queryFn:()=>getSingleTrek(id),
        enabled:!!id
    })


    const trek={
        title:SingleTrekData?.data?.data?.name,
        price:JSON.stringify(SingleTrekData?.data?.data?.price),
        img:"/assets/contactBG.jpg",
        desc:SingleTrekData?.data?.data?.overview,
        discount:SingleTrekData?.data?.data?.discount
    }

    const minitrekDetails = [
    {
        title: "Location",
        value: SingleTrekData?.data?.data?.location,
        icon: <FaMapMarkerAlt className='text-primary' size={28}/>
    },
    {
        title: "Duration",
        value: `${SingleTrekData?.data?.data?.days?.min} - ${SingleTrekData?.data?.data?.days?.max} days`,
        icon: <FaRegClock className='text-primary' size={28}/>
    },
    {
        title: "Difficulty",
        value:SingleTrekData?.data?.data?.difficulty,
        icon: <FaMountain className='text-primary' size={28}/>
    },
    {
        title: "Group Size",
        value: `${SingleTrekData?.data?.data?.groupSize?.min} - ${SingleTrekData?.data?.data?.groupSize?.max} people`,
        icon: <FaUserFriends className='text-primary' size={28}/>
    },
    {
        title: "Starting/Ending Point",
        value: `${SingleTrekData?.data?.data?.startingPoint} / ${SingleTrekData?.data?.data?.endingPoint}`,
        icon: <GiPathDistance className='text-primary' size={28}/>
    },
    {
        title: "Meals",
        value: SingleTrekData?.data?.data?.meal,
        icon: <FaUtensils className='text-primary' size={24}/>
    },
    {
        title: "Best Season",
        value: SingleTrekData?.data?.data?.bestSeason?.join(", "),
        icon: <MdDateRange className='text-primary' size={28}/>
    },
    {
        title: "Accommodations",
        value: SingleTrekData?.data?.data?.accommodation?.join(", "),
        icon: <FaBed className='text-primary' size={28}/>
    }
    ];

    const trekHighLights=SingleTrekData?.data?.data?.trekHighlights

    const itineraryList = SingleTrekData?.data?.data?.itinerary

    const servicesIncluded= SingleTrekData?.data?.data?.servicesCostIncludes

    const servicesNotIncluded=SingleTrekData?.data?.data?.servicesCostExcludes

    const trekkingEquipment: { category: string; items: string[]; icon: IconType }[] = [
    {
        category: "General Equipment",
        icon: FaHiking,
        items: [...(SingleTrekData?.data?.data?.packingList?.general || [])]
    },
    {
        category: "Clothes",
        icon: IoShirtSharp,
        items: [...(SingleTrekData?.data?.data?.packingList?.clothes || [])]
    },
    {
        category: "First Aid Kit",
        icon: FaFirstAid,
        items: [...(SingleTrekData?.data?.data?.packingList?.firstAid || [])]
    },
    {
        category: "Other Essentials",
        icon: BsGearFill,
        items: [...(SingleTrekData?.data?.data?.packingList?.otherEssentials || [])]
    }
];

    const gallery=SingleTrekData?.data?.data?.images

    const FAQs=SingleTrekData?.data?.data?.faq

    const downloadPDF = () => {
    const pdfElement = pdfContentRef.current;

    if (pdfElement) {
        // Log content for debugging

        // Temporarily make the element visible
        pdfElement.style.display = 'block'; // Ensure the content is visible

        // Ensure proper layout and reflow of the content before generating PDF
        pdfElement.offsetHeight; //eslint-disable-line @typescript-eslint/no-unused-expressions

        // Add a small delay before generating the PDF (100ms to allow reflow)
        setTimeout(() => {
            import('html2pdf.js').then((html2pdf) => {
                const options = {
                    margin: [10, 15, 10, 15], // Adjust margins
                    filename: `${trek.title}.pdf`,
                    html2canvas: {
                        scale: 3, 
                        useCORS: true,
                    },
                    jsPDF: {
                        unit: 'mm',
                        format: 'a4',
                        orientation: 'portrait',
                    },
                };

                // Generate the PDF from the visible content
                html2pdf.default().from(pdfElement).set(options).save().then(() => {
                    // After the PDF is generated, hide the content again
                    pdfElement.style.display = 'none'; // Hide it again after PDF is saved
                });
            });
        }, 100); // A slight delay to ensure the content has been rendered
    }
};






    if(isLoading){
        return <Loader/>
    }

    return (
        <main className='relative lg:px-16 px-4 lg:pt-0 pt-12'>
            <Button
                className='absolute lg:flex hidden lg:top-0 top-32 left-4 z-50 rounded-full bg-primary p-0 text-white'
                isIconOnly
                onClick={() => window.history.back()}
            >
                <FaChevronCircleLeft />
            </Button>
            <section className='relative lg:h-[75vh] h-[40vh] lg:mt-4 mt-12 w-full rounded-md' style={{background:`url(${SingleTrekData?.data?.data?.thumbnail})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}>
                <div className='absolute inset-0 bg-black/20 w-full'></div>
                <div className='w-full relative flex items-center justify-start top-[70%] left-[5%] '>
                    <div className='flex flex-col items-start'>
                        <p className={`${rowdies.className} lg:text-7xl text-2xl absolute antialiased text-white`}>{trek.title}</p>
                    </div>
                </div>
            </section>
            <section  className='flex lg:flex-row flex-col lg:gap-12 gap-4 w-full lg:my-12 my-4 justify-between'>
                <div className='lg:w-[65%] w-full'>
                    <section className='grid lg:grid-cols-3 grid-cols-2 gap-4 bg-[#5D83C4]/20 rounded-md px-8 py-6 shadow-md'>
                        {
                            minitrekDetails.map((item,index)=>(
                                <div className='w-full flex items-center justify-start gap-2' key={index}>
                                    <div className='w-[20%] flex items-center justify-center'>
                                        {item.icon}
                                    </div>
                                    <div className='w-[80%]'>
                                        <p className='text-sm text-[#838383]'>{item.title}</p>
                                        <p className='text-base'>{item.value}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                    <TrekOverView title={trek?.title} desc={trek.desc}/>
                    <TrekHighLights title={trek?.title} trekHighlights={trekHighLights}/>
                    <Services servicesIncluded={servicesIncluded} servicesNotIncluded={servicesNotIncluded}/>
                    <Itinerary itinerary={itineraryList}/>
                    <TripQuote title={trek?.title} desc={trek.desc} slug={SingleTrekData?.data?.data?.slug}/>
                    <PackingList trekkingEquipment={trekkingEquipment}/>
                    <TrekFAQs FAQs={FAQs}/>
                    <Gallery title={trek?.title} gallery={gallery}/>
                </div>
                <div className='lg:w-[35%] w-full flex justify-start flex-col items-center'>
                    <RightSide slug={SingleTrekData?.data?.data?.slug} price={trek?.price} discount={trek?.discount} title={trek?.title} trekPdf={SingleTrekData?.data?.data?.trekPdf} _id={SingleTrekData?.data?.data?._id} downloadPDF={downloadPDF}/>
                </div>
            </section>
            <div
                ref={pdfContentRef}
                className="hidden-pdf bg-white text-gray-800 p-6 rounded-md shadow-md"
            >
                <img src="/assets/logo.png" alt={trek.title} className="w-[300px] mb-6 h-[200px]" />
                <h1 className="text-3xl font-bold mb-4">{trek.title} Trek Details</h1>
                <p className="text-base mb-6">{trek.desc}</p>

                <h2 className="text-2xl font-semibold mb-2">Highlights</h2>
                <ul className="list-disc list-inside mb-6">
                    {trekHighLights?.map((highlight: trekHighLightsProps, index: number) => (
                        <li key={index} className="text-base font-bold">{highlight?.content}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold mb-2">Services Included</h2>
                <ul className="list-disc list-inside mb-6">
                    {servicesIncluded?.map((service: string[], index: number) => (
                        <li key={index} className="text-sm">{service}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold mb-2">Services Not Included</h2>
                <ul className="list-disc list-inside mb-6">
                    {servicesNotIncluded?.map((service: string[], index: number) => (
                        <li key={index} className="text-sm">{service}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold mb-2">Itinerary</h2>
                <ul className="list-decimal list-inside mb-6">
                    {itineraryList?.map((item: ItineraryItem, index: number) => (
                        <div key={index}>
                            <h1 className="text-base font-bold">Day {item.day}: {item.title}</h1>
                            <p className='ml-4'>{item.details}</p>
                        </div>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold mb-2">FAQs</h2>
                <ul className="list-disc list-inside">
                    {FAQs?.map((faq: { question: string, answer: string }, index: number) => (
                        <li key={index} className="text-sm">
                            <strong>{faq.question}</strong> - {faq.answer}
                        </li>
                    ))}
                </ul>
            </div>

        </main>
    )
}

export default SingleTrek

