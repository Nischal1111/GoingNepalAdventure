//eslint-disable @typescript-eslint/no-explicit-any
"use client"
import SharedSection from '@/shared/SharedSection'
import { rowdies } from '@/utility/font'
import React, { useEffect, useRef, useState } from 'react'
import PackageCard from './PackageCard'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Pagination } from '@nextui-org/react'
import { IoIosArrowDown, IoMdClose } from 'react-icons/io'
import type { Selection } from "@nextui-org/react";
import { getAllTreks } from '@/services/treks'
import { useQuery } from '@tanstack/react-query'
import { TrekDetails } from '../SingleTrek/types'
import Loader from '@/shared/Loader'
import NoData from '@/shared/NoData/NoData'
import { FiFilter } from 'react-icons/fi'

const DURATION_RANGES = [
    'All Durations',
    'Less than 5 days',
    '5-10 days',
    '10-15 days',
    '15+ days'
];

const Trekking = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [page, setPage] = useState(1)
    const ITEMS_PER_PAGE = 8

    const {data:trekData, isLoading} = useQuery({
        queryKey: ['trekData'],
        queryFn:()=>getAllTreks()
    })
    
    const first = useRef<HTMLDivElement>(null)

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        first?.current?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
    };

    const [regions, setRegions] = useState<string[]>([]);
    const [difficulties, setDifficulties] = useState<string[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string>('All Treks');
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All Difficulties');
    const [selectedDuration, setSelectedDuration] = useState<string>('All Durations');
    const [filteredPackages, setFilteredPackages] = useState<TrekDetails[]>([]);

    useEffect(() => {
        if (trekData?.data?.data) {
            // Unique Regions
            const uniqueRegions = Array.from(
                new Set(
                    (trekData.data.data as TrekDetails[])
                        .map((pkg) => pkg.location)
                )
            );
            
            // Unique Difficulties
            const uniqueDifficulties = Array.from(
                new Set(
                    (trekData.data.data as TrekDetails[])
                        .map((pkg) => pkg.difficulty)
                        .filter((diff): diff is string => diff !== undefined)
                )
            );
            
            // Add 'All' options
            const regionsWithAll = ['All Treks', ...uniqueRegions];
            const difficultiesWithAll = ['All Difficulties', ...uniqueDifficulties];

            setRegions(regionsWithAll);
            setDifficulties(difficultiesWithAll);
            
            // Initial filtering
            applyFilters(trekData.data.data as TrekDetails[]);
        }
    }, [trekData]);

    const applyFilters = (data: TrekDetails[]) => {
        let filtered = data;

        // Filter by region
        if (selectedRegion !== 'All Treks') {
            filtered = filtered.filter((pkg) => pkg.location === selectedRegion);
        }

        // Filter by difficulty
        if (selectedDifficulty !== 'All Difficulties') {
            filtered = filtered.filter((pkg) => pkg.difficulty === selectedDifficulty);
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
        if (trekData?.data?.data) {
            applyFilters(trekData.data.data as TrekDetails[]);
        }
    }, [selectedRegion, selectedDifficulty, selectedDuration, trekData]);

    const handleRegionChange = (selection: Selection) => {
        if (selection instanceof Set && selection.size > 0) {
            const selectedValue = Array.from(selection)[0];
            setSelectedRegion(String(selectedValue));
            setIsSidebarOpen(false);
        }
    };

    const handleDifficultyChange = (selection: Selection) => {
        if (selection instanceof Set && selection.size > 0) {
            const selectedValue = Array.from(selection)[0];
            setSelectedDifficulty(String(selectedValue));
            setIsSidebarOpen(false);

        }
    };

    const handleDurationChange = (selection: Selection) => {
        if (selection instanceof Set && selection.size > 0) {
            const selectedValue = Array.from(selection)[0];
            setSelectedDuration(String(selectedValue));
            setIsSidebarOpen(false);

        }
    };

    const paginatedPackages = filteredPackages.slice(
        (page - 1) * ITEMS_PER_PAGE, 
        page * ITEMS_PER_PAGE
    );

    // Calculate total pages
    const totalPages = Math.ceil(filteredPackages.length / ITEMS_PER_PAGE);

    const FilterSection = () => (
        <div className="flex flex-col gap-6">
            <Dropdown>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-sm text-primary">Filter by Region</h1>
                    <DropdownTrigger>
                        <Button 
                            variant="bordered" 
                            className="rounded-sm w-full flex justify-between"
                            endContent={<IoIosArrowDown />}
                        >
                            {selectedRegion || 'Select Region'}
                        </Button>
                    </DropdownTrigger>
                </div>
                <DropdownMenu 
                    aria-label="Region Selection" 
                    selectionMode="single" 
                    selectedKeys={new Set([selectedRegion])}
                    onSelectionChange={handleRegionChange}
                >
                    {regions.map((region) => (
                        <DropdownItem key={region}>{region}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>

            <Dropdown>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-sm text-primary">Filter by Difficulty</h1>
                    <DropdownTrigger>
                        <Button 
                            variant="bordered" 
                            className="rounded-sm w-full flex justify-between"
                            endContent={<IoIosArrowDown />}
                        >
                            {selectedDifficulty || 'Select Difficulty'}
                        </Button>
                    </DropdownTrigger>
                </div>
                <DropdownMenu 
                    aria-label="Difficulty Selection" 
                    selectionMode="single" 
                    selectedKeys={new Set([selectedDifficulty])}
                    onSelectionChange={handleDifficultyChange}
                >
                    {difficulties.map((difficulty) => (
                        <DropdownItem key={difficulty}>{difficulty}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>

            <Dropdown>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-sm text-primary">Filter by Duration</h1>
                    <DropdownTrigger>
                        <Button 
                            variant="bordered" 
                            className="rounded-sm w-full flex justify-between"
                            endContent={<IoIosArrowDown />}
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
                        <DropdownItem key={duration}>{duration}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    );

    if (isLoading) return <Loader />;

    return (
        <main>
            <SharedSection title="Trekking" link="/trekking" img="/assets/trekBG.avif" />
            <div className="lg:px-16 px-4 my-12">
                <h1 className={`${rowdies.className} lg:text-4xl text-2xl`}>Trekking in Nepal</h1>
                <p className="text-justify text-gray-700 my-8">
                    {/* ... existing description text ... */}
                </p>
                
                <div className="flex justify-between items-center mt-20">
                    <h1 ref={first} className={`${rowdies.className} lg:text-4xl text-2xl`}>
                        Trekking packages
                    </h1>
                    <Button
                        className="lg:hidden flex items-center gap-2"
                        variant="bordered"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <FiFilter />
                        Filters
                    </Button>
                </div>

                <div className="flex gap-8 relative mt-8">
                    {/* Desktop Filters */}
                    <div className="hidden lg:block w-72">
                        <FilterSection />
                    </div>

                    {/* Mobile Sidebar */}
                    <div className={`
                        lg:hidden fixed top-0 right-0 h-full w-80 bg-white z-50 
                        transform transition-transform duration-300 ease-in-out
                        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
                        shadow-xl p-6
                    `}>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold">Filters</h2>
                            <Button
                                isIconOnly
                                variant="light"
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                <IoMdClose className="text-xl" />
                            </Button>
                        </div>
                        <FilterSection />
                    </div>

                    {/* Overlay */}
                    {isSidebarOpen && (
                        <div
                            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={() => setIsSidebarOpen(false)}
                        />
                    )}

                    {/* Main Content */}
                    <div className="flex-1">
                        {paginatedPackages?.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                                {paginatedPackages.map((trek, index) => (
                                    <div key={index}>
                                        <PackageCard {...trek} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <NoData title="trekking packages" />
                        )}

                        {totalPages > 1 && (
                            <div className="flex justify-center my-12">
                                <Pagination
                                    isCompact
                                    showControls
                                    initialPage={1}
                                    className="text-primary"
                                    total={totalPages}
                                    page={page}
                                    onChange={handlePageChange}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Trekking