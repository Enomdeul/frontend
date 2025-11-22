import {SkillsSelector} from "./SkillsSelector";
import type {Step2Data} from "@/types/steps";

interface Step2Props {
  data: Step2Data;
  setData: (data: Step2Data) => void;
}

export function Step2({data, setData}: Step2Props) {
  const {selectedSkills} = data;
  const MAX_SKILLS = 10;

  const handleUpdate = (updatedSkills: number[]) => {
    setData({
      selectedSkills: updatedSkills,
    });
  };

  return <SkillsSelector title="나의 스킬을 선택해주세요." description="스킬은 총 10개까지 선택할 수 있어요." selectedSkills={selectedSkills} onUpdate={handleUpdate} maxSkills={MAX_SKILLS} />;
}
