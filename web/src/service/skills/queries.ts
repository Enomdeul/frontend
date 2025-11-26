import {useQuery} from "@tanstack/react-query";
import {skillsQueryKey} from "./querykey";
// import {getSkills} from "./api";

export const useSkills = () => {
  return useQuery({
    queryKey: skillsQueryKey.list(),
    queryFn: () => {
      return [
        {
          jobGroup: "PLAN",
          skills: [
            {skillId: 1, skillName: "Notion"},
            {skillId: 2, skillName: "Jira"},
            {skillId: 3, skillName: "Slack"},
            {skillId: 4, skillName: "Microsoft Word"},
            {skillId: 5, skillName: "Microsoft Excel"},
            {skillId: 6, skillName: "Microsoft Powerpoint"},
          ],
        },
        {
          jobGroup: "DESIGNER",
          skills: [
            {skillId: 7, skillName: "Figma"},
            {skillId: 8, skillName: "FigJam"},
            {skillId: 9, skillName: "Adobe Indesign"},
            {skillId: 10, skillName: "Adobe Photoshop"},
            {skillId: 11, skillName: "Adobe Premier"},
            {skillId: 12, skillName: "Adobe After Effects"},
            {skillId: 13, skillName: "Lottie"},
            {skillId: 14, skillName: "Adobe Illustrator"},
          ],
        },
        {
          jobGroup: "DEVELOPER",
          skills: [
            {skillId: 15, skillName: "iOS"},
            {skillId: 16, skillName: "Android"},
            {skillId: 17, skillName: "Flutter"},
            {skillId: 18, skillName: "JAVA"},
            {skillId: 19, skillName: "C"},
            {skillId: 20, skillName: "Spring"},
            {skillId: 21, skillName: "SpringBoot"},
            {skillId: 22, skillName: "MYSQL"},
            {skillId: 23, skillName: "AWS"},
            {skillId: 24, skillName: "MongoDB"},
            {skillId: 25, skillName: "QueryDSL"},
            {skillId: 26, skillName: "Node.js"},
            {skillId: 27, skillName: "Oracle"},
            {skillId: 28, skillName: "Docker"},
            {skillId: 29, skillName: "Jenkins"},
          ],
        },
      ];
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
