import {useQuery} from "@tanstack/react-query";
import {skillsQueryKey} from "./querykey";
// import {getSkills, type SkillGroup} from "./api";

export const useSkills = () => {
  return useQuery({
    queryKey: skillsQueryKey.list(),
    // queryFn: () => getSkills(),
    queryFn: () => {
      return Promise.resolve([
        {
          jobGroup: "기획",
          skills: [
            {skill_id: 1, skill_name: "Notion"},
            {skill_id: 2, skill_name: "Jira"},
            {skill_id: 3, skill_name: "Slack"},
          ],
        },
        {
          jobGroup: "디자인",
          skills: [
            {skill_id: 4, skill_name: "Figma"},
            {skill_id: 5, skill_name: "Jira"},
            {skill_id: 6, skill_name: "Photoshop"},
            {skill_id: 7, skill_name: "Illustrator"},
            {skill_id: 8, skill_name: "InDesign"},
            {skill_id: 9, skill_name: "Premiere Pro"},
            {skill_id: 10, skill_name: "After Effects"},
            {skill_id: 11, skill_name: "Lightroom"},
            {skill_id: 12, skill_name: "Audition"},
          ],
        },
        {
          jobGroup: "개발   ",
          skills: [
            {skill_id: 13, skill_name: "Figma"},
            {skill_id: 14, skill_name: "Jira"},
            {skill_id: 15, skill_name: "Slack"},
            {skill_id: 16, skill_name: "Photoshop"},
            {skill_id: 17, skill_name: "Illustrator"},
            {skill_id: 18, skill_name: "InDesign"},
            {skill_id: 19, skill_name: "Premiere Pro"},
            {skill_id: 20, skill_name: "After Effects"},
            {skill_id: 21, skill_name: "Lightroom"},
            {skill_id: 22, skill_name: "Audition"},
          ],
        },
      ]);
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
