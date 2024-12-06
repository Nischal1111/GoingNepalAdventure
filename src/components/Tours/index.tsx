"use client"
import { getAllTours } from '@/services/tour'
import Loader from '@/shared/Loader'
import SharedSection from '@/shared/SharedSection'
import { rowdies } from '@/utility/font'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Pagination } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import type { Selection } from "@nextui-org/react";
import { TourDetails } from '../SingleTrek/types'
import PackageCard from './TourCard'
import NoData from '@/shared/NoData/NoData'

const DURATION_RANGES = [
    'All Durations',
    'Less than 5 days',
    '5-10 days',
    '10-15 days',
    '15+ days'
];

const Tours = () => {
    const [page, setPage] = useState(1)
    const ITEMS_PER_PAGE = 8

    const [selectedCountry, setSelectedCountry] = useState<string>('All Tours')
    const [selectedTripType, setSelectedTripType] = useState<string>('All Types')
    const [selectedDuration, setSelectedDuration] = useState<string>('All Durations')
    const [countries, setCountries] = useState<string[]>([])
    const [tripTypes, setTripTypes] = useState<(string|undefined)[]>([])
    const [filteredPackages, setFilteredPackages] = useState<TourDetails[]>([])

    const first = useRef<HTMLDivElement>(null)

    const {data:tourData, isLoading} = useQuery({
        queryKey: ['tourData'],
        queryFn: () => getAllTours()
    })

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        first?.current?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
    };

    useEffect(() => {
        if (tourData?.data?.data) {
            const uniqueCountries = Array.from(
                new Set(
                    (tourData?.data?.data as TourDetails[])
                        .map((pkg) => pkg.country)
                )
            );
            
            const uniqueTripTypes = Array.from(
                new Set(
                    (tourData?.data?.data as TourDetails[])
                        .map((pkg) => pkg?.tripType)
                )
            );
            
            const countriesWithAll = ['All Tours', ...uniqueCountries];
            const tripTypesWithAll = ['All Types', ...uniqueTripTypes];
            
            setCountries(countriesWithAll);
            setTripTypes(tripTypesWithAll);
            
            applyFilters(tourData?.data?.data as TourDetails[]);
        }
    }, [tourData]);

    const applyFilters = (data: TourDetails[]) => {
        let filtered = data;

        // Filter by country
        if (selectedCountry !== 'All Tours') {
            filtered = filtered.filter((pkg) => pkg.country === selectedCountry);
        }

        // Filter by trip type
        if (selectedTripType !== 'All Types') {
            filtered = filtered.filter((pkg) => pkg.tripType === selectedTripType);
        }

        // Filter by duration
        if (selectedDuration !== 'All Durations') {
            filtered = filtered.filter((pkg) => {
                const days = pkg.days ?? 0;
                switch (selectedDuration) {
                    case 'Less than 5 days':
                        return days.max < 5;
                    case '5-10 days':
                        return days.max >= 5 && days.max <= 10;
                    case '10-15 days':
                        return days.max > 10 && days.max <= 15;
                    case '15+ days':
                        return days.max > 15;
                    default:
                        return true;
                }
            });
        }

        setFilteredPackages(filtered);
        setPage(1);
    };

    useEffect(() => {
        if (tourData?.data?.data) {
            applyFilters(tourData.data.data as TourDetails[]);
        }
    }, [selectedCountry, selectedTripType, selectedDuration, tourData]);

    const handleCountryChange = (selection: Selection) => {
        if (selection instanceof Set && selection.size > 0) {
            const selectedValue = Array.from(selection)[0];
            setSelectedCountry(String(selectedValue));
        }
    };

    const handleTripTypeChange = (selection: Selection) => {
        if (selection instanceof Set && selection.size > 0) {
            const selectedValue = Array.from(selection)[0];
            setSelectedTripType(String(selectedValue));
        }
    };

    const handleDurationChange = (selection: Selection) => {
        if (selection instanceof Set && selection.size > 0) {
            const selectedValue = Array.from(selection)[0];
            setSelectedDuration(String(selectedValue));
        }
    };

    const paginatedPackages = filteredPackages.slice(
        (page - 1) * ITEMS_PER_PAGE, 
        page * ITEMS_PER_PAGE
    );

    // Calculate total pages
    const totalPages = Math.ceil(filteredPackages.length / ITEMS_PER_PAGE);

    if(isLoading) return <Loader/>

    return (
        <div>
            <SharedSection title='Trips and Tours' link='/tours' img='https://images.unsplash.com/photo-1526712318848-5f38e2740d44?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

            <section className='px-16 my-12'>
                <h1 className={`${rowdies.className} text-4xl `}>Trips and Tours in Nepal, Bhutan and Tibet</h1>
                <p className='text-gray-700 text-justify my-8'>
                    Nepal, a country steeped in ancient traditions, rugged landscapes, and awe-inspiring natural beauty, is known worldwide as a trekking and adventure haven. Nestled between the peaks of the mighty Himalayas, Nepal offers unparalleled experiences for explorers, nature lovers, and cultural enthusiasts alike. With trekking trails that range from gentle paths to challenging high-altitude circuits, the country is home to world-famous routes like the Everest Base Camp, Annapurna Circuit, and Langtang Valley. Beyond trekking, Nepal is a place of deep cultural heritage, with historic temples, vibrant festivals, and warm local hospitality. <br /><br />

                Every year, adventurers are drawn to Nepal&apos;s trails, not only to witness the breathtaking mountain vistas but to immerse in a unique blend of Hindu and Buddhist traditions. Trekkers can explore pristine national parks, walk through ancient villages, and witness unique wildlife in sanctuaries like Sagarmatha and Annapurna Conservation Area. Whether it&apos;s a spiritual journey to the birthplace of Buddha in Lumbini or a thrilling whitewater rafting experience in Nepal&apos;s rivers, this country promises a journey filled with diversity and discovery. <br /><br />


                <strong className='text-xl'>Immersive Trips and Tours in Nepal</strong> <br /> <br />
                Tours and trips in Nepal offer a wide range of experiences, from carefully curated cultural and sightseeing tours to adventurous multi-day treks through rugged mountain terrain. For travelers seeking a blend of adventure and culture, multi-destination tours are ideal, offering opportunities to experience Nepal&apos;s lively cities, lush jungles, and rural landscapes in one journey. City tours in Kathmandu and Pokhara allow travelers to explore bustling markets, historic temples, and hidden courtyards, while wildlife safaris in Chitwan provide a chance to see rare animals like rhinos and Bengal tigers. Nepal&apos;s trekking tours take you to the heart of the Himalayas, where you can engage in challenging hikes and breathtaking views of some of the world&apos;s highest peaks. Each tour offers a unique way to explore Nepal&apos;s natural beauty and cultural depth, making it an unforgettable destination for all types of travelers. <br /><br />


                <strong className='text-xl'>Bhutan: The Last Shangri-La</strong> <br /><br />
                The Kingdom of Bhutan, often called the &quot;Last Shangri-La,&quot; is a land of breathtaking landscapes, deeply held traditions, and a commitment to sustainability and happiness. Tucked away in the Eastern Himalayas, Bhutan offers a serene escape with its rolling hills, dense forests, and centuries-old monasteries perched on cliffsides. The country&apos;s Gross National Happiness philosophy, which values well-being over economic wealth, has preserved Bhutan&apos;s traditional way of life, making it a culturally rich and pristine destination. Travelers to Bhutan can expect to visit iconic sites like the Paro Taktsang (Tiger&apos;s Nest Monastery) and the Punakha Dzong, take scenic treks through peaceful valleys, and experience vibrant festivals that celebrate Bhutanese culture and spirituality. <br /><br />

                Tours in Bhutan provide a carefully curated experience where visitors can witness the country&apos;s devotion to Buddhist practices, explore local markets, and engage with Bhutanese people in traditional villages. The country&apos;s unique combination of spiritual and natural wonders, from the lofty peaks of the Himalayas to serene rivers and sacred shrines, makes it a peaceful yet thrilling destination. <br /><br />

                <strong className='text-xl'>Tibet: The Roof of the World</strong><br /><br />
                Known as the &quot;Roof of the World,&quot; Tibet sits atop the Tibetan Plateau, offering breathtaking high-altitude landscapes, spiritual sanctuaries, and a deeply resilient culture shaped by centuries of Buddhist tradition. The mystical land of Tibet, with its ancient monasteries, vast plains, and stunning mountain ranges, has long attracted pilgrims and adventurers. Visitors can explore spiritual hubs such as Lhasa&apos;s Potala Palace and Jokhang Temple, journey through the sacred Mount Kailash, and witness the vast expanse of turquoise lakes surrounded by snow-capped peaks. <br /><br />

                Tours in Tibet provide an opportunity to experience its rich monastic culture, meet warm and welcoming Tibetans, and appreciate the region&apos;s unspoiled natural beauty. The landscape, rich in unique flora and fauna, creates an unforgettable backdrop for trekking, sightseeing, and cultural exploration. A journey through Tibet is both a challenging and spiritually enriching experience, ideal for those seeking a deeper connection to Himalayan culture and spirituality. <br /><br />

                </p>
                <h1 ref={first} className={`${rowdies.className} text-4xl mt-8`}>Trips and Tours packages</h1>

                <div className='my-8 pl-8 flex items-center gap-8'>
                    <Dropdown>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-bold text-sm text-primary'>Select by Country</h1>
                            <DropdownTrigger>
                                <Button 
                                    variant="bordered" 
                                    className='rounded-sm w-[200px] flex justify-between'
                                    endContent={<IoIosArrowDown/>}
                                >
                                    {selectedCountry || 'Select Country'}
                                </Button>
                            </DropdownTrigger>
                        </div>
                        <DropdownMenu 
                            aria-label="Country Selection" 
                            selectionMode="single" 
                            selectedKeys={new Set([selectedCountry])}
                            onSelectionChange={handleCountryChange}
                        >
                            {countries.map((country) => (
                                <DropdownItem key={country}>
                                    {country}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-bold text-sm text-primary'>Select by Trip Type</h1>
                            <DropdownTrigger>
                                <Button 
                                    variant="bordered" 
                                    className='rounded-sm w-[200px] flex justify-between'
                                    endContent={<IoIosArrowDown/>}
                                >
                                    {selectedTripType || 'Select Trip Type'}
                                </Button>
                            </DropdownTrigger>
                        </div>
                        <DropdownMenu 
                            aria-label="Trip Type Selection" 
                            selectionMode="single" 
                            selectedKeys={new Set([selectedTripType])}
                            onSelectionChange={handleTripTypeChange}
                        >
                            {tripTypes.map((type) => (
                                <DropdownItem key={type}>
                                    {type}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-bold text-sm text-primary'>Filter by Duration</h1>
                            <DropdownTrigger>
                                <Button 
                                    variant="bordered" 
                                    className='rounded-sm w-[200px] flex justify-between'
                                    endContent={<IoIosArrowDown/>}
                                >
                                    {selectedDuration || 'Select Duration'}
                                </Button>
                            </DropdownTrigger>
                        </div>
                        <DropdownMenu 
                            aria-label="Duration Selection" 
                            selectionMode="single" 
                            selectedKeys={new Set([selectedDuration])}
                            onSelectionChange={handleDurationChange}
                        >
                            {DURATION_RANGES.map((duration) => (
                                <DropdownItem key={duration}>
                                    {duration}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </div>
                {paginatedPackages?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-4">
                        {paginatedPackages.map((trek, index) => (
                        <div key={index}>
                            <PackageCard {...trek} />
                        </div>
                        ))}
                    </div>
                    ) : (
                    <NoData title="packages" />
                    )}

                {totalPages > 1 && (
                    <div className="flex justify-center my-12">
                        <Pagination
                            isCompact
                            showControls
                            initialPage={1}
                            className='text-primary'
                            total={totalPages}
                            page={page}
                            onChange={handlePageChange}
                        />
                    </div>
                )}
            </section>
        </div>
    )
}

export default Tours