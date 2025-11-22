import {axiosInstance} from "../axiosInstance";

export interface CardFormData {
  name: string;
  age: number;
  organization: string;
  jobGroup: string;
  introduction: string;
  skills: number[];
  desiredSkills: number[];
}

const SKILLS_API_URI = "/skills";

export const createCard = async (cardFormData: CardFormData) => {
  try {
    const response = await axiosInstance.post<CardFormData[]>(SKILLS_API_URI, cardFormData);
    return response.data;
  } catch (error) {
    console.error("Error creating card:", error);
    throw error;
  }
};
