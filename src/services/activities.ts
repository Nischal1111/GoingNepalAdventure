import axios from "axios"

export const getAllActivitys = async () => {
    try{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/activities/get-activities`)
        return res.data
    }catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
    
}
export const getActivitybySlug = async (id:string) => {
    try{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/activities/get-activity-by-slug/${id}`)
        return res.data
    }catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
    
}
