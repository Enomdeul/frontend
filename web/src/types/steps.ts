export interface Step1Data {
  name: string;
  age: string;
  gender: string;
  school: string;
  job: string;
}

export interface SelectedSkill {
  selectedSkills: number[];
}
export type Step2Data = SelectedSkill;
export type Step3Data = SelectedSkill;
