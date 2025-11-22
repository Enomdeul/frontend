import {textStyles} from "@/lib/typography";
import {useSkills} from "@/service/skills/queries";
import {useSkillToggle} from "./useSkillToggle";

interface SkillsSelectorProps {
  title: string;
  description: string;
  selectedSkills: number[];
  onUpdate: (selectedSkills: number[]) => void;
  maxSkills: number;
}

export function SkillsSelector({title, description, selectedSkills, onUpdate, maxSkills}: SkillsSelectorProps) {
  const {data: skills} = useSkills();
  console.log(skills);
  const {handleToggleSkill, isSkillSelected} = useSkillToggle({
    selectedSkills,
    maxSkills,
    onUpdate,
  });

  return (
    <div className="px-4 pt-8 pb-32">
      <div className="flex flex-col gap-1 mb-8">
        <h1 className={`${textStyles.h1} text-gray-800`}>{title}</h1>
        <p className={`${textStyles.body2.medium} text-gray-700`}>{description}</p>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col gap-6 flex-1">
        {skills?.map((skillGroup) => (
          <div key={skillGroup.jobGroup} className="flex flex-col gap-[10px] p-6 rounded-2xl bg-blue-50">
            <h2 className={`${textStyles.body1.bold} text-gray-900`}>{skillGroup.jobGroup} 툴</h2>
            <div className="flex gap-2 flex-wrap">
              {skillGroup.skills.map((skill) => {
                const isSelected = isSkillSelected(skill.skillId);
                return (
                  <button
                    key={skill.skillId}
                    onClick={() => handleToggleSkill(skill.skillId)}
                    className={`px-6 py-2 rounded-full ${textStyles.button.button2} transition-colors ${isSelected ? "bg-blue-100 border border-blue-600 text-blue-600" : "bg-white text-gray-700 border border-transparent"}`}
                  >
                    {skill.skillName}
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
