import { useMutation } from "@tanstack/react-query";
import { signup, checkIdDuplicate, checkEmailDuplicate } from "./api";
import type { SignupRequest } from "@/types/auth";

export const useSignup = () => {
    return useMutation({
        mutationFn: (data: SignupRequest) => signup(data),
        onError: (error) => {
            console.error("Error signing up:", error);
        },
    });
};

export const useCheckIdDuplicate = () => {
    return useMutation({
        mutationFn: (loginId: string) => checkIdDuplicate(loginId),
        onError: (error) => {
            console.error("Error checking ID duplicate:", error);
        },
    });
};

export const useCheckEmailDuplicate = () => {
    return useMutation({
        mutationFn: (email: string) => checkEmailDuplicate(email),
        onError: (error) => {
            console.error("Error checking Email duplicate:", error);
        },
    });
};

