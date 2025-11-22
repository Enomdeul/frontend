import {textStyles} from "@/lib/typography";
import {type SkillGroup} from "@/types/skills";

export function Skills({skills}: {skills: SkillGroup[]}) {
  return (
    <div className="flex flex-col gap-6">
      {skills.map((skill) => (
        <div key={skill.jobGroup} className="flex flex-col gap-[10px] p-6 rounded-2xl bg-blue-50">
          <h2 className={`${textStyles.body1.bold} text-gray-900`}>{skill.jobGroup} 툴</h2>
          <div className="flex gap-2 flex-wrap">
            {skill.skills.map((skill: {skill_id: number; skill_name: string}) => (
              <button key={skill.skill_id} className={`px-6 py-2 rounded-full ${textStyles.button.button2} bg-blue-100 border border-blue-600 text-blue-600`}>
                {skill.skill_name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
