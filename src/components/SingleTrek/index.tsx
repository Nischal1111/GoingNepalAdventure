import React from 'react'
import { rowdies } from '@/utility/font'
import { FaMapMarkerAlt, FaRegClock, FaMountain, FaUserFriends, FaUtensils, FaBed } from 'react-icons/fa';
import { GiPathDistance } from 'react-icons/gi';
import { MdDateRange } from 'react-icons/md';
import TrekOverView from './TrekOverView';
import TrekHighLights from './TrekHighLights';
import Itinerary from './Itinerary';
import { trekProps } from './types';
import TripQuote from './TripQuote';

const SingleTrek = () => {
    const trek={
        title:"Everest Base Camp",
        img:"/assets/contactBG.jpg",
        desc:"Everest Base Camp (EBC) is one of the most popular trekking destinations in the world, located in Nepal at an altitude of about 5,364 meters (17,598 feet). The trek offers breathtaking views of the Himalayas, including Mount Everest, the highest peak in the world. Trekkers pass through Sherpa villages, ancient monasteries, and stunning landscapes as they follow trails through Sagarmatha National Park, a UNESCO World Heritage site. The journey typically takes 12-14 days, starting from Lukla, and challenges adventurers with high altitudes and rugged terrain, offering a once-in-a-lifetime experience."
    }

    const minitrekDetails = [
    {
        title: "Location",
        value: "Sagarmatha region",
        icon: <FaMapMarkerAlt className='text-primary' size={28}/>
    },
    {
        title: "Duration",
        value: "12-14 days",
        icon: <FaRegClock className='text-primary' size={28}/>
    },
    {
        title: "Difficulty",
        value: "Moderate to Difficult",
        icon: <FaMountain className='text-primary' size={28}/>
    },
    {
        title: "Group Size",
        value: "2-15 people",
        icon: <FaUserFriends className='text-primary' size={28}/>
    },
    {
        title: "Starting/Ending Point",
        value: "Kathmandu/Lukla",
        icon: <GiPathDistance className='text-primary' size={28}/>
    },
    {
        title: "Meals",
        value: "All inclusive",
        icon: <FaUtensils className='text-primary' size={24}/>
    },
    {
        title: "Best Season",
        value: "All Year",
        icon: <MdDateRange className='text-primary' size={28}/>
    },
    {
        title: "Accommodations",
        value: "Tea Houses, Lodges",
        icon: <FaBed className='text-primary' size={28}/>
    }
    ];

    const ebcTrekHighlights: string[] = [
        "Embark on a journey to the base of mighty Mt. Everest – Everest Base Camp.",
        "Captivating aerial views of the Himalayas en route to Lukla.",
        "Experience the wilderness of Sagarmatha National Park.",
        "Discover Namche Bazaar, the gateway and cultural heart of the Everest region.",
        "Immerse in the lively culture and tradition of the Sherpa community.",
        "Great perspectives of the mountain range from the highest-placed hotel – Hotel Everest View.",
        "Visit the oldest monastery in the Everest region, Tengboche Monastery.",
        "Get a glimpse of the Khumbu glacier and Khumbu icefall.",
        "Picturesque trek to Kala Patthar (5,555 m) and Nangkartshang Peak (5,083 m).",
        "Spectacular views of Mt. Everest, Ama Dablam, Lhotse, Nuptse, Thamserku, Cho Oyu, and many more."
        ];

    const itineraryList: trekProps['itinerary'] = [
    {
        day: 1,
        title: "Day 1: Arrival in Lukla - The Adventure Begins",
        description: "After an early morning flight to Lukla, take in the stunning views of the Himalayas. Upon landing, meet your trekking crew and set off on your first trek to Phakding. The trail winds through lush forests and picturesque villages, providing a glimpse into the local culture.",
        meals: "Lunch, Dinner",
        accommodation: "Local Tea House"
    },
    {
        day: 2,
        title: "Day 2: Trekking from Phakding to Namche Bazaar - Gateway to Everest",
        description: "Today's trek takes you along the banks of the Dudh Kosi River, gradually ascending towards Namche Bazaar. As you approach the village, catch your first stunning views of Everest. Namche Bazaar, known for its vibrant market and stunning mountain scenery, is a perfect place for acclimatization.",
        meals: "All meals included",
        accommodation: "Lodge"
    },
    {
        day: 3,
        title: "Day 3: Acclimatization Day in Namche - Explore the Cultural Heart",
        description: "Spend a day in Namche to acclimatize to the altitude. You can hike to the Everest View Hotel for panoramic views of the surrounding peaks or visit the Sherpa museum to learn about the rich culture of the Sherpa people. Enjoy local delicacies and relax in this bustling town.",
        meals: "All meals included",
        accommodation: "Lodge"
    },
    {
        day: 4,
        title: "Day 4: Trekking from Namche to Tengboche - Home of the Monastery",
        description: "Leaving Namche, trek towards Tengboche, where you will visit the famous Tengboche Monastery. This spiritual site offers breathtaking views of Everest, Ama Dablam, and other majestic peaks. Take time to participate in a Buddhist ceremony or simply soak in the peaceful atmosphere.",
        meals: "All meals included",
        accommodation: "Local Tea House"
    },
    {
        day: 5,
        title: "Day 5: Journey from Tengboche to Dingboche - A Scenic Trek",
        description: "Today's trek to Dingboche offers stunning views of the surrounding mountains. The trail winds through beautiful rhododendron forests and past ancient mani stones. Upon reaching Dingboche, enjoy the unique landscape and the warm hospitality of the local tea houses.",
        meals: "All meals included",
        accommodation: "Local Tea House"
    },
    {
        day: 6,
        title: "Day 6: Acclimatization Day in Dingboche - Prepare for Higher Altitudes",
        description: "Take this day to acclimatize to the altitude by exploring the area around Dingboche. You can hike to Chukhung Valley for spectacular views of Lhotse and the surrounding peaks. This day is essential for your body to adjust before heading to higher elevations.",
        meals: "All meals included",
        accommodation: "Local Tea House"
    },
    {
        day: 7,
        title: "Day 7: Trekking from Dingboche to Lobuche - Towards the Glacial Wonderland",
        description: "Trek from Dingboche to Lobuche, navigating rocky terrain with stunning views of the Khumbu Glacier. This part of the trek is filled with breathtaking vistas and a sense of isolation in the magnificent Himalayan landscape. Lobuche serves as a base for the next leg of your journey.",
        meals: "All meals included",
        accommodation: "Local Tea House"
    },
    {
        day: 8,
        title: "Day 8: Journey to Everest Base Camp - Touch the Roof of the World",
        description: "Today is the highlight of your trek as you reach Everest Base Camp! The trail takes you through glacial moraine and past the Khumbu Icefall. Standing at the base of the world's highest peak is a moment you will cherish forever. Celebrate your achievement and soak in the majestic views.",
        meals: "All meals included",
        accommodation: "Tent Camp"
    },
    {
        day: 9,
        title: "Day 9: Sunrise at Kala Patthar - The Ultimate Viewpoint",
        description: "Wake up early for a trek to Kala Patthar, renowned for its stunning sunrise views of Everest. After enjoying the breathtaking panorama, trek back down to Pheriche. Reflect on your experiences and the beauty of the Himalayas as you descend.",
        meals: "All meals included",
        accommodation: "Local Tea House"
    },
    {
        day: 10,
        title: "Day 10: Trekking from Pheriche to Namche Bazaar - Retracing Your Steps",
        description: "Make your way back to Namche Bazaar, following familiar trails. The descent offers new perspectives of the majestic peaks. Upon reaching Namche, take the time to enjoy the local shops and culture before settling into your lodge.",
        meals: "All meals included",
        accommodation: "Lodge"
    },
    {
        day: 11,
        title: "Day 11: Final Trek from Namche to Lukla - Completing the Journey",
        description: "On your last trekking day, retrace your steps back to Lukla. Enjoy the beautiful landscapes and reflect on your incredible journey. Arriving in Lukla marks the end of your trek, where you can celebrate with your team and prepare for your flight back to Kathmandu.",
        meals: "All meals included",
        accommodation: "Local Tea House"
    },
    {
        day: 12,
        title: "Day 12: Departure from Kathmandu - Farewell to the Himalayas",
        description: "Fly back to Kathmandu from Lukla. Upon arrival, you will have free time for shopping or exploring the vibrant city. Depart for your onward journey, carrying memories of your incredible adventure to Everest Base Camp.",
        meals: "Breakfast",
        accommodation: "N/A"
    }
    ];

    

    return (
        <main className='relative w-full px-16'>
            <section className='relative h-[75vh] mt-4 w-full rounded-md' style={{background:`url(${trek.img})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}>
                <div className='absolute inset-0 bg-black/20 w-full'></div>
                <div className='w-full relative flex items-center justify-start top-[70%] left-[5%] '>
                    <div className='flex flex-col items-start'>
                        <h1 className={`${rowdies.className} text-7xl text-[#DFDCDC]/70`}>{trek.title}</h1>
                        <p className={`${rowdies.className} text-5xl absolute top-10 antialiased text-white`}>{trek.title}</p>
                    </div>
                </div>
            </section>
            <section className='flex gap-12 w-full my-12'>
                <div className='w-[65%]'>
                    <section className='grid grid-cols-3 gap-4 bg-[#5D83C4]/20 rounded-md px-8 py-6 shadow-md'>
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
                    <TrekOverView title={trek.title} desc={trek.desc}/>
                    <TrekHighLights title={trek.title} trekHighlights={ebcTrekHighlights}/>
                    <Itinerary itinerary={itineraryList}/>
                    <TripQuote title={trek.title} desc={trek.desc}/>
                </div>
                <div className='w-[35%]'>

                </div>
            </section>
            
        </main>
    )
}

export default SingleTrek
