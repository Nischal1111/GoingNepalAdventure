"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import PlanContextProvider from "@/components/PlanTrip/PlanContext";

const queryClient = new QueryClient();

export function Provider({ children }: { children: React.ReactNode }){
    return(
            <NextUIProvider>
                <QueryClientProvider client={queryClient}>
                    <PlanContextProvider>
                    {children}  
                    </PlanContextProvider>
                </QueryClientProvider>
            </NextUIProvider>
    )
}