import axios from "axios"

export const checkout = async (data:any) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/booking/create`,data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}