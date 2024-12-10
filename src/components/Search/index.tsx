"use client";
import React from 'react';
import TopSection from './TopSection';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Loader from '@/shared/Loader';
import { getSearchResults } from '@/services/search';
import NoData from '@/shared/NoData/NoData';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { rowdies } from '@/utility/font';

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('search');


  const { data, isLoading, error } = useQuery({
    queryKey: ['search', query],
    queryFn:()=>getSearchResults(query),
    enabled: !!query
  });
  

  const trekData = data?.data?.filter((item: any) => item.category.toLowerCase() === "trekking"); //eslint-disable-line @typescript-eslint/no-explicit-any
  const tourData = data?.data?.filter((item: any) => item.category.toLowerCase() === "tour");//eslint-disable-line @typescript-eslint/no-explicit-any
  const activityData = data?.data?.filter((item: any) => item.category.toLowerCase() === "activity");//eslint-disable-line @typescript-eslint/no-explicit-any

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="lg:pt-12 pt-20 lg:px-12 px-4 w-full">
      <TopSection query={query} total={data?.data?.length}/>
      <h1 className={`${rowdies.className} text-2xl text-primary mt-12 mb-4`}>Going Nepal Adventure - Trekking Packages</h1>
      {trekData.length===0 && <NoData title={"Treks"}/>}
      <div className='flex flex-col gap-4 w-1/2 mb-12'>
          {trekData?.map((item:any,index:number)=>(//eslint-disable-line @typescript-eslint/no-explicit-any
            <div key={index} className='rounded-sm shadow-sm flex gap-8 w-full px-4 py-4 border border-gray-300'>
                <div className='w-1/5 h-[130px]'>
                    <Image src={item.thumbnail} alt={item.name} height={1000} width={1000} className='object-cover h-full w-full rounded-sm'/>
                </div>
                <div className='w-4/5 flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-2xl font-semibold'>{item.name}</h1>
                        <p className='text-primary font-semibold'>${item.price}</p> 
                    </div>
                    <p className='text-gray-600 my-2 text-sm'>{item.overview?.slice(0,100)}...</p>
                    <div className='flex items-center my-2 justify-between w-full'>
                      <div className='flex items-center gap-2'> 
                        <CiLocationOn className='text-primary' size={16}/>
                        <p className='text-gray-600 text-sm'>{item.location}</p>
                    </div>
                    <Link href={`/trekking/${item.slug}`}>
                          <Button className='text-xs bg-primary rounded-sm text-white px-6 py-2' size='sm'>View Details</Button>
                    </Link>
                    </div>
                    
              </div>
            </div>
          ))}
      </div>
      <h1 className={`${rowdies.className} text-2xl text-primary mt-12 mb-4`}>Going Nepal Adventure - Tour Packages</h1>
      {tourData.length===0 && <NoData title={'Tours'}/>}
      <div className='flex flex-col gap-4 w-1/2 mb-12'>
          {tourData?.map((item:any,index:number)=>(//eslint-disable-line @typescript-eslint/no-explicit-any
            <div key={index} className='rounded-sm shadow-sm flex gap-8 w-full px-4 py-4 border border-gray-300'>
                <div className='w-1/5 h-[130px]'>
                    <Image src={item.thumbnail} alt={item.name} height={1000} width={1000} className='object-cover h-full w-full rounded-sm'/>
                </div>
                <div className='w-4/5 flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-2xl font-semibold'>{item.name}</h1>
                        <p className='text-primary font-semibold'>${item.price}</p> 
                    </div>
                    <p className='text-gray-600 my-2 text-sm'>{item.overview?.slice(0,100)}...</p>
                    <div className='flex items-center my-2 justify-between w-full'>
                      <div className='flex items-center gap-2'> 
                        <CiLocationOn className='text-primary' size={16}/>
                        <p className='text-gray-600 text-sm'>{item.location}</p>
                    </div>
                    <Link href={`/tour/${item.slug}`}>
                          <Button className='text-xs bg-primary rounded-sm text-white px-6 py-2' size='sm'>View Details</Button>
                    </Link>
                    </div>
                    
              </div>
            </div>
          ))}
      </div>
      <h1 className={`${rowdies.className} text-2xl text-primary mt-12 mb-4`}>Going Nepal Adventure - Thrilling Activities</h1>
      {activityData.length===0 && <NoData title={'Activities'}/>}
      <div className='flex flex-col gap-4 w-1/2 mb-12'>
          {activityData?.map((item:any,index:number)=>(//eslint-disable-line @typescript-eslint/no-explicit-any
            <div key={index} className='rounded-sm shadow-sm flex gap-8 w-full px-4 py-4 border border-gray-300'>
                <div className='w-1/5 h-[130px]'>
                    <Image src={item.thumbnail} alt={item.name} height={1000} width={1000} className='object-cover h-full w-full rounded-sm'/>
                </div>
                <div className='w-4/5 flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-2xl font-semibold'>{item.title}</h1>
                        <p className='text-primary font-semibold'>${item.price}</p> 
                    </div>
                    <p className='text-gray-600 my-2 text-sm'>{item.overview?.slice(0,100)}...</p>
                    <div className='flex items-center my-2 justify-between w-full'>
                      <div className='flex items-center gap-2'> 
                        <CiLocationOn className='text-primary' size={16}/>
                        <p className='text-gray-600 text-sm'>{item.location}</p>
                    </div>
                    <Link href={`/tour/${item.slug}`}>
                          <Button className='text-xs bg-primary rounded-sm text-white px-6 py-2' size='sm'>View Details</Button>
                    </Link>
                    </div>
                    
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
