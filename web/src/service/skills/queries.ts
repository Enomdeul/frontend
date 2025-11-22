import {useQuery} from "@tanstack/react-query";
import {skillsQueryKey} from "./querykey";
import {getSkills} from "./api";
import {jobGroupMap} from "@/constants/jobGroup";

export const useSkills = () => {
  return useQuery({
    queryKey: skillsQueryKey.list(),
    queryFn: () => getSkills(),
    select: (data: any) =>
      data.map((item: any) => ({
        jobGroup: jobGroupMap[item.jobGroup],
        skills: item.skills.map((skill: any) => ({
          skillId: skill.skillId,
          skillName: skill.skillName,
        })),
      })),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
