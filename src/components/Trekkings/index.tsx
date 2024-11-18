//eslint-disable @typescript-eslint/no-explicit-any
"use client"
import SharedSection from '@/shared/SharedSection'
import { rowdies } from '@/utility/font'
import React, { useEffect, useState } from 'react'
import PackageCard from './PackageCard'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { IoIosArrowDown } from 'react-icons/io'
import type { Selection } from "@nextui-org/react";
import { getAllTreks } from '@/services/treks'
import { useQuery } from '@tanstack/react-query'
import { TrekDetails } from '../SingleTrek/types'
import Loader from '@/shared/Loader'

const Trekking = () => {

    const {data:trekData,isLoading}=useQuery({
        queryKey: ['trekData'],
        queryFn:()=>getAllTreks()
    })

    console.log(trekData)

    const [regions, setRegions] = useState<string[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string>('');
    const [filteredPackages, setFilteredPackages] = useState<TrekDetails[]>([]);

    useEffect(() => {
    if (trekData?.data?.data) {
        const uniqueRegions = Array.from(
            new Set(
                (trekData.data.data as TrekDetails[])
                    .map((pkg) => pkg.location)
            )
        );
        
        setRegions(uniqueRegions);
        
        if (uniqueRegions.length > 0) {
            const firstRegion = uniqueRegions[0];
            setSelectedRegion(firstRegion);
            
            const filtered = (trekData.data.data as TrekDetails[])
                .filter((pkg) => pkg.location === firstRegion);
            
            setFilteredPackages(filtered);
        }
    }
}, [trekData]);

    useEffect(() => {
        if (selectedRegion) {
            const newFilteredPackages = trekData?.data?.data?.filter((pkg:TrekDetails) => pkg.location === selectedRegion);
            setFilteredPackages(newFilteredPackages);
        }
    }, [selectedRegion]);

    const handleChange = (selection: Selection) => {
        if (selection instanceof Set && selection.size > 0) {
            const selectedValue = Array.from(selection)[0];
            setSelectedRegion(String(selectedValue));
        }
    };

    if(isLoading)return <Loader/>

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
