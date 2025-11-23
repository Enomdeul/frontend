// 내 카드 생성 완료 페이지

import {useNavigate, useLocation} from "react-router";
import {MyCardComponent} from "@/components/MyCardComponent";
import myCardBg from "@/assets/image/my_card_bg.png";
import Button from "@/components/Button";
import {textStyles} from "@/lib/typography";
import {useMyCard} from "@/service/my-card/queries";
import type {MyCardData} from "@/components/MyCardComponent";
import {useIsLogin} from "@/hooks/useIsLogin";
import {useSkills} from "@/service/skills/queries";

export function MyCard() {
  useIsLogin();
  const navigate = useNavigate();
  const location = useLocation();

  // location.state에서 전달된 카드 데이터 확인
  const stateCardData = location.state?.cardData as MyCardData | undefined;
  const {data: apiCardData, isFetching} = useMyCard();
  const {data: skillsData} = useSkills();

  // API 데이터를 정규화: jobGroup을 한국어로 변환하고 스킬 이름 추가
  const normalizeApiData = (data: any): MyCardData | undefined => {
    if (!data) return undefined;

    // 스킬 이름 매핑 함수
    const getSkillName = (skillId: number): string => {
      if (!skillsData) return "";
      for (const skillGroup of skillsData) {
        const skill = skillGroup.skills.find((s) => s.skillId === skillId);
        if (skill) return skill.skillName;
      }
      return "";
    };

    return {
      name: data.name,
      age: data.age,
      jobGroup: data.jobGroup, // 영어 키 그대로 전달 (MyCardComponent에서 한글로 변환)
      organization: data.organization,
      introduction: data.introduction,
      skills: (data.skills || []).map((skill: any) => ({
        skillId: skill.skillId || skill.skill_id,
        skillName: skill.skillName || getSkillName(skill.skillId || skill.skill_id),
      })),
      desiredSkills: (data.desiredSkills || []).map((skill: any) => ({
        skillId: skill.skillId || skill.skill_id,
        skillName: skill.skillName || getSkillName(skill.skillId || skill.skill_id),
      })),
    };
  };

  // state에서 전달된 데이터가 있으면 우선 사용, 없으면 정규화된 API 데이터 사용
  const cardData = stateCardData || normalizeApiData(apiCardData);

  // const mockCardData = {
  //   name: "배윤서",
  //   age: 23,
  //   jobGroup: "개발",
  //   organization: "이화여자대학교 융합콘텐츠학과",
  //   introduction: "사용자의 관점에서 생각하고, 창의적인 아이디어를 기반으로 유저 프렌들리한 서비스를 만드는 PM 배윤서입니다.",
  //   skills: [
  //     {
  //       skillId: 1,
  //       skillName: "Adobe Illustrator",
  //     },
  //     {
  //       skillId: 2,
  //       skillName: "Adobe Photoshop",
  //     },
  //     {
  //       skillId: 3,
  //       skillName: "Notion",
  //     },
  //     {
  //       skillId: 4,
  //       skillName: "Figma",
  //     },
  //     {
  //       skillId: 5,
  //       skillName: "Figjam",
  //     },
  //   ],
  //   desiredSkills: [
  //     {
  //       skillId: 6,
  //       skillName: "Adobe Premier",
  //     },
  //     {
  //       skillId: 7,
  //       skillName: "JAVA",
  //     },
  //     {
  //       skillId: 8,
  //       skillName: "Slack",
  //     },
  //   ],
  // };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen relative" style={{backgroundImage: `url(${myCardBg})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
      <p className={`${textStyles.subtitle.semibold} !text-[24px] leading-[1.5em] text-center text-[#2A2A35] pt-8`}>
        MY 카드가 <br />
        완성되었어요!
      </p>

      {/* Card Container */}
      <div className="px-4 pt-5 pb-8 flex justify-center">{isFetching ? <div className="min-h-[300px]"></div> : <MyCardComponent data={cardData as any} />}</div>
      <div className="px-4 pb-5 pt-4">
        <Button variant="primary" style={{width: "100%"}} onClick={handleBack} text="다른 유저 카드 보러가기" />
      </div>
    </div>
  );
}
