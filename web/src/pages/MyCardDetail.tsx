import {useNavigate} from "react-router";
import Header from "@/components/Header";
import {MyCardComponent} from "@/components/MyCardComponent";
import myCardBg from "@/assets/image/my_card_bg.png";

export function MyCardDetail() {
  const navigate = useNavigate();

  // TODO: API에서 내 카드 데이터 가져오기
  const mockCardData = {
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

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${myCardBg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <Header content="MY 카드" onClick={() => navigate(-1)} />

      {/* Card Container */}
      <div className="px-4 pt-[132px] pb-8 flex justify-center">
        <MyCardComponent data={mockCardData} />
      </div>
    </div>
  );
}
