"use client";
import React from "react";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface PlanProviderProps {
    children: ReactNode;
}

interface trekProps{
    title:string|null
    id:string | null
}
interface tourProps{
    title:string | null
    id:string | null
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
    selectedTrek:trekProps|null,
    setSelectedTrek:Dispatch<SetStateAction<trekProps|null>>,
    selectedTour:tourProps|null,
    setSelectedTour:Dispatch<SetStateAction<tourProps|null>>
    specialPlan:string,
    setSpecialPlan:Dispatch<SetStateAction<string>>,
    stayDays:string
    setStayDays:Dispatch<SetStateAction<string>>,
    alertMessage: string | null;
    setAlertMessage: Dispatch<SetStateAction<string | null>>;
    agree:boolean
    setAgree:Dispatch<SetStateAction<boolean>>
}

export const PlanContext = createContext<PlanContextProps | null>(null);

const PlanContextProvider:React.FC<PlanProviderProps> = ({ children }) => {
    const [budget, setBudget] = useState<number | number[]>(12500)
    const [adult, setAdult] = useState<string|null>("1")
    const [small, setSmall] = useState<string|null>("0")
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
    const [selectedTrek, setSelectedTrek] = useState<trekProps | null>({title:null,id:null})
    const [selectedTour, setSelectedTour] = useState<tourProps |null>({title:null,id:null})
    const [specialPlan, setSpecialPlan] = useState<string>("")
    const [stayDays, setStayDays] = useState<string>("YYYY-MM-DD")
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [agree, setAgree] = useState<boolean>(false)
    
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
            setStayDays,
            alertMessage,
            setAlertMessage,
            agree,
            setAgree
        }}>
            {children}
        </PlanContext.Provider>
    )
}

export default PlanContextProvider;