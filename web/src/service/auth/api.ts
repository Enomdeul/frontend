import { authAxiosInstance } from "../axiosInstance";
import type { SignupRequest, SignupResponse, CheckIdDuplicateResponse, CheckEmailDuplicateResponse } from "@/types/auth";

const AUTH_API_URI = "/api/v1/auth";

export const signup = async (data: SignupRequest): Promise<SignupResponse> => {
    try {
        const response = await authAxiosInstance.post<SignupResponse>(
            `${AUTH_API_URI}/signup`,
            data
        );
        return response.data;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
};

export const checkIdDuplicate = async (loginId: string): Promise<CheckIdDuplicateResponse> => {
    try {
        const response = await authAxiosInstance.get<CheckIdDuplicateResponse>(
            `${AUTH_API_URI}/check-id`,
            { params: { loginId } }
        );
        return response.data;
    } catch (error) {
        console.error("Error checking ID duplicate:", error);
        throw error;
    }
};

export const checkEmailDuplicate = async (email: string): Promise<CheckEmailDuplicateResponse> => {
    try {
        const response = await authAxiosInstance.get<CheckEmailDuplicateResponse>(
            `${AUTH_API_URI}/check-email`,
            { params: { email } }
        );
        return response.data;
    } catch (error) {
        console.error("Error checking email duplicate:", error);
        throw error;
    }
};

