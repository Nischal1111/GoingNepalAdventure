import { IconType } from "react-icons"

export interface trekHighLightsProps{
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

export interface ItineraryItem {
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
    slug?:string
    type?:string|undefined
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
    trekPdf?:string
    _id?:string
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
  discount?: string;
  difficulty?: string; // Difficulty level of the trek
  price: string; // Cost of the trek
  overview: string; // Overview or summary of the trek
  thumbnail: string; // Thumbnail image URL
}

export interface TourDetails{
    name: string;
    slug: string;
    country: string;
    discount: string;
    days:{
      min: number;
      max: number;
    }
    price: number; // Cost of the trek
    overview: string; // Overview or summary of the trek
    thumbnail: string;
    tripType?: string;
}

interface TourHighlight {
  content: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface TourItinerary {
  day: number;
  title: string;
  details: string;
  accommodations: string;
  meals: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface TourFAQ {
  question: string;
  answer: string;
}

export interface Tour {
  category?:string
  days?: {
    min: number;
    max: number;
  };
  groupSize?: {
    min: number;
    max: number;
  };
  _id?: string;
  discount?: string;
  name?: string;
  slug?: string;
  price?: string;
  thumbnail?: string;
  country?: string;
  language?: string;
  maxAltitude?: string;
  type?: string|undefined;
  suitableAge?: string;
  location?: string;
  tripType?: string;
  arrivalLocation?: string;
  departureLocation?: string;
  startingPoint?: string;
  endingPoint?: string;
  accommodation?: string[];
  thingsToKnow?: string[];
  meal?: string;
  bestSeason?: string[];
  overview?: string;
  highlights?: TourHighlight[];
  itinerary?: TourItinerary[];
  servicesCostIncludes?: string[];
  servicesCostExcludes?: string[];
  faq?: TourFAQ[];
  images?: string[];
  note?: string;
  viewsCount?: number;
  isFeatured?: boolean;
  isPopular?: boolean;
  isRecommended?: boolean;
  isNewItem?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}


export interface WellnessProps{
  name: string;
    slug: string;
    country: string;
    price: number;
    overview: string; 
    thumbnail: string;
}


interface WellnessHighlight {
    content: string;
    links: {
        text: string;
        url: string;
    }[];
}

interface WellnessItinerary {
    day: number;
    title: string;
    details: string;
    accommodations: string;
    meals: string;
    links: {
        text: string;
        url: string;
    }[];
}

interface WellnessFAQ {
    question: string;
    answer: string;
}

export interface WellnessData {
    days?: {
        min?: number;
        max?: number;
    };
    groupSize?: {
        min?: number;
        max?: number;
    };
    _id?: string;
    name?: string;
    slug?: string;
    price?: number;
    type?: string|undefined;
    thumbnail?: string;
    country?: string;
    language?: string;
    maxAltitude?: string;
    suitableAge?: string;
    location?: string;
    clothesType?: string;
    arrivalLocation?: string;
    departureLocation?: string;
    startingPoint?: string;
    endingPoint?: string;
    accommodation?: string[];
    thingsToKnow?: string[];
    meal?: string;
    bestSeason?: string[];
    overview?: string;
    highlights?: WellnessHighlight[];
    itinerary?: WellnessItinerary[];
    servicesCostIncludes?: string[];
    servicesCostExcludes?: string[];
    faq?: WellnessFAQ[];
    images?: string[];
    note?: string;
    viewsCount?: number;
    isFeatured?: boolean;
    isPopular?: boolean;
    isRecommended?: boolean;
    isNewItem?: boolean;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}
