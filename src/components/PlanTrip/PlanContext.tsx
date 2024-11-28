"use client";
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
}

export const PlanContext = createContext<PlanContextProps | null>(null);

const PlanContextProvider:React.FC<PlanProviderProps> = ({ children }) => {
    const [budget, setBudget] = useState<number | number[]>(12500)
    const [adult, setAdult] = useState<string|null>(null)
    const [small, setSmall] = useState<string|null>(null)
    const [accommodation, setAccommodation] = useState<string>("");
    const [meal, setMeal] = useState<string>("")
    
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
            setMeal
        }}>
            {children}
        </PlanContext.Provider>
    )
}

export default PlanContextProvider;