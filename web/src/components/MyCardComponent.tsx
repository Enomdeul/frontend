import {textStyles} from "@/lib/typography";
import {symbolMap} from "@/constants/symbol";
import {jobGroupMap} from "@/constants/jobGroup";

export interface MyCardData {
  name: string;
  age: number;
  jobGroup: string;
  organization: string;
  introduction: string;
  skills: {
    skillId: number;
    skillName: string;
  }[];
  desiredSkills: {
    skillId: number;
    skillName: string;
  }[];
}

interface MyCardComponentProps {
  data: MyCardData;
}

export function MyCardComponent({data}: MyCardComponentProps) {
  console.log(data);
  // Map skill IDs to skill names
  const getSkillNames = (skills: {skillId: number; skillName: string}[]): string[] => {
    if (!skills) return [];
    const allSkills = skills.map((skill) => skill.skillName);
    return allSkills.filter((name): name is string => name !== undefined);
  };

  const skillNames = getSkillNames(data.skills);
  const desiredSkillNames = getSkillNames(data.desiredSkills);

  // Split skills into rows based on Figma layout (first row: 2 items, second row: 3 items)
  const firstRowSkills = skillNames.slice(0, 2);
  const secondRowSkills = skillNames.slice(2);

  return (
    <div className="relative w-full max-w-[358px] rounded-[24px] overflow-hidden bg-white/60">
      {/* Profile Background Image */}
      <div className="absolute left-[113.29px] top-[-66px] w-[315.12px] h-[351.84px] pointer-events-none">
        <img src={symbolMap[data.jobGroup]} alt="" className="w-auto object-contain" />
      </div>

      {/* Content Container - positioned at x: 28, y: 71, width: 302px */}
      <div className="relative z-10 flex flex-col pt-[71px] pl-[28px] pr-[28px] pb-[28px] w-full gap-5">
        {/* User Info Section - gap: 12px */}
        <div className="flex flex-col gap-3">
          {/* Name and Job Section - gap: 8px */}
          <div className="flex flex-col gap-2">
            <h2 className={`${textStyles.h1} text-black`}>
              {data.name} ({data.age})
            </h2>
            <p className={`${textStyles.body2.regular} text-gray-600`}>
              {jobGroupMap[data.jobGroup]} | {data.organization}
            </p>
          </div>

          {/* Description Box - padding: 16px, gap: 10px, width: 273px, bg: rgba(255, 255, 255, 0.8), backdrop-blur: 12px */}
          <div className="rounded-[20px] p-4 flex items-center justify-center bg-white/80 backdrop-blur-md gap-[10px]">
            <p className={`${textStyles.body2.medium} text-gray-700 w-[273px] whitespace-pre-line`}>{data.introduction}</p>
          </div>
        </div>

        {/* Skills Section - gap: 20px */}
        <div className="flex flex-col gap-5">
          {/* 나의 스킬 Section - gap: 12px */}
          <div className="flex flex-col gap-3">
            <h3 className={`${textStyles.body1.semibold} text-gray-900`}>나의 스킬</h3>
            {/* Skills Container - gap: 9px (vertical) */}
            <div className="flex flex-col gap-[9px]">
              {/* First row of skills - gap: 8px (horizontal) */}
              {firstRowSkills.length > 0 && (
                <div className="flex items-center gap-2">
                  {firstRowSkills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-center rounded-[25.6px] bg-white/24 px-3 py-2 gap-1">
                      <span className={`${textStyles.caption.medium} text-[#668CFF]`}>{skill}</span>
                    </div>
                  ))}
                </div>
              )}
              {/* Second row of skills - gap: 8px (horizontal) */}
              {secondRowSkills.length > 0 && (
                <div className="flex items-center gap-2">
                  {secondRowSkills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-center rounded-[25.6px] bg-white/24 px-3 py-2 gap-1">
                      <span className={`${textStyles.caption.medium} text-[#668CFF]`}>{skill}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 더하고 싶은 스킬 Section - gap: 12px */}
          <div className="flex flex-col gap-3">
            <h3 className={`${textStyles.body1.semibold} text-gray-900`}>더하고 싶은 스킬</h3>
            {/* Desired Skills Container - gap: 8px (horizontal) */}
            <div className="flex items-center gap-2">
              {desiredSkillNames.map((skill, index) => (
                <div key={index} className="flex items-center justify-center rounded-[25.6px] bg-[rgba(102,140,255,0.18)] px-3 py-2 gap-1">
                  <span className={`${textStyles.caption.medium} text-[#668CFF]`}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
