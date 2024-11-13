import axios from "axios";

export const getSingleTrek = async (id: string) => {
    try {
        const res = await axios.get(`https://going-nepal-adventure-production.up.railway.app/api/v1/trekking/trek/${id}`);
        return res;
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
};
