import {useQuery} from "@tanstack/react-query";
import {myCardQueryKey} from "./querykey";
import {getMyCard} from "./api";

export const useMyCard = () => {
  return useQuery({
    queryKey: myCardQueryKey.myCard,
    queryFn: () => getMyCard(),
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
