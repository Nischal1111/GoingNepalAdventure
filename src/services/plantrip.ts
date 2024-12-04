import axios from "axios";
export const sendPlanTrip=async(data:any)=>{ //eslint-disable-line @typescript-eslint/no-explicit-any
    try{
        const res=await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/plan-trip/create-request`,data)
        return res.data;

    }catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}