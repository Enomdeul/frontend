import {textStyles} from "@/lib/typography";
import {symbolMap} from "@/constants/symbol";
import { useMyCard } from "@/service/card/queries";

export interface MyCardData {
  name: string;
  age: number;
  jobGroup: string;
  organization: string;
  introduction: string;
}

interface MyCardProfileProps {
  data?: MyCardData;
  onClick?: () => void;
}

const jobGroupMap: Record<string, string> = {
    PLAN: "기획",
    DESIGN: "디자인",
    DEV: "개발",
};

export function MyCardProfile({data: propData, onClick}: MyCardProfileProps) {
  const { data: cardData, isLoading, error } = useMyCard();

  // props로 데이터가 전달되면 사용, 없으면 API에서 가져오기
  let data: MyCardData | null = null;

  if (propData) {
    data = propData;
  } else if (cardData?.result) {
    const { name, age, organization, jobGroup, introduction } = cardData.result;
    const jobGroupName = jobGroupMap[jobGroup] || jobGroup;
    
    data = {
      name,
      age,
      jobGroup: jobGroupName,
      organization,
      introduction,
    };
  }

  if (!propData) {
    if (isLoading) {
      return (
        <div className="relative w-full max-w-[358px] rounded-[24px] overflow-hidden bg-white/60">
          <div className="flex items-center justify-center h-[271px]">
            <p className={`${textStyles.body2.regular} text-[#5a5a73]`}>로딩 중...</p>
          </div>
        </div>
      );
    }

    if (error || !data) {
      return (
        <div className="relative w-full max-w-[358px] rounded-[24px] overflow-hidden bg-white/60">
          <div className="flex items-center justify-center h-[271px]">
            <p className={`${textStyles.body2.regular} text-[#5a5a73]`}>카드 정보를 불러올 수 없습니다.</p>
          </div>
        </div>
      );
    }
  }

  if (!data) return null;

  return (
    <div 
      className={`relative w-full max-w-[358px] rounded-[24px] overflow-hidden bg-white/60 border border-[#cfcfd7] shadow-sm ${onClick ? "cursor-pointer" : ""}`}
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