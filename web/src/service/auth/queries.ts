import { useMutation } from "@tanstack/react-query";
import { signup, checkIdDuplicate, checkEmailDuplicate, login } from "./api";
import type { LoginRequest, SignupRequest } from "@/types/auth";

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

export const useLogin = () => {
    return useMutation({
        mutationFn: (data: LoginRequest) => login(data),
        onError: (error) => {
            console.error("Error logining up:", error);
        },
    });
};

