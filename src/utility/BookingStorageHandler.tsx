// BookingStorageHandler.ts

// Constants for storage keys
export const BOOKING_STORAGE_KEY = 'trek_tour_booking_details';

// Common interface for booking details that matches the provided structure
export interface BookingDetails {
  // Customer information
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
  
  // Adventure details
  adventureType:string|undefined
  adventureName:string|undefined
  adventureSlug:string|undefined
  adventureId:string|undefined
  
  // Booking information
  bookingDate: string;
  extraServices?: any;  // Description of extra services
  soloStandard?: any;   // Standard for solo travelers
  
  // Pricing
  price?: number;          // Base price per person
  quantity?: number;       // Number of people
  totalPrice: number;      // Total calculated price
}

// Save booking details to localStorage
export const saveBookingDetails = (details: BookingDetails): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(details));
  }
};

// Get booking details from localStorage
export const getBookingDetails = (): BookingDetails | null => {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem(BOOKING_STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : null;
  }
  return null;
};

// Clear booking details from localStorage
export const clearBookingDetails = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(BOOKING_STORAGE_KEY);
  }
};

// Helper to check if booking details exist
export const hasBookingDetails = (): boolean => {
  return getBookingDetails() !== null;
};