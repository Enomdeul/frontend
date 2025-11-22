import {textStyles} from "@/lib/typography";
import {useSkills} from "@/service/skills/queries";

interface Step2Data {
  selectedSkills: number[];
}

interface Step2Props {
  data: Step2Data;
  setData: (data: Step2Data) => void;
}

export function Step2({data, setData}: Step2Props) {
  const {data: skills} = useSkills();
  const {selectedSkills} = data;
  const MAX_SKILLS = 10;

  const handleToggleSkill = (skillId: number) => {
    const isSelected = selectedSkills.includes(skillId);

    if (isSelected) {
      // 선택 해제
      setData({
        selectedSkills: selectedSkills.filter((id) => id !== skillId),
      });
    } else {
      // 선택 추가 (최대 10개까지만)
      if (selectedSkills.length < MAX_SKILLS) {
        setData({
          selectedSkills: [...selectedSkills, skillId],
        });
      }
    }
  };

  const isSkillSelected = (skillId: number) => {
    return selectedSkills.includes(skillId);
  };

  return (
    <div className="px-4 pt-8 pb-32">
      <div className="flex flex-col gap-1 mb-8">
        <h1 className={`${textStyles.h1} text-gray-800`}>나의 스킬을 선택해주세요.</h1>
        <p className={`${textStyles.body2.medium} text-gray-700`}>스킬은 총 10개까지 선택할 수 있어요.</p>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col gap-6 flex-1">
        {skills?.map((skillGroup) => (
          <div key={skillGroup.jobGroup} className="flex flex-col gap-[10px] p-6 rounded-2xl bg-blue-50">
            <h2 className={`${textStyles.body1.bold} text-gray-900`}>{skillGroup.jobGroup} 툴</h2>
            <div className="flex gap-2 flex-wrap">
              {skillGroup.skills.map((skill) => {
                const isSelected = isSkillSelected(skill.skill_id);
                return (
                  <button
                    key={skill.skill_id}
                    onClick={() => handleToggleSkill(skill.skill_id)}
                    className={`px-6 py-2 rounded-full ${textStyles.button.button2} transition-colors ${isSelected ? "bg-blue-100 border border-blue-600 text-blue-600" : "bg-white text-gray-700 border border-transparent"}`}
                  >
                    {skill.skill_name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
