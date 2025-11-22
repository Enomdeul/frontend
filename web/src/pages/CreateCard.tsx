import {useState} from "react";
import Header from "@/components/Header";
import {Step2} from "@/components/create-card/Step2";
import {Step3} from "@/components/create-card/Step3";
import {Step4} from "@/components/create-card/Step4";
import {initialStepData} from "@/constants/steps";
import {Step1} from "@/components/create-card/Step1";
import Button from "@/components/Button";
import type {Step1Data, Step2Data, Step3Data, Step4Data} from "@/types/steps";
import type {CardFormData} from "@/service/create-card/api";
import {useCreateCard} from "@/service/create-card/queries";
import {useNavigate} from "react-router";
import {jobGroupIds} from "@/constants/jobGroup";

interface ProgressBarProps {
  currentStep: number;
}

function ProgressBar({currentStep}: ProgressBarProps) {
  const progressBarClasses = {
    active: "w-6 bg-[#2A2A35]",
    inactive: "bg-[#CFCFD7]",
  };

  return (
    <div className="flex-1 flex items-center gap-[89px] px-3">
      <div className="flex items-center gap-3 flex-1">
        <div className={`w-2 h-2 rounded-full ${progressBarClasses[currentStep === 1 ? "active" : "inactive"]}`}></div>
        <div className={`w-2 h-2 rounded-full ${progressBarClasses[currentStep === 2 ? "active" : "inactive"]}`}></div>
        <div className={`w-2 h-2 rounded-full ${progressBarClasses[currentStep === 3 ? "active" : "inactive"]}`}></div>
        <div className={`w-2 h-2 rounded-full ${progressBarClasses[currentStep === 4 ? "active" : "inactive"]}`}></div>
      </div>
    </div>
  );
}

export function CreateCard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1, setStep1] = useState<Step1Data>({
    ...initialStepData.step1,
  });
  const [step2, setStep2] = useState<Step2Data>(initialStepData.step2);
  const [step3, setStep3] = useState<Step3Data>(initialStepData.step3);
  const [step4, setStep4] = useState<Step4Data>(initialStepData.step4);

  const {mutate: createCard} = useCreateCard();
  const navigate = useNavigate();
  const handleChangeStep = () => {
    if (currentStep === 4) {
      // TODO: API 연결
      const cardFormData: CardFormData = {
        name: step1.name,
        age: parseInt(step1.age),
        gender: step1.gender,
        organization: step1.school,
        jobGroup: jobGroupIds[step1.job],
        introduction: step4.introduction,
        skills: step2.selectedSkills.map((skillId) => ({skillId})),
        desiredSkills: step3.selectedSkills.map((skillId) => ({skillId})),
      };

      createCard(cardFormData);
      console.log("완료");
      navigate("/card/my");
      return;
    }

    setCurrentStep(currentStep + 1);
  };

  const handleClickPrev = () => {
    if (currentStep === 1) {
      navigate("/");
      return;
    }

    switch (currentStep) {
      case 1:
        setStep1(initialStepData.step1);
        break;
      case 2:
        setStep2(initialStepData.step2);
        break;
      case 3:
        setStep2(step2);
        break;
      case 4:
        setStep3(initialStepData.step3);
        break;
      default:
        break;
    }
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header content={<ProgressBar currentStep={currentStep} />} onClick={handleClickPrev} />
      {currentStep === 1 && <Step1 data={step1} setData={setStep1} />}
      {currentStep === 2 && <Step2 data={step2} setData={setStep2} />}
      {currentStep === 3 && <Step3 data={step3} setData={setStep3} />}
      {currentStep === 4 && <Step4 data={step4} setData={setStep4} />}

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white px-4 pb-5 pt-4">
        <Button variant="primary" onClick={handleChangeStep} text={currentStep === 4 ? "완료" : "다음"} />
      </div>
    </div>
  );
}
