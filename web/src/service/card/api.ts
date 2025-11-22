import { authAxiosInstance } from "../axiosInstance";
import type { GetMyCardResponse } from "@/types/card";

const CARD_API_URI = "/api/v1/cards";

export const getMyCard = async (): Promise<GetMyCardResponse> => {
    try {
        const response = await authAxiosInstance.get<GetMyCardResponse>(
            `${CARD_API_URI}/me`
        );
        return response.data;
    } catch (error) {
        console.error("Error getting my card:", error);
        throw error;
    }
};

