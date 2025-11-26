import {useQuery} from "@tanstack/react-query";
import {myCardQueryKey} from "./querykey";
// import {getMyCard} from "./api";

export const useMyCard = () => {
  return useQuery({
    queryKey: myCardQueryKey.myCard,
    // queryFn: () => getMyCard(),
    queryFn: () => {
      return {
        name: "윤서영",
        age: 22,
        jobGroup: "Designer",
        organization: "너디대학교 국어국문학과",
        introduction: "UI/UX 역량을 키우고 싶은 디자이너 윤서영입니다.",
        skills: [
          {skillId: 1, skillName: "Notion"},
          {skillId: 2, skillName: "Jira"},
          {skillId: 3, skillName: "Slack"},
          {skillId: 6, skillName: "Microsoft Powerpoint"},
          {skillId: 9, skillName: "Adobe Indesign"},
          {skillId: 10, skillName: "Adobe Photoshop"},
          {skillId: 11, skillName: "Adobe Premier"},
          {skillId: 12, skillName: "Adobe After Effects"},
          {skillId: 14, skillName: "Adobe Illustrator"},
        ],
        desiredSkills: [
          {skillId: 7, skillName: "Figma"},
          {skillId: 8, skillName: "FigJam"},
          {skillId: 13, skillName: "Lottie"},
        ],
      };
    },
    // select: (data: any) =>
    //   data.map((item: any) => ({
    //     jobGroup: jobGroupMap[item.jobGroup],
    //     skills: item.skills.map((skill: any) => ({
    //       skillId: skill.skillId,
    //       skillName: skill.skillName,
    //     })),
    //   })),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
