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
    trekHighlights?: string[];
    itinerary?: {
        day: number;
        title: string;
        description: string;
        meals: string;
        accommodation: string;
    }[]|undefined;
    servicesIncluded?:string[]
    servicesNotIncluded?:string[]
    trekkingEquipment?:{
        category:string
        items:string[]
    }[]
    gallery?:string[]
    FAQs?:{
        question:string
        answer:string
    }[]|undefined
}