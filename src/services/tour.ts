import axios from "axios"

export const getAllTours=async()=>{
    try {
        const response=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/tours`)
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