"use client"
import { Checkbox, Textarea } from '@nextui-org/react'
import React, { useContext } from 'react'
import Image from 'next/image'
import { PlanContext } from './PlanContext'
import { useQuery } from '@tanstack/react-query'
import { getAllTreks } from '@/services/treks'
import { getToursByCountryNoLimit } from '@/services/tour'

interface TrekDropDown {
    name?: string
    country?: string
    _id?: string
}

export const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const Destination = () => {
    const {
        destination,
        setDestination,
        trekActivity,
        setTrekActivity,
        tourActivity,
        setTourActivity,
        selectedTrek,
        setSelectedTrek,
        selectedTour,
        setSelectedTour,
        specialPlan,
        setSpecialPlan,
        setAlertMessage
    } = useContext(PlanContext)!

    const { data: trekData, isLoading } = useQuery({
        queryKey: ['trekData'],
        queryFn: () => getAllTreks(),
        enabled: !!trekActivity
    })

    const { data: tourData, isLoading: tourLoading } = useQuery({
        queryKey: ['tourData', destination],
        queryFn: () => getToursByCountryNoLimit(capitalizeFirstLetter(destination)),
        enabled: !!destination || tourActivity
    })

    const handleTrekSelection = (trek: TrekDropDown, isSelected: boolean) => {
        if (isSelected) {
            if (selectedTrek!.length >= 2) {
                setAlertMessage("You can only select up to 2 treks");
                return;
            }
            setSelectedTrek([...selectedTrek!, { title: trek.name || null, _id: trek._id || null }]);
        } else {
            setSelectedTrek(selectedTrek!.filter((item:any )=> item._id !== trek._id));//eslint-disable-line @typescript-eslint/no-explicit-any
        }
        setAlertMessage(null);
    };

    const handleTourSelection = (tour: TrekDropDown, isSelected: boolean) => {
        if (isSelected) {
            if (selectedTour!.length >= 2) {
                setAlertMessage("You can only select up to 2 tours");
                return;
            }
            setSelectedTour([...selectedTour!, { title: tour.name || null, _id: tour._id || null }]);
        } else {
            setSelectedTour(selectedTour!.filter((item:any) => item._id !== tour._id));//eslint-disable-line @typescript-eslint/no-explicit-any
        }
        setAlertMessage(null);
    };

    const handleTrek = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTrekActivity(e.target.checked)
        if (!e.target.checked) {
            setSelectedTrek([]);
        }
        setAlertMessage(null)
    }

    const handleTour = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTourActivity(e.target.checked)
        if (!e.target.checked) {
            setSelectedTour([]);
        }
        setAlertMessage(null)
    }

    const handleSpecial = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSpecialPlan(e.target.value)
        setAlertMessage(null)
    }

    const handleDestinationChange = (type: string) => {
        setAlertMessage(null)
        setDestination(destination === type ? "" : type);
        setTrekActivity(false)
        setTourActivity(false)
        setSelectedTrek([])
        setSelectedTour([])
        setSpecialPlan("")
    }

    return (
        <div className="flex w-full flex-col items-center justify-center px-16">
            <h1 className="text-2xl text-primary font-semibold py-8 tracking-wide">
                Choose your Destination
            </h1>
            <div className="flex items-center justify-center gap-6 my-4 w-full">
                {[
                    { type: "Nepal", label: "Nepal", image: "/assets/aboutBG.jpg" },
                    { type: "Bhutan", label: "Bhutan", image: "/assets/bhutan/b2.avif" },
                    { type: "Tibet", label: "Tibet", image: "/assets/tibet/t3.avif" },
                ].map(({ type, label, image }) => (
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
                            onValueChange={() => handleDestinationChange(type)}
                        >
                            {label}
                        </Checkbox>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center gap-6 my-4 w-full">
                {["Nepal", "Bhutan", "Tibet"].includes(destination) && (
                    <div className='flex flex-col gap-6 w-full items-center'>
                        <h1 className="text-2xl text-primary font-semibold py-8 tracking-wide">
                            Select your preferred activity
                        </h1>
                        <div className="flex items-center justify-center gap-6 w-full">
                            {destination === "Nepal" && (
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
                                        onChange={handleTrek}
                                    >
                                        {"Trek (Adventerous and Thrilling destinations)"}
                                    </Checkbox>
                                </div>
                            )}
                            <div className="flex flex-col gap-2 w-1/2">
                                <div className="h-[160px] w-full">
                                    <Image
                                        src={destination === "Nepal" ? "/assets/hiking.avif" : destination === "Bhutan" ? "/assets/bhutan/b4.avif" : "/assets/tibet/t4.avif"}
                                        alt="Tour (Explore various tour types and destinations)"
                                        width={1000}
                                        height={1000}
                                        className="h-full w-full object-cover rounded-sm shadow-sm"
                                    />
                                </div>
                                <Checkbox
                                    isSelected={tourActivity}
                                    onChange={handleTour}
                                >
                                    {"Tour (Explore various tour types and destinations)"}
                                </Checkbox>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {trekActivity && (
                <div className="flex items-center flex-col justify-center gap-2 my-4 w-full">
                    <h1 className="text-2xl text-primary font-semibold py-8 tracking-wide">
                        Select up to 2 trekking packages of your choice
                    </h1>
                    <div className="grid grid-cols-3 gap-4 w-full">
                        {!isLoading &&
                            trekData?.data?.data?.map((trek: TrekDropDown) => (
                                <div key={trek._id} className="flex flex-col gap-2">
                                    <Checkbox
                                        isSelected={selectedTrek!.some((item:any) => item._id === trek._id)} //eslint-disable-line @typescript-eslint/no-explicit-any
                                        onValueChange={(isSelected) => handleTrekSelection(trek, isSelected)}
                                    >
                                        {trek.name}
                                    </Checkbox>
                                </div>
                            ))}
                    </div>
                </div>
            )}
            {tourActivity && (
                <div className="flex items-center flex-col justify-center gap-2 my-4 w-full">
                    <h1 className="text-2xl text-primary font-semibold py-8 tracking-wide">
                        Select up to 2 tour packages of your choice
                    </h1>
                    <div className="grid grid-cols-3 gap-4 w-full">
                        {!tourLoading &&
                            tourData?.data?.data?.map((tour: TrekDropDown) => (
                                <div key={tour._id} className="flex flex-col gap-2">
                                    <Checkbox
                                        isSelected={selectedTour!.some((item:any) => item._id === tour._id)} //eslint-disable-line @typescript-eslint/no-explicit-any
                                        onValueChange={(isSelected) => handleTourSelection(tour, isSelected)}
                                    >
                                        {tour.name}
                                    </Checkbox>
                                </div>
                            ))}
                    </div>
                </div>
            )}
            <Textarea
                label="Any other special plan"
                labelPlacement='outside'
                placeholder="Enter your message"
                value={specialPlan || ""}
                onChange={handleSpecial}
                className="h-[300px] mt-8 w-full shadow-sm"
                classNames={{
                    inputWrapper: "text-black font-medium bg-white group-data-[focus=true]:bg-white",
                    label: "text-black text-lg font-medium ",
                    input: " min-h-[200px]"
                }}
            />
        </div>
    )
}

export default Destination