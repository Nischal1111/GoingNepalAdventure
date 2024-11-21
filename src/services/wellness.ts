import axios from "axios";

export const getAllWellness=async()=>{
    try{
        const response=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/wellness/all-wellness`)
        return response
    }catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}
export const getSingleWellness=async(id:string)=>{
    try{
        const response=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/wellness/get-wellness/${id}`)
        return response
    }catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}