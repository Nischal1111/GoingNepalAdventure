"use client"
import SharedSection from '@/shared/SharedSection'
import { rowdies } from '@/utility/font'
import React, { useEffect, useState } from 'react'
import PackageCard from './PackageCard'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { IoIosArrowDown } from 'react-icons/io'
import type { Selection } from "@nextui-org/react";

type Package = {
    name: string;
    days: number;
    difficulty: string;
    description: string;
    region: string;
    image: string;
    price: number;
};
const Trekking = () => {
    const packages = [
    {
        "name": "Everest Base Camp Trek",
        "days": 14,
        "difficulty": "Difficult",
        "description": "Trek to the base camp of the world's tallest mountain, Mount Everest, and experience breathtaking views and Sherpa culture.",
        "region": "Everest",
        "image": "/assets/hero.jpg",
        "price": 1500
    },
    {
        "name": "Annapurna Circuit Trek",
        "days": 18,
        "difficulty": "Moderate",
        "description": "Explore the diverse landscapes and cultures of the Annapurna region, from lush forests to high mountain passes.",
        "region": "Annapurna",
        "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99",
        "price": 1300
    },
    {
        "name": "Annapurna Pass Valley Trek",
        "days": 11,
        "difficulty": "Moderate",
        "description": "Explore the diverse landscapes and cultures of the Annapurna region, from lush forests to high mountain passes.",
        "region": "Annapurna",
        "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99",
        "price": 1300
    },
    {
        "name": "Langtang Valley Trek",
        "days": 10,
        "difficulty": "Moderate",
        "description": "A scenic trek through the Langtang National Park, offering beautiful landscapes, glaciers, and rich Tamang culture.",
        "region": "Langtang",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        "price": 900
    },
    {
        "name": "Manaslu Circuit Trek",
        "days": 15,
        "difficulty": "Difficult",
        "description": "A remote and challenging trek around the stunning Manaslu mountain, with cultural immersion and breathtaking views.",
        "region": "Manaslu",
        "image": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
        "price": 1400
    },
    {
        "name": "Ghorepani Poon Hill Trek",
        "days": 5,
        "difficulty": "Easy",
        "description": "A short and easy trek offering panoramic sunrise views of the Annapurna and Dhaulagiri mountain ranges.",
        "region": "Short Hikings",
        "image": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606",
        "price": 450
    },
    {
        "name": "Dhaulagiri Circuit Trek",
        "days": 21,
        "difficulty": "Very Difficult",
        "description": "A strenuous trek around Dhaulagiri, the world's seventh highest mountain, through challenging terrain and remote wilderness.",
        "region": "Dhaulagiri",
        "image": "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8",
        "price": 1800
    },
    {
        "name": "Everest View Trek",
        "days": 7,
        "difficulty": "Moderate",
        "description": "A shorter alternative to the Everest Base Camp trek, offering stunning views of Everest and surrounding peaks.",
        "region": "Everest",
        "image": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        "price": 800
    },
    {
        "name": "Upper Mustang Trek",
        "days": 12,
        "difficulty": "Moderate",
        "description": "A unique trek through the arid landscapes and ancient Buddhist culture of the Mustang region, often referred to as the 'Forbidden Kingdom'.",
        "region": "Off the Beaten Trails",
        "image": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        "price": 1600
    },
    {
        "name": "Muktinath Pilgrimage Trek",
        "days": 7,
        "difficulty": "Easy",
        "description": "A spiritual trek to the sacred Muktinath Temple, combining natural beauty with cultural and religious significance.",
        "region": "Muktinath",
        "image": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
        "price": 700
    },
    {
        "name": "Tamang Heritage Trek",
        "days": 8,
        "difficulty": "Easy",
        "description": "Explore the rich cultural heritage of the Tamang people while trekking through the scenic Langtang region.",
        "region": "Langtang",
        "image": "https://images.unsplash.com/photo-1464278533981-50106e6176b1",
        "price": 600
    },
    {
        "name": "Annapurna Base Camp Trek",
        "days": 12,
        "difficulty": "Moderate",
        "description": "Trek to the base camp of Annapurna, one of the world's most beautiful and iconic mountain peaks, through lush forests and alpine meadows.",
        "region": "Annapurna",
        "image": "https://images.unsplash.com/photo-1455156218388-5e61b526818b",
        "price": 1200
    },
    {
        "name": "Rara Lake Trek",
        "days": 9,
        "difficulty": "Moderate",
        "description": "Visit Nepal's largest lake, Rara, located in a remote area surrounded by pristine nature and beautiful landscapes.",
        "region": "Off the Beaten Trails",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
        "price": 1000
    },
    {
        "name": "Pikey Peak Trek",
        "days": 6,
        "difficulty": "Easy",
        "description": "A short and off-the-beaten-path trek offering stunning sunrise views of Mount Everest and the Himalayas.",
        "region": "Everest",
        "image": "https://images.unsplash.com/photo-1477346611705-65d1883cee1e",
        "price": 500
    },
    {
        "name": "Helambu Trek",
        "days": 6,
        "difficulty": "Easy",
        "description": "An easy trek near Kathmandu through the scenic Helambu region, known for its rich Buddhist culture and stunning landscapes.",
        "region": "Langtang",
        "image": "https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5",
        "price": 450
    },
    {
        "name": "Mardi Himal Trek",
        "days": 7,
        "difficulty": "Moderate",
        "description": "A hidden gem in the Annapurna region, this trek offers off-the-beaten-path exploration with stunning views of Mardi Himal and Machapuchare.",
        "region": "Annapurna",
        "image": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
        "price": 600
    },
    {
        "name": "Makalu Base Camp Trek",
        "days": 20,
        "difficulty": "Difficult",
        "description": "Trek to the base camp of Mount Makalu, the world's fifth highest peak, through remote and rugged terrain.",
        "region": "Off the Beaten Trails",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        "price": 2000
    },
    {
        "name": "Jomsom Muktinath Trek",
        "days": 8,
        "difficulty": "Moderate",
        "description": "A scenic trek through the Kali Gandaki Valley to the holy site of Muktinath, with views of Dhaulagiri and Nilgiri.",
        "region": "Muktinath",
        "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99",
        "price": 850
    },
    {
        "name": "Tsum Valley Trek",
        "days": 17,
        "difficulty": "Moderate",
        "description": "A sacred and culturally rich trek through the remote Tsum Valley, located in the Manaslu region.",
        "region": "Manaslu",
        "image": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        "price": 1500
    },
    {
        "name": "Khopra Ridge Trek",
        "days": 8,
        "difficulty": "Moderate",
        "description": "A lesser-known trek in the Annapurna region, offering stunning views of Dhaulagiri, Annapurna, and Nilgiri.",
        "region": "Annapurna",
        "image": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606",
        "price": 700
    },
    {
        "name": "Dolpo Trek",
        "days": 22,
        "difficulty": "Very Difficult",
        "description": "A challenging trek through the remote and mystical Dolpo region, known for its high passes, Tibetan culture, and rugged beauty.",
        "region": "Off the Beaten Trails",
        "image": "https://images.unsplash.com/photo-1464278533981-50106e6176b1",
        "price": 2500
    }
];

    const [regions, setRegions] = useState<string[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string>('');
    const [filteredPackages, setFilteredPackages] = useState<Package[]>([]);

    useEffect(() => {
        const uniqueRegions = Array.from(new Set(packages.map(pkg => pkg.region)));
        setRegions(uniqueRegions);
        
        if (uniqueRegions.length > 0) {
            setSelectedRegion(uniqueRegions[0]);
            setFilteredPackages(packages.filter(pkg => pkg.region === uniqueRegions[0]));
        }
    }, []); 

    useEffect(() => {
        if (selectedRegion) {
            const newFilteredPackages = packages.filter(pkg => pkg.region === selectedRegion);
            setFilteredPackages(newFilteredPackages);
        }
    }, [selectedRegion]);

    const handleChange = (selection: Selection) => {
        if (selection instanceof Set && selection.size > 0) {
            const selectedValue = Array.from(selection)[0];
            setSelectedRegion(String(selectedValue));
        }
    };

    return (
        <main>
            <SharedSection title='Trekking' link='/trekking' img="/assets/trekBG.avif"/>
            <div className='px-16 my-12'>
                <h1 className={`${rowdies.className} text-4xl`}>Trekking in Nepal</h1>
                <p className='text-justify text-gray-700 my-8'>
                    Nepal is home to the Himalayas. The country offers some of the best and essentially unparalleled trekking experience in Nature. Drawing in adventurers from every country, a trekking activity in Nepal is not just about walking but also about an experience of diverse landscapes, rich cultural diversity, seeing unique traditions, and enjoying awe-inspiring mountain vistas. In short, Nepal is THE trekkers&apos; paradise. If summed up in one line, a trekker coming to Nepal will discover that challenging high-altitude treks go hand-in-hand with gentle walks through beautiful landscapes. <br /> <br />

Renowned all over the world as home of the Sherpa people, Everest region is famed for its stunning views of Ama Dablam, Lhotse, Nuptse, Pumori, and the crowning jewel of them all — Mount Everest. Located inside the beautiful Sagarmatha National Park, trekking in Everest is about seeing the pristine lakes of Gokyo, crossing the high-altitude passes, and eventually reaching the base camp of the planet&apos;s tallest peak. <br /> <br />

In the west is Annapurna region, with world-class trekking routes, including the famous Annapurna Circuit. From sub-tropical forests to dry deserts (yes, deserts among the mountains), this region is a combination of basking in nature and mingling with some of the friendliest communities. Equally diverse is Manaslu, a region sought for its solitude, but not for the faint of heart. Challenging mountain passes, unspoiled  ecosystems, and rugged terrain are the hallmarks of Manaslu region. <br /><br />

Close to Kathmandu, yet another region, Langtang Region, is a complete immersion in nature and biodiversity. Trekking inside Langtang National Park, visitors will come across Langtang Valley, pristine lakes in the Gosainkunda area, and Helambu Valley. And for those who want more, there are the off-the-beaten treks in regions like Dolpa, Rara, Makalu, and Kanchanjangha, each with their own distinct natural and cultural experiences. <br /><br />

Dramatic mountain vistas, diverse ecosystems, and time-worn villages await in some of the remotest regions of the world. The journeys are challenging, testing you throughout, but they are equally rewarding. Trekking in Nepal is not a mindless wandering in high-altitude; it&apos;s a promise of an unforgettable journey through some of the world&apos;s most diverse and breathtaking landscapes. It&apos;s a promise of discovery of your own self, inside and out. <br /><br />

With Trek Me Nepal, begin your Himalayan adventure today, and immerse in a challenging experience that awaits you in Nepal.
                </p>
                <h1 className={`${rowdies.className} text-4xl mt-20`}>Trekking packages</h1>
                <div className='my-8 pl-8'>
                    <Dropdown className=''>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-bold text-sm text-primary'>Select by Region</h1>
                            <DropdownTrigger>
                                    <Button 
                                        variant="bordered" 
                                        className='rounded-sm w-[200px] flex justify-between'
                                        endContent={<IoIosArrowDown/>}
                                    >
                                        {selectedRegion || 'Select Region'}
                                    </Button>
                            </DropdownTrigger>
                        </div>
                        <DropdownMenu 
                            aria-label="Dynamic Actions" 
                            selectionMode="single" 
                            selectedKeys={new Set([selectedRegion])}
                            onSelectionChange={handleChange}
                        >
                            {regions.map((region) => (
                                <DropdownItem key={region}>
                                    {region}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-4'>
                    {filteredPackages.map((trek, index) => (
                        <div key={index}>
                            <PackageCard {...trek}/>
                        </div>
                    ))}
                </div>
            </div>

        </main>
    )
}

export default Trekking
