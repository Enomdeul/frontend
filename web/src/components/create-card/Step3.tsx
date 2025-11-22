import {SkillsSelector} from "./SkillsSelector";
import type {Step3Data} from "@/types/steps";
interface Step3Props {
  data: Step3Data;
  setData: (data: Step3Data) => void;
}

export function Step3({data, setData}: Step3Props) {
  const {selectedSkills} = data;

  const MAX_SKILLS = 5;

  const handleUpdate = (updatedSkills: number[]) => {
    setData({
      selectedSkills: updatedSkills,
    });
  };

  return <SkillsSelector title="더하고 싶은 스킬을 선택해주세요." description="스킬은 총 5개까지 선택할 수 있어요." selectedSkills={selectedSkills} onUpdate={handleUpdate} maxSkills={MAX_SKILLS} />;
}
