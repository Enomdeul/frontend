export interface GetMyCardResponse {
    code: string;
    message: string;
    result: {
        name: string;
        age: number;
        organization: string;
        jobGroup: "PLAN" | "DESIGN" | "DEV";
        introduction: string;
        skills: Array<{
            skillId: number;
        }>;
        desiredSkills: Array<{
            skillId: number;
        }>;
    };
}

export interface ApiErrorResponse {
    code: string;
    message: string;
}

