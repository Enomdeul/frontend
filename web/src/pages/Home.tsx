import { useState } from "react";
import { Link } from "lucide-react";
import { textStyles } from "@/lib/typography";
import SmallLogo from "@/assets/image/smallLogo.svg";
import homeBackground from "@/assets/image/homeBackground.svg";
import { HomeMyCard } from "@/components/home/HomeMyCard";
import { SkillChip } from "@/components/home/SkillChip";
import { ProfileCardList } from "@/components/home/ProfileCardList";
import { useNavigate } from "react-router";
import {useIsLogin} from "@/hooks/useIsLogin";
import type { MyCardData } from "@/components/home/MyCardProfile";

type Role = "designer" | "planner" | "developer" | null;

// 스킬과 role 매핑 (나중에 API로 대체 가능)
const skillToRoleMap: Record<string, Role> = {
    "Adobe Premier": "designer",
    "JAVA": "developer",
    "Slack": "planner",
    "Jira": "planner",
    "Microsoft Word": null, // null이면 모든 role 표시
};

// 모든 프로필 데이터
const allProfiles = [
    {
        role: "planner" as const,
        name: "설정원",
        age: 24,
    },
    {
        role: "designer" as const,
        name: "이은지",
        age: 24,
    },
];

const someProfiles = [
  {
      role: "designer" as const,
      name: "민지완",
      age: 26,
  },
  {
      role: "planner" as const,
      name: "강시온",
      age: 27,
  },
];

// MyCard mockData (jobGroup은 영어 키로 - symbolMap과 일치)
const mockMyCardData: MyCardData = {
    name: "배윤서",
    age: 23,
    jobGroup: "PLAN",
    organization: "이화여자대학교 융합콘텐츠학과",
    introduction: "PM\n배윤서입니다.",
};



export function Home() {
    const navigate = useNavigate();
    const [selectedSkill1, setSelectedSkill1] = useState<string | null>(null);
    const [selectedSkill2, setSelectedSkill2] = useState<string | null>(null);
    useIsLogin();

    // 첫 번째 섹션 필터링
    const getFilteredProfiles1 = () => {
        if (!selectedSkill1) return allProfiles;
        const role = skillToRoleMap[selectedSkill1];
        if (role === null) return allProfiles;
        return allProfiles.filter((profile) => profile.role === role);
    };

    // 두 번째 섹션 필터링
    const getFilteredProfiles2 = () => {
        if (!selectedSkill2) return someProfiles;
        const role = skillToRoleMap[selectedSkill2];
        if (role === null) return someProfiles;
        return someProfiles.filter((profile) => profile.role === role);
    };

    return (
        <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
            {/* 배경 이미지 */}
            <div 
                className="absolute h-[570px] left-0 top-0 w-full bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(${homeBackground})` }}
            />
            {/* 메인 콘텐츠 */}
            <div className="flex flex-col w-full relative z-10">
                {/* 헤더 - + AS 버튼과 링크 아이콘 */}
                <div className="relative z-20 flex h-[54px] items-center justify-between px-4">
                    <div className="h-[16px] w-[45.636px]">
                        <img 
                            alt="AS Logo" 
                            src={SmallLogo}
                            className="block w-full h-full"
                        />
                    </div>
                    <button 
                      className="w-6 h-6 flex items-center justify-center"
                      onClick={() => navigate("/card/offered-list")}
                    >
                      <Link className="w-6 h-6 text-[#2A2A35]" />
                    </button>
                </div>

                {/* "My 카드" 제목과 카드 */}
                <div className="flex flex-col items-center pt-4">
                    <h1 className={`${textStyles.h3} text-[20px] text-[#2A2A35] leading-[1.5] text-center`}>
                        My 카드
                    </h1>
                    <div className="pt-6 w-full max-w-[358px]">
                        <HomeMyCard data={mockMyCardData} />
                    </div>
                </div>
                {/* 스킬 섹션들 */}
                <div className="bg-white rounded-t-[32px] mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 md:pt-10 pb-8 px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col gap-6 w-full max-w-[358px] mx-auto">
                        {/* "Add your Skills!" 섹션 */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col items-start gap-1">
                                <img 
                                    alt="" 
                                    src="https://www.figma.com/api/mcp/asset/0aa2bf1c-d934-472c-b99f-4ae8b61659be" 
                                    className="w-[10.893px] h-[10.698px]"
                                />
                                <h3 className={`${textStyles.h3} text-[20px] text-[#2A2A35]`}>
                                    Add your Skills!
                                </h3>
                            </div>
                            
                            {/* 스킬 칩들 */}
                            <div className="flex gap-3 flex-wrap">
                                <SkillChip 
                                    label="Adobe Premier" 
                                    selected={selectedSkill1 === "Adobe Premier"}
                                    onClick={() => setSelectedSkill1(selectedSkill1 === "Adobe Premier" ? null : "Adobe Premier")}
                                />
                                <SkillChip 
                                    label="JAVA" 
                                    selected={selectedSkill1 === "JAVA"}
                                    onClick={() => setSelectedSkill1(selectedSkill1 === "JAVA" ? null : "JAVA")}
                                />
                                <SkillChip 
                                    label="Slack" 
                                    selected={selectedSkill1 === "Slack"}
                                    onClick={() => setSelectedSkill1(selectedSkill1 === "Slack" ? null : "Slack")}
                                />
                            </div>

                            {/* 작은 프로필 카드들 */}
                            <ProfileCardList
                                profiles={getFilteredProfiles1()}
                                onCardClick={(profile) => {
                                    navigate(`/card/user-detail?name=${encodeURIComponent(profile.name)}&role=${encodeURIComponent(profile.role)}&age=${profile.age}`);
                                }}
                            />
                        </div>

                        {/* "Add more Skills!" 섹션 */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col items-start gap-1">
                                <img 
                                    alt="" 
                                    src="https://www.figma.com/api/mcp/asset/0aa2bf1c-d934-472c-b99f-4ae8b61659be" 
                                    className="w-[10.893px] h-[10.698px]"
                                />
                                <h3 className={`${textStyles.h3} text-[20px] text-[#2A2A35]`}>
                                    Add more Skills!
                                </h3>
                            </div>
                            
                            {/* 스킬 칩들 */}
                            <div className="flex gap-3 flex-wrap">
                                <SkillChip 
                                    label="Jira" 
                                    selected={selectedSkill2 === "Jira"}
                                    onClick={() => setSelectedSkill2(selectedSkill2 === "Jira" ? null : "Jira")}
                                />
                                <SkillChip 
                                    label="Slack" 
                                    selected={selectedSkill2 === "Slack"}
                                    onClick={() => setSelectedSkill2(selectedSkill2 === "Slack" ? null : "Slack")}
                                />
                                <SkillChip 
                                    label="Microsoft Word" 
                                    selected={selectedSkill2 === "Microsoft Word"}
                                    onClick={() => setSelectedSkill2(selectedSkill2 === "Microsoft Word" ? null : "Microsoft Word")}
                                />
                            </div>

                            {/* 작은 프로필 카드들 */}
                            <ProfileCardList
                                profiles={getFilteredProfiles2()}
                                onCardClick={(profile) => {
                                    navigate(`/card/user-detail?name=${encodeURIComponent(profile.name)}&role=${encodeURIComponent(profile.role)}&age=${profile.age}`);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  useIsLogin();
  return <div className="text-blue-600 text-h3">세상에 이런</div>;
}
