import {useCallback} from "react";

interface UseSkillToggleProps {
  selectedSkills: number[];
  maxSkills: number;
  onUpdate: (selectedSkills: number[]) => void;
}

export function useSkillToggle({selectedSkills, maxSkills, onUpdate}: UseSkillToggleProps) {
  console.log(selectedSkills);
  const handleToggleSkill = useCallback(
    (skillId: number) => {
      const isSelected = selectedSkills.includes(skillId);

      if (isSelected) {
        // 선택 해제
        onUpdate(selectedSkills.filter((id) => id !== skillId));
      } else {
        // 선택 추가 (최대 개수까지만)
        if (selectedSkills.length < maxSkills) {
          onUpdate([...selectedSkills, skillId]);
        }
      }
    },
    [selectedSkills, maxSkills, onUpdate]
  );

  const isSkillSelected = useCallback(
    (skillId: number) => {
      return selectedSkills.includes(skillId);
    },
    [selectedSkills]
  );

  return {
    handleToggleSkill,
    isSkillSelected,
  };
}
