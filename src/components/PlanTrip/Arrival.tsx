import { DateRangePicker, RangeValue } from '@nextui-org/react'
import React, { useContext } from 'react'
import { parseDate, today, getLocalTimeZone } from '@internationalized/date';
import { PlanContext } from './PlanContext';
import {  DateValue } from '@internationalized/date';

const Arrival = () => {
    const { stayDays, setStayDays } = useContext(PlanContext)!

    const handleDateChange = (value: RangeValue<DateValue>) => {
        // Convert the range to a string representation
        const formattedStart = value?.start?.toString();
        const formattedEnd = value?.end?.toString();
        setStayDays(`${formattedStart} - ${formattedEnd}`);
    }

    return (
        <div className="flex w-full flex-col items-center justify-center px-16">
            <h1 className="text-2xl text-primary font-semibold py-8 tracking-wide">
                Arrival and Departure
            </h1>
            <div className="flex w-full flex-col  justify-between">
                <h1 className="text-base font-semibold tracking-wide">
                    Select your arrival and departure dates
                </h1>
                <DateRangePicker 
                    label="Your stay duration" 
                    minValue={today(getLocalTimeZone())}
                    value={stayDays !== "YYYY-MM-DD" 
                        ? {
                            start: parseDate(stayDays.split(' - ')[0]),
                            end: parseDate(stayDays.split(' - ')[1])
                            }
                        : undefined
                    }
                    onChange={handleDateChange}
                    classNames={{
                        inputWrapper: "text-black font-medium bg-white",
                    }}
                />
            </div>
        </div>
    )
}

export default Arrival