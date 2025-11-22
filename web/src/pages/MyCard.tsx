import {useNavigate} from "react-router";
import {MyCardComponent} from "@/components/MyCardComponent";
import myCardBg from "@/assets/image/my_card_bg.png";
import Button from "@/components/Button";
import {textStyles} from "@/lib/typography";

export function MyCard() {
  const navigate = useNavigate();

  const mockCardData = {
    name: "배윤서",
    age: 23,
    jobGroup: "개발",
    organization: "이화여자대학교 융합콘텐츠학과",
    introduction: "사용자의 관점에서 생각하고, 창의적인 아이디어를 기반으로 유저 프렌들리한 서비스를 만드는 PM 배윤서입니다.",
    skills: [
      {
        skillId: 1,
        skillName: "Adobe Illustrator",
      },
      {
        skillId: 2,
        skillName: "Adobe Photoshop",
      },
      {
        skillId: 3,
        skillName: "Notion",
      },
      {
        skillId: 4,
        skillName: "Figma",
      },
      {
        skillId: 5,
        skillName: "Figjam",
      },
    ],
    desiredSkills: [
      {
        skillId: 6,
        skillName: "Adobe Premier",
      },
      {
        skillId: 7,
        skillName: "JAVA",
      },
      {
        skillId: 8,
        skillName: "Slack",
      },
    ],
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen relative" style={{backgroundImage: `url(${myCardBg})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
      <p className={`${textStyles.subtitle.semibold} !text-[24px] leading-[1.5em] text-center text-[#2A2A35] pt-8`}>
        MY 카드가 <br />
        완성되었어요!
      </p>

      {/* Card Container */}
      <div className="px-4 pt-5 pb-8 flex justify-center">
        <MyCardComponent data={mockCardData} />
      </div>
      <div className="px-4 pb-5 pt-4">
        <Button variant="primary" style={{width: "100%"}} onClick={handleBack} text="다른 유저 카드 보러가기" />
      </div>
    </div>
  );
}
