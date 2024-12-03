"use client"
import { Autocomplete, AutocompleteItem, Checkbox, Textarea } from '@nextui-org/react'
import React, { useContext } from 'react'
import Image from 'next/image'
import { PlanContext } from './PlanContext'
import { useQuery } from '@tanstack/react-query'
import { getAllTreks } from '@/services/treks'
import { getToursByCountryNoLimit } from '@/services/tour'

interface TrekDropDown{
    name?: string
    country?:string
}
const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
const Destination = () => {
    const {destination,setDestination,trekActivity,setTrekActivity,tourActivity,setTourActivity,selectedTrek,selectedTour,setSelectedTour,setSelectedTrek,specialPlan,setSpecialPlan}=useContext(PlanContext)!

    const {data:trekData,isLoading}=useQuery({
        queryKey: ['trekData'],
        queryFn:()=>getAllTreks(),
        enabled:!!trekActivity
    })

    const {data:tourData,isLoading:tourLoading}=useQuery({
        queryKey: ['tourData',destination],
        queryFn:()=>getToursByCountryNoLimit(capitalizeFirstLetter(destination)),
        enabled:!!destination||tourActivity
    })

    const onSelectionChange = (key: React.Key | null) => {
        setSelectedTrek(String(key));
    };
    const onSelectionTourChange = (key: React.Key | null) => {
        setSelectedTour(String(key));
    };

    const handleDestinationChange = (type: string) => {
        setDestination(destination === type ? "" : type);
    }
    return (
        <div className="flex w-full flex-col items-center justify-center px-16">
            <h1 className="text-2xl text-primary font-semibold py-8 tracking-wide">
                Choose your Destination
            </h1>
            <div className="flex items-center justify-center gap-6 my-4 w-full">
            {[
                { type: "nepal", label: "Nepal",image:"/assets/aboutBG.jpg" },
                { type: "bhutan", label: "Bhutan" ,image:"/assets/bhutan/b2.avif"},
                { type: "tibet", label: "Tibet",image:"/assets/tibet/t3.avif" },
            ].map(({ type, label,image }) => (
                <div key={type} className="flex flex-col gap-2 w-full">
                    <div className="h-[160px] w-full">
                        <Image
                        src={image}
                        alt={label}
                        width={1000}
                        height={1000}
                        className="h-full w-full object-cover rounded-sm shadow-sm"
                        />
                    </div>
                        <Checkbox
                            isSelected={destination === type}
                            onChange={() => handleDestinationChange(type)}
                        >
                            {label}
                        </Checkbox>
                </div>
            ))}
            </div>
            <div className="flex items-center justify-center gap-6 my-4 w-full">
                {["nepal", "bhutan", "tibet"].includes(destination)&&(
                    <div className='flex flex-col gap-6 w-full items-center'>
                        <h1 className="text-2xl text-primary font-semibold py-8 tracking-wide">
                            Select your preferred activity
                        </h1>
                        <div className="flex items-center justify-center gap-6 w-full">
                            {destination==="nepal"&&(
                                <div className="flex flex-col gap-2 w-1/2">
                                    <div className="h-[160px] w-full">
                                        <Image
                                        src="/assets/trek.jpeg"
                                        alt="Trek (Adventerous and Thrilling destinations)"
                                        width={1000}
                                        height={1000}
                                        className="h-full w-full object-cover rounded-sm shadow-sm"
                                        />
                                    </div>
                                        <Checkbox
                                            isSelected={trekActivity}
                                            onChange={(e)=>setTrekActivity(e.target.checked)}
                                        >
                                            {"Trek (Adventerous and Thrilling destinations)"}
                                        </Checkbox>
                                </div>
                            )}
                            <div className="flex flex-col gap-2 w-1/2">
                                <div className="h-[160px] w-full">
                                    <Image
                                    src="/assets/hiking.avif"
                                    alt="Tour (Explore various tour types and destinations)"
                                    width={1000}
                                    height={1000}
                                    className="h-full w-full object-cover rounded-sm shadow-sm"
                                    />
                                </div>
                                    <Checkbox
                                        isSelected={tourActivity}
                                        onChange={(e)=>setTourActivity(e.target.checked)}
                                    >
                                        {"Tour (Explore various tour types and destinations)"}
                                    </Checkbox>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {trekActivity&&(
                <>
                    <div className="flex items-center flex-col justify-center gap-2 my-4 w-full">
                    <h1 className="text-2xl text-primary font-semibold py-8 tracking-wide">
                        Select a trekking package of your choice
                    </h1>
                    <Autocomplete 
                        label="Select any trekking package" 
                        radius='none'
                        color='primary'
                        isClearable={false}
                        selectedKey={selectedTrek || undefined}
                        onSelectionChange={onSelectionChange}
                        classNames={{
                        }}
                    >
                        {!isLoading &&
                        trekData?.data?.data?.map((trek:TrekDropDown) => (
                            <AutocompleteItem key={trek?.name+"1"} value={trek?.name}>
                                {trek?.name}
                            </AutocompleteItem>
                        ))}
                    </Autocomplete>
                </div>
                </>
            )}
            {tourActivity&&(
                <>
                    <div className="flex items-center flex-col justify-center gap-2 my-4 w-full">
                    <h1 className="text-2xl text-primary font-semibold py-8 tracking-wide">
                        Select a tour package of your choice
                    </h1>
                    <Autocomplete 
                        label="Select any tour package" 
                        radius='none'
                        color='primary'
                        isClearable={false}
                        selectedKey={selectedTour || undefined}
                        onSelectionChange={onSelectionTourChange}
                        classNames={{
                        }}
                    >
                        {!tourLoading &&
                        tourData?.data?.data?.map((trek:TrekDropDown) => (
                            <AutocompleteItem key={trek?.name+"1"} value={trek?.name}>
                                {trek?.name}
                            </AutocompleteItem>
                        ))}
                    </Autocomplete>
                </div>
                </>
            )}
            <Textarea
            label="Any other special plan"
            labelPlacement='outside'
            placeholder="Enter your message"
            value={specialPlan || ""}
            onChange={(e) => setSpecialPlan(e.target.value)}
            className="h-[300px] mt-8 w-full shadow-sm"
            classNames={{
            inputWrapper: "text-black font-medium bg-white group-data-[focus=true]:bg-white",
            label: "text-black text-lg font-medium ",
            input:" min-h-[200px]"
            }}
            />
            
        </div>
    )
}

export default Destination
