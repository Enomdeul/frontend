import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "@/components/Header";
import { textStyles } from "@/lib/typography";
import { symbolMap } from "@/constants/symbol";

interface MatchCardData {
    name: string;
    age: number;
    jobGroup: string;
    organization: string;
    introduction: string;
}

// 임시 데이터 (나중에 API로 대체)
const mockReceivedMatches: MatchCardData[] = [
    {
        name: "김윤서",
        age: 23,
        jobGroup: "기획",
        organization: "이화여자대학교 융합콘텐츠학과",
        introduction: "사용자의 관점에서 생각하고, 창의적인 아이디어를 기반으로 유저 프렌들리한 서비스를 만드는 PM\n배윤서입니다.",
    },
    {
        name: "이은서",
        age: 23,
        jobGroup: "디자인",
        organization: "이화여자대학교 융합콘텐츠학과",
        introduction: "사용자의 관점에서 생각하고, 창의적인 아이디어를 기반으로 유저 프렌들리한 서비스를 만드는\n디자이너 이은서입니다.",
    },
    {
        name: "임수정",
        age: 23,
        jobGroup: "개발",
        organization: "이화여자대학교 융합콘텐츠학과",
        introduction: "사용자의 관점에서 생각하고, 창의적인 아이디어를 기반으로 유저 프렌들리한 서비스를 만드는 개발자\n임수정입니다.",
    },
];

const mockSentMatches: MatchCardData[] = [
    // 나중에 API로 대체
];

function MatchCard({ data }: { data: MatchCardData }) {
    const symbolImage = symbolMap[data.jobGroup] || symbolMap["기획"];

    // 직군별 배경 이미지 위치 및 스타일
    const jobGroupStyles: Record<string, { container: string; imageWrapper: string }> = {
        기획: {
            container: "absolute flex h-[351.836px] items-center justify-center left-[113.29px] top-[-66px] w-[315.123px]",
            imageWrapper: "flex-none rotate-[189.973deg] scale-y-[-100%]",
        },
        디자인: {
            container: "absolute flex items-center justify-center left-[89.7px] size-[368.785px] top-[-74px]",
            imageWrapper: "flex-none rotate-[193.41deg] scale-y-[-100%]",
        },
        개발: {
            container: "absolute flex h-[378.874px] items-center justify-center left-[110.09px] top-[-66.84px] w-[324.677px]",
            imageWrapper: "flex-none rotate-[300.323deg]",
        },
    };

    const styles = jobGroupStyles[data.jobGroup] || jobGroupStyles["기획"];

    return (
        <div className="bg-[rgba(255,255,255,0.6)] border border-[#cfcfd7] h-[271px] relative rounded-[24px] w-full">
            <div className="h-[271px] overflow-hidden relative rounded-[inherit] w-full">
                {/* 배경 이미지 */}
                <div className={styles.container}>
                    <div className={styles.imageWrapper}>
                        <div className="relative w-full h-full">
                            <img
                                src={symbolImage}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            />
                        </div>
                    </div>
                </div>

                {/* 콘텐츠 */}
                <div className="absolute flex flex-col gap-5 items-start left-[28px] top-[71px] w-[302px]">
                    <div className="flex flex-col gap-3 items-start w-full">
                        {/* 이름과 직군 정보 */}
                        <div className="flex flex-col gap-2 items-start leading-[1.5] w-full">
                            <h2 className={`${textStyles.h1} text-[24px] text-black whitespace-pre-wrap`}>
                                {data.name} ({data.age})
                            </h2>
                            <p className={`${textStyles.body2.regular} text-[14px] text-[#5a5a73]`}>
                                {data.jobGroup === "기획" ? "기획자" : data.jobGroup === "디자인" ? "디자이너" : "개발자"} | {data.organization}
                            </p>
                        </div>

                        {/* 소개 박스 */}
                        <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] flex gap-[10px] items-center justify-center p-4 rounded-[20px] w-full">
                            <p className={`${textStyles.body2.medium} leading-[1.5] text-[14px] text-[#464659] w-[273px] whitespace-pre-wrap`}>
                                {data.introduction}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function MyCardDetail() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<"received" | "sent">("received");

    const matches = activeTab === "received" ? mockReceivedMatches : mockSentMatches;

    return (
        <div className="bg-white relative w-full min-h-screen flex flex-col">
            {/* Header */}
            <Header
                content="매칭 관리"
                onClick={() => navigate(-1)}
            />

            {/* TabBar */}
            <div className="px-4 pt-6 pb-4">
                <div className="bg-[#efeff2] rounded-[12px] p-[6px] flex gap-[10px]">
                    <button
                        onClick={() => setActiveTab("received")}
                        className={`flex-1 flex flex-col gap-1 items-center justify-center px-4 py-2 rounded-[8px] transition-colors ${
                            activeTab === "received"
                                ? "bg-[#668cff]"
                                : "bg-transparent"
                        }`}
                    >
                        <div className={`flex flex-col items-center leading-[1.5] text-center ${
                            activeTab === "received" ? "text-white" : "text-[#9696a9]"
                        }`}>
                            <p className={`${textStyles.caption.semibold} text-[12px]`}>
                                AS <span className="font-['Pretendard:Regular',sans-serif]">a Mentor</span>
                            </p>
                            <p className={`${textStyles.body2.semibold} text-[14px]`}>
                                제안 받은 매칭
                            </p>
                        </div>
                    </button>
                    <button
                        onClick={() => setActiveTab("sent")}
                        className={`flex-1 flex flex-col gap-1 items-center justify-center px-4 py-2 rounded-[8px] transition-colors ${
                            activeTab === "sent"
                                ? "bg-[#668cff]"
                                : "bg-transparent"
                        }`}
                    >
                        <div className={`flex flex-col items-center leading-[1.5] text-center ${
                            activeTab === "sent" ? "text-white" : "text-[#9696a9]"
                        }`}>
                            <p className={`${textStyles.caption.semibold} text-[12px]`}>
                                AS <span className="font-['Pretendard:Regular',sans-serif]">a Mentee</span>
                            </p>
                            <p className={`${textStyles.body2.semibold} text-[14px]`}>
                                제안 보낸 매칭
                            </p>
                        </div>
                    </button>
                </div>
            </div>

            {/* 카드 리스트 */}
            <div className="px-4 pb-8 flex flex-col gap-5">
                {matches.length > 0 ? (
                    matches.map((match, index) => (
                        <MatchCard key={index} data={match} />
                    ))
                ) : (
                    <div className="flex items-center justify-center py-12">
                        <p className={`${textStyles.body2.regular} text-[#5a5a73]`}>
                            {activeTab === "received" ? "제안 받은 매칭이 없습니다." : "제안 보낸 매칭이 없습니다."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
