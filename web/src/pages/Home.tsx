import { Link } from "lucide-react";
import { textStyles } from "@/lib/typography";
import SmallLogo from "@/assets/image/smallLogo.svg";
import homeBackground from "@/assets/image/homeBackground.svg";
import { MyCard } from "@/components/home/MyCard";
import { SkillChip } from "@/components/home/SkillChip";
import { ProfileCardList } from "@/components/home/ProfileCardList";

export function Home() {

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
                    <button className="w-6 h-6 flex items-center justify-center">
                        <Link className="w-6 h-6 text-[#2A2A35]" />
                    </button>
                </div>

                {/* "My 카드" 제목과 카드 */}
                <div className="flex flex-col items-center pt-4">
                    <h1 className={`${textStyles.h3} text-[20px] text-[#2A2A35] leading-[1.5] text-center`}>
                        My 카드
                    </h1>
                    <div className="pt-6 w-full max-w-[358px]">
                        <MyCard />
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
                                <SkillChip label="Adobe Premier" selected />
                                <SkillChip label="JAVA" />
                                <SkillChip label="Slack" />
                            </div>

                            {/* 작은 프로필 카드들 */}
                            <ProfileCardList
                                profiles={[
                                    {
                                        role: "designer",
                                        name: "설정원",
                                        age: 24,
                                        profileImage: "https://www.figma.com/api/mcp/asset/54cacb0c-e897-4d67-bc03-888aa2eb7873",
                                    },
                                    {
                                        role: "planner",
                                        name: "이은지",
                                        age: 24,
                                        profileImage: "https://www.figma.com/api/mcp/asset/b23b1ed8-8dd9-4a9d-9691-916c7f49dbd2",
                                    },
                                ]}
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
                                  Add your Skills!
                              </h3>
                            </div>
                            
                            {/* 스킬 칩들 */}
                            <div className="flex gap-3 flex-wrap">
                                <SkillChip label="Jira" selected />
                                <SkillChip label="Slack" />
                                <SkillChip label="Microsoft Word" />
                            </div>

                            {/* 작은 프로필 카드들 (동일) */}
                            <ProfileCardList
                                profiles={[
                                    {
                                        role: "designer",
                                        name: "설정원",
                                        age: 24,
                                        profileImage: "https://www.figma.com/api/mcp/asset/54cacb0c-e897-4d67-bc03-888aa2eb7873",
                                    },
                                    {
                                        role: "planner",
                                        name: "이은지",
                                        age: 24,
                                        profileImage: "https://www.figma.com/api/mcp/asset/b23b1ed8-8dd9-4a9d-9691-916c7f49dbd2",
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
