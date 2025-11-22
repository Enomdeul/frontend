import { useNavigate } from "react-router";
import Header from "@/components/Header";
import { MyCardComponent } from "@/components/MyCardComponent";
import myCardBg from "@/assets/image/my_card_bg.png";

export function MyCardDetail() {
    const navigate = useNavigate();

    // TODO: API에서 내 카드 데이터 가져오기
    const mockCardData = {
        name: "배윤서",
        age: 23,
        jobGroup: "기획",
        organization: "이화여자대학교 융합콘텐츠학과",
        introduction: "사용자의 관점에서 생각하고, 창의적인 아이디어를 기반으로 유저 프렌들리한 서비스를 만드는 PM\n배윤서입니다.",
        skills: [
            { skillId: 1, skillName: "Adobe Illustrator" },
            { skillId: 2, skillName: "Adobe Photoshop" },
            { skillId: 3, skillName: "Notion" },
            { skillId: 4, skillName: "Figma" },
            { skillId: 5, skillName: "Figjam" },
        ],
        desiredSkills: [
            { skillId: 6, skillName: "Adobe Premier" },
            { skillId: 7, skillName: "JAVA" },
            { skillId: 8, skillName: "Slack" },
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
            <Header
                content="MY 카드"
                onClick={() => navigate(-1)}
            />

            {/* Card Container */}
            <div className="px-4 pt-[132px] pb-8 flex justify-center">
                <MyCardComponent data={mockCardData} />
            </div>
        </div>
    );
}