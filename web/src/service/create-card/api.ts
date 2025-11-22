import {axiosInstance} from "../axiosInstance";

export interface CardFormData {
  name: string;
  age: number;
  organization: string;
  jobGroup: string;
  introduction: string;
  skills: {skillId: number}[];
  desiredSkills: {skillId: number}[];
  gender: string;
}

const CARD_API_URI = "/cards";

export const createCard = async (cardFormData: CardFormData) => {
  try {
    const response = await axiosInstance.post<CardFormData[]>(CARD_API_URI, cardFormData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating card:", error);
    throw error;
  }
};
