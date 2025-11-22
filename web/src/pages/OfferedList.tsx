// 매칭 관리 페이지 (탭 있는는)
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

function MatchCard({ data, onClick }: { data: MatchCardData; onClick: () => void }) {
    return (
        <div 
            className="relative w-full max-w-[358px] rounded-[24px] overflow-hidden bg-white/60 border border-[#cfcfd7] shadow-sm cursor-pointer"
            onClick={onClick}
        >
            {/* Profile Background Image */}
            <div className="absolute left-[113.29px] top-[-66px] w-[315.12px] h-[351.84px] pointer-events-none">
                <img src={symbolMap[data.jobGroup]} alt="" className="w-auto object-contain" />
            </div>

            {/* Content Container - positioned at x: 28, y: 71, width: 302px */}
            <div className="relative z-10 flex flex-col pt-[71px] pl-[28px] pr-[28px] pb-[28px] w-full">
                {/* User Info Section - gap: 12px */}
                <div className="flex flex-col gap-3">
                    {/* Name and Job Section - gap: 8px */}
                    <div className="flex flex-col gap-2">
                        <h2 className={`${textStyles.h1} text-black`}>
                            {data.name} ({data.age})
                        </h2>
                        <p className={`${textStyles.body2.regular} text-gray-600`}>
                            {data.jobGroup} | {data.organization}
                        </p>
                    </div>

                    {/* Description Box - padding: 16px, gap: 10px, width: 273px, bg: rgba(255, 255, 255, 0.8), backdrop-blur: 12px */}
                    <div className="rounded-[20px] p-4 flex items-center justify-center bg-white/80 backdrop-blur-md gap-[10px]">
                        <p className={`${textStyles.body2.medium} text-gray-700 w-[273px] whitespace-pre-line`}>{data.introduction}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function OfferedList() {
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
            <div className="px-4 pb-8 flex flex-col gap-5 items-center">
                {matches.length > 0 ? (
                    matches.map((match, index) => (
                        <MatchCard 
                            key={index} 
                            data={match} 
                            onClick={() => navigate(`/card/offered?name=${encodeURIComponent(match.name)}`)}
                        />
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
