"use client"
import SharedTitle from '@/shared/SharedTitle'
import { Button, Tab, Tabs } from '@nextui-org/react'
import React, { useContext, useState } from 'react'
import Destination from './Destination'
import Arrival from './Arrival'
import TravelAndAccomodation from './TravelAndAccomodation'
import Budget from './Budget'
import Info from './Info'
import { PlanContext } from './PlanContext'
import Alert from '@/shared/AlertMessage/Alert'
import { useMutation } from '@tanstack/react-query'
import { sendPlanTrip } from '@/services/plantrip'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { capitalizeFirstLetter } from './Destination';

const PlanTrip = () => {
    const [selected, setSelected] = useState<string>("1. Destination");
    const [completedTabs, setCompletedTabs] = useState<string[]>([]);
    const {budget,adult,small,accommodation,meal,fullname,address,email,phone,country,specialPlan,message,agree,trip,destination,trekActivity,tourActivity,selectedTrek,selectedTour,stayDays,alertMessage,setAlertMessage}=useContext(PlanContext)!
    const router=useRouter()
    const tabs = ["1. Destination", "2. Arrival", "3. Tavel & Accommodation", "4. Budget", "5. Info"];

    const selection = (key: string | number) => {
        const tabKey = String(key);
        
        if (!completedTabs.includes(tabKey) && tabKey !== selected) {
            return;
        }
        
        setSelected(tabKey);
        setAlertMessage(null);
    };

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

    const {mutate:createPlanTrip}=useMutation({
        
        mutationFn:(data:any)=>sendPlanTrip(data),//eslint-disable-line @typescript-eslint/no-explicit-any
        onSuccess:()=>{
            router.push("/")
            toast.success("Your plan trip has been submitted.")
        },
        onError:()=>{
            toast.error("Failed to submit your plan trip.")
        }
    })

        const submitPlanTrip = () => {
    const data = {
        destination: capitalizeFirstLetter(destination),
        isTrek: trekActivity,
        isTour: tourActivity,
        ...(trekActivity && selectedTrek && selectedTrek._id ? {
            trek: [{
                trekId: selectedTrek._id,
                trekName: selectedTrek.title,
            }]
        } : {}),
        ...(tourActivity && selectedTour && selectedTour._id ? {
            tour: [{
                tourId: selectedTour._id,
                tourName: selectedTour.title,
            }]
        } : {}),
        specialPlan: specialPlan || "",
        duration: stayDays,
        travelType: trip,
        adult: adult,
        children: small,
        preferedAccomodation: accommodation,
        mealType: meal,
        estimatedBudget: JSON.stringify(budget),
        fullName: fullname,
        address: address,
        email: email,
        phoneNumber: phone,
        country: country,
        note: message || "",
    }
    createPlanTrip(data)
}

    const handleNext = () => {
        if(!cantProceed()){
            return
        }
        if (!completedTabs.includes(selected)) {
            setCompletedTabs(prev => [...prev, selected]);
        }
        
        const currentIndex = tabs.indexOf(selected);
        if (currentIndex < tabs.length - 1) {
            setSelected(tabs[currentIndex + 1]);
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handlePrevious = () => {
        setAlertMessage(null)
        const currentIndex = tabs.indexOf(selected);
        if (currentIndex > 0) {
            setSelected(tabs[currentIndex - 1]);
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const cantProceed = () => { 
        if (selected === "1. Destination") {
            if (!destination) {
                setAlertMessage("Please select a destination");
                return false;
            }
            
            if (!trekActivity && !tourActivity) {
                setAlertMessage("Please select a preferred activity");
                return false;
            }
            
            if (trekActivity && (!selectedTrek || selectedTrek==null)) {
                setAlertMessage("Please select a trek package.");
                return false;
            }

            if (tourActivity && (!selectedTour || selectedTour === null)) {
                setAlertMessage("Please select a tour package.");
                return false;
            }
        }

        if(selected === "2. Arrival"){
            if(stayDays === "YYYY-MM-DD"){
                setAlertMessage("Please select your arrival and departure dates");
                return false;
            }
        }

        if(selected === "3. Tavel & Accommodation"){
            if(!trip){
                setAlertMessage("Please select a preferred trip.");
                return false
            }
            if(trip==="family"&&(!adult||!small)){
                setAlertMessage("Please select the number of adults and children.");
                return false
            }
            if(!accommodation){
                setAlertMessage("Please select a preferred accommodation");
                return false;
            }
            if(!meal){
                setAlertMessage("Please select a preferred meal plan");
                return false;
            }
        }
        if(selected === "4. Budget"){
            if(!budget){
                setAlertMessage("Please select a budget");
                return false;
            }
        }
        if(selected === "5. Info"){
            if(!fullname || !address || !email || !phone || !country){
                setAlertMessage("Please fill out all the required fields");
                return false;
            }
            if(!agree){
                setAlertMessage("Please agree to our terms and conditions");
                setTimeout(()=>{
                    setAlertMessage(null);
                },2000)
                return false;
            }
        }
        return true;
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
                            isDisabled={!completedTabs.includes(key) && key !== selected}
                        />
                    ))}
                </Tabs>
                <div className="mt-8 flex items-center justify-center flex-col bg-gray-100 rounded-md px-12 py-8">
                    {renderTab()}
                    {alertMessage && 
                        <div className='my-8 w-2/5'>
                            <Alert message={alertMessage}/>    
                        </div>
                    }
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
                    ) : (
                        <Button className='text-white py-4 px-12 rounded-sm bg-primary' onPress={submitPlanTrip}>
                            Submit
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PlanTrip