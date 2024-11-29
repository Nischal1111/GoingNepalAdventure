import axios from "axios";

export const getAllBlogs=async()=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/all-blogs`)
        return res.data

    }catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}