import axios from "axios"

export const getAllTours=async()=>{
    try {
        const response=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/tours`)
        return response
        } catch (error) {
            console.error(error)
        }
}
export const getToursByCountry=async(params:string,page:number,limit:number)=>{
    try {
        const response=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/tours/?country=${params}&page=${page}&limit=${limit}`)
        return response
        } catch (error) {
            console.error(error)
        }
}
export const getToursByCountryNoLimit=async(params:string)=>{
    try {
        const response=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/tours/?country=${params}`)
        return response
        } catch (error) {
            console.error(error)
        }
}
export const getSingleTour=async(id:string)=>{
    try {
        const response=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/get-tour/${id}`)
        return response
        } catch (error) {
            console.error(error)
        }
}

export const excludeTour=async(id:string)=>{
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/tours?excludeId=${id}&page=1&limit=4`);
        return res.data;
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}