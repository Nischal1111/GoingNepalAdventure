export interface trekProps{
    title?:string
    img?:string
    desc?:string
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

}