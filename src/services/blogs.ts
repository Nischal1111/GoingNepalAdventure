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

export const getSingleBlog=async(id:string)=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/get-blog-by-slug/${id}`)
        return res.data

    }catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}

export const getBlogsByViews=async()=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/all-blogs?sort=-blogViews&page=1&limit=4`)
        return res.data

    }catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}

export const searchBlogs=async(query:string)=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/all-blogs/?search=${query}`)
        return res.data
        }catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                throw new Error(err.message);
            } else {
                throw new Error("An unexpected error occurred");
            }
        }
}