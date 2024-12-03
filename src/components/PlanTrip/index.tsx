"use client"
import SharedTitle from '@/shared/SharedTitle'
import { Button, Tab, Tabs } from '@nextui-org/react'
import React, { useState } from 'react'
import Destination from './Destination'
import Arrival from './Arrival'
import TravelAndAccomodation from './TravelAndAccomodation'
import Budget from './Budget'
import Info from './Info'

const PlanTrip = () => {
    const [selected, setSelected] = useState<string>("1. Destination");

    const selection = (key: string | number) => {
        setSelected(String(key));
    };


    const tabs = ["1. Destination", "2. Arrival", "3. Tavel & Accommodation", "4. Budget", "5. Info"];

    const renderTab = () => {
        switch (selected) {
            case "1. Destination":
                return <Destination />;
            case "2. Arrival":
                return <Arrival />;
            case "3. Tavel & Accommodation":
                return <TravelAndAccomodation />;
            case "4. Budget":
                return <Budget />;
            case "5. Info":
                return <Info />;
            default:
                return null;
        }
    };

    const handleNext = () => {
        const currentIndex = tabs.indexOf(selected);
        if (currentIndex < tabs.length - 1) {
            setSelected(tabs[currentIndex + 1]);
        }
    };

    const handlePrevious = () => {
        const currentIndex = tabs.indexOf(selected);
        if (currentIndex > 0) {
            setSelected(tabs[currentIndex - 1]);
        }
    };

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <SharedTitle title='Plan your trip' subTitle='Plan your trip'/>
            <div className='py-8'>
                <Tabs
                    aria-label="Options"
                    selectedKey={selected}
                    onSelectionChange={selection}
                    size='lg'
                    variant='underlined'
                    radius='none'
                    color='primary'
                    classNames={{
                        tabList: "flex w-full items-center px-0 justify-between bg-transparent py-0 gap-0 bg-priary/10",
                        cursor: "w-full text-primary",
                        tab: "px-14 py-4 flex-1",
                        tabContent: `text-xl w-full font-bold`,
                    }}
                >
                    {tabs.map((key) => (
                        <Tab
                            key={key}
                            title={key}
                        />
                    ))}
                </Tabs>
                <div className="mt-8 bg-gray-100 rounded-md px-12 py-8">
                    {renderTab()}
                </div>
                <div className='my-12 flex items-center gap-3 w-full justify-center'>
                    {tabs.indexOf(selected) > 0 && (
                        <Button className='text-white py-4 px-12 rounded-sm bg-primary' onClick={handlePrevious}>
                            Previous
                        </Button>
                    )}
                    {tabs.indexOf(selected) < tabs.length - 1 ? (
                        <Button className='text-white py-4 px-12 rounded-sm bg-primary' onPress={handleNext}>
                            Next
                    </Button>
                    )
                    :
                    (

                        <Button className='text-white py-4 px-12 rounded-sm bg-primary' onPress={handleNext}>
                                Submit
                        </Button>
                    )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default PlanTrip