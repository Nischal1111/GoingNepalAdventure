  "use client";
import React, { useEffect, useState } from 'react';
import TopSection from './TopSection';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Loader from '@/shared/Loader';
import { getSearchResults } from '@/services/search';
import NoData from '@/shared/NoData/NoData';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Selection } from '@nextui-org/react';
import Link from 'next/link';
import { rowdies } from '@/utility/font';
import { IoIosArrowDown } from 'react-icons/io';
import { capitalizeFirstLetter } from '../PlanTrip/Destination';

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('search')
  const [types,setTypes]=useState('All types')
  const [filtered,setFiltered]=useState([])


  useEffect(()=>{
    if(types==="All types" || !types){
      setFiltered(data?.data || [])
    }else{
      setFiltered(data?.data?.filter((item:any)=>capitalizeFirstLetter(item.category)===types)) //eslint-disable-line @typescript-eslint/no-explicit-any
    }
  })
  const handleChange=(selection:Selection)=>{
    if (selection instanceof Set && selection.size > 0) {
            const selectedValue = Array.from(selection)[0];
            setTypes(String(selectedValue));
        }
  }


  const { data, isLoading, error } = useQuery({
    queryKey: ['search', query],
    queryFn:()=>getSearchResults(query),
    enabled: !!query
  });
  

  


  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="lg:pt-12 pt-20 lg:px-12 px-4 w-full">
      <TopSection query={query} total={data?.data?.length}/>
      <div className='w-full flex items-center justify-between'>
        <h1 className={`${rowdies.className} text-2xl text-primary mt-12 mb-4`}>Going Nepal Adventure - Packages</h1>
        <Dropdown>
          <div className="flex items-center gap-4">
            <h1 className="font-bold text-sm text-primary">Filter by Packages</h1>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="rounded-sm w-[200px] flex justify-between"
                endContent={<IoIosArrowDown />}
              >
                {types || 'All Packages'}
              </Button>
            </DropdownTrigger>
          </div>
          <DropdownMenu
            aria-label="Package Type Selection"
            selectionMode="single"
            selectedKeys={new Set([types])}
            onSelectionChange={handleChange}
          >
            <DropdownItem key="">All Packages</DropdownItem>
            <DropdownItem key="Trekking">Trek Packages</DropdownItem>
            <DropdownItem key="Tour">Tour Packages</DropdownItem>
            <DropdownItem key="Wellness">Wellness Packages</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      {filtered.length===0 && <NoData title={"Treks"}/>}
      <div className='grid grid-cols-4 gap-10 w-full mb-12 mt-4'>
          {filtered?.map((item:any)=>(//eslint-disable-line @typescript-eslint/no-explicit-any
            <Link href={`/trekking/${item?.slug}`} key={item?._id}>
            <div className="w-full max-w-sm mx-auto">
                <div className="relative bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg">
                    {/* Image Container */}
                    <div className="relative w-full pt-[60%]">
                        <Image 
                            src={item?.thumbnail} 
                            alt={'package'}
                            fill
                            className="object-cover rounded-t-lg absolute top-0 left-0"
                        />
                    </div>

                    {/* Content Container */}
                    <div className="p-4 space-y-3">
                        {/* Title */}
                        <h2 className="font-bold text-lg md:text-xl line-clamp-2">{item.name}</h2>

                        {/* Stats Bar */}
                        <div className="bg-gray-100 rounded-md p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <CiLocationOn className="text-primary/60 text-lg" />
                                <span className="text-sm font-semibold">{item.country}</span>
                            </div>
                            <div className={`px-4 text-xs py-1  text-white rounded-2xl ${item.category==="Trekking"?"bg-primary":''} ${item.category==="Tour"?"bg-cyan-600":""} ${item.category==="Wellness"?"bg-yellow-500":""}`}>
                                <span className="text-sm font-semibold">{item.category}</span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 line-clamp-3">
                            {item?.overview}
                        </p>

                        {/* View Details Link */}
                        <div className="pt-2">
                            <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors underline underline-offset-2">
                                View Details
                            </button>
                        </div>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute -left-4 top-4 bg-primary/90 text-white px-4 py-2 rounded-md text-sm shadow-md">
                        From ${item?.price}
                    </div>
                </div>
            </div>
        </Link>
          ))}
      </div>
    </div>
  );
};

export default Search;
