import axios from "axios"

export const getSearchResults = async (query: string|null) => {
    try{
        const res= await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/home/search?search=${query}`)
            return res.data
    }catch (error) {
            console.error(error)
        }
    }