import {axiosInstance} from "../axiosInstance";

export interface SkillGroup {
  jobGroup: string;
  skills: {
    skill_id: number;
    skill_name: string;
  };
}

const SKILLS_API_URI = "/skills";

export const getSkills = async () => {
  try {
    const response = await axiosInstance.get<SkillGroup[]>(SKILLS_API_URI);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};
