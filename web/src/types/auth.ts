export interface SignupRequest {
    loginId: string;
    password: string;
    email: string;
}

export interface SignupResponse {
    code: string;
    message: string;
    result: {
        userId: number;
        loginId: string;
        email: string;
    };
}

export interface ApiErrorResponse {
    code: string;
    message: string;
}

export interface CheckIdDuplicateResponse {
    code: string;
    message: string;
    result: {
        login_id: string;
        available: boolean;
    };
}

export interface CheckEmailDuplicateResponse {
    code: string;
    message: string;
    result: {
        email: string;
        available: boolean;
    };
}
// 나중에 로그인 타입도 추가