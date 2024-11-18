import { IconType } from "react-icons"

interface trekHighLightsProps{
    content:string
    links:{
        text:string
        url:string
    }
}

interface ItineraryLink {
    text: string;
    url: string;
}

interface ItineraryItem {
    day: number;
    title: string;
    details: string;
    links: ItineraryLink[];
}
export interface trekProps{
    title?:string
    img?:string
    desc?:string
    price?:string
    minitrekDetails?:{
        title:string
        value:string
        icon:JSX.Element
    }[]
    trekHighlights?: trekHighLightsProps[];
    itinerary?: ItineraryItem[]|undefined;
    servicesIncluded?:string[]
    servicesNotIncluded?:string[]
    trekkingEquipment?:{
        category:string
        items:string[]
        icon: IconType;
    }[]
    gallery?:string[]
    FAQs?:{
        question:string
        answer:string
    }[]|undefined
}