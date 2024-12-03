"use client";
import React from "react";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface PlanProviderProps {
    children: ReactNode;
}


interface PlanContextProps {
    budget: number | number[]
    setBudget: Dispatch<SetStateAction<number | number[]>>
    adult: string|null
    setAdult:Dispatch<SetStateAction<string|null>>
    small: string|null
    setSmall:Dispatch<SetStateAction<string|null>>,
    accommodation: string;
    setAccommodation: Dispatch<SetStateAction<string>>;
    meal:string,
    setMeal:Dispatch<SetStateAction<string>>,
    fullname:string
    setFullname:Dispatch<SetStateAction<string>>
    address:string
    setAddress:Dispatch<SetStateAction<string>>
    email:string,
    setEmail:Dispatch<SetStateAction<string>>
    phone:string,
    setPhone:Dispatch<SetStateAction<string>>
    country:string|null
    setCountry:Dispatch<SetStateAction<string|null>>
    message:string,
    setMessage:Dispatch<SetStateAction<string>>
    trip:string
    setTrip:Dispatch<SetStateAction<string>>
    destination:string,
    setDestination:Dispatch<SetStateAction<string>>
    trekActivity:boolean,
    setTrekActivity:Dispatch<SetStateAction<boolean>>,
    tourActivity?:boolean
    setTourActivity:Dispatch<SetStateAction<boolean>>,
    selectedTrek:string,
    setSelectedTrek:Dispatch<SetStateAction<string>>,
    selectedTour:string,
    setSelectedTour:Dispatch<SetStateAction<string>>
    specialPlan:string,
    setSpecialPlan:Dispatch<SetStateAction<string>>,
    stayDays:string
    setStayDays:Dispatch<SetStateAction<string>>,
}

export const PlanContext = createContext<PlanContextProps | null>(null);

const PlanContextProvider:React.FC<PlanProviderProps> = ({ children }) => {
    const [budget, setBudget] = useState<number | number[]>(12500)
    const [adult, setAdult] = useState<string|null>(null)
    const [small, setSmall] = useState<string|null>(null)
    const [accommodation, setAccommodation] = useState<string>("");
    const [meal, setMeal] = useState<string>("")
    const [fullname, setFullname] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [country, setCountry] = React.useState<string | null>(null);
    const [message, setMessage] = useState<string>("")
    const [trip, setTrip] = useState<string>("")
    const [destination, setDestination] = useState<string>("")
    const [trekActivity, setTrekActivity] = useState<boolean>(false)
    const [tourActivity, setTourActivity] = useState<boolean>(false)
    const [selectedTrek, setSelectedTrek] = useState<string>("")
    const [selectedTour, setSelectedTour] = useState<string>("")
    const [specialPlan, setSpecialPlan] = useState<string>("")
    const [stayDays, setStayDays] = useState<string>("YYYY-MM-DD")
    
    
    return (
        <PlanContext.Provider value={{
            budget,
            setBudget,
            adult,
            setAdult,
            small,
            setSmall,
            accommodation,
            setAccommodation,
            meal,
            setMeal,
            fullname,
            setFullname,
            address,
            setAddress,
            email,
            setEmail,
            phone,
            setPhone,
            country,
            setCountry,
            message,
            setMessage,
            trip,
            setTrip,
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
            stayDays,
            setStayDays
        }}>
            {children}
        </PlanContext.Provider>
    )
}

export default PlanContextProvider;