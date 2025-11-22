import {axiosInstance} from "../axiosInstance";

export interface MyCard {
  name: string;
  age: number;
  jobGroup: string;
  organization: string;
  introduction: string;
  skills: {skillId: number}[];
  desiredSkills: {skillId: number}[];
}

const MY_CARD_API_URI = "/cards/me";

export const getMyCard = async () => {
  try {
    const response = await axiosInstance.get<MyCard>(MY_CARD_API_URI);
    return response;
  } catch (error) {
    console.error("Error fetching my card:", error);
    throw error;
  }
};
