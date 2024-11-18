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




// trek poage 

export interface TrekDetails {
  name: string; // Name of the trek
  slug: string; // SEO-friendly unique identifier
  location: string; // Specific location or region of the trek
  days: {
    min: number; // Minimum number of days
    max: number; // Maximum number of days
  };
  difficulty: string; // Difficulty level of the trek
  price: number; // Cost of the trek
  overview: string; // Overview or summary of the trek
  thumbnail: string; // Thumbnail image URL
}
