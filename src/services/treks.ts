import axios from "axios";

export const getSingleTrek = async (id: string) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/trekking/get-trek/${id}`);
        return res;
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
};

export const getTreksSlider= async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/trekking/treks/?page=1&limit=5`);
        return res;
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
};

export const getAllTreks= async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/trekking/treks`);
        return res;
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
};
