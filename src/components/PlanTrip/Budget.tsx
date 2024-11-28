import { Slider } from '@nextui-org/react'
import React, { useContext } from 'react'
import {PlanContext} from './PlanContext'

const Budget = () => {
    const {budget,setBudget}=useContext(PlanContext)!
    return (
        <div className='flex w-full flex-col items-center justify-center px-16'>
            <h1 className='text-2xl text-primary font-semibold py-16 tracking-wide'>Estimated Budget Range</h1>
            <Slider 
                step={200}
                minValue={500} 
                showOutline={true}
                value={budget} 
                onChange={setBudget}
                maxValue={25000} 
                formatOptions={{style: "currency", currency: "USD"}}
                className="w-4/5"
                />
            <div className='flex justify-between px-24 w-full items-center'>
                <p>$500</p>
                <p>$25000</p>
            </div>
            <h1 className='font-semibold text-xl my-12'>Your estimated budget : ${budget}</h1>
        </div>
    )
}

export default Budget
