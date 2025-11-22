import {useState} from "react";
import Header from "@/components/Header";
import {Step2} from "@/components/create-card/Step2";
import {Step3} from "@/components/create-card/Step3";
import {Step4} from "@/components/create-card/Step4";
import {Step5} from "@/components/create-card/Step5";
import {initialStepData} from "@/constants/steps";
import {Step1} from "@/components/create-card/Step1";
import Button from "@/components/Button";
import type {Step1Data, Step2Data} from "@/types/steps";

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
        <div className={`w-2 h-2 rounded-full ${progressBarClasses[currentStep === 5 ? "active" : "inactive"]}`}></div>
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
  const [step3, setStep3] = useState(initialStepData.step3);
  const [step4, setStep4] = useState(initialStepData.step4);
  const [step5, setStep5] = useState(initialStepData.step5);

  console.log(step2);

  const handleChangeStep = () => {
    if (currentStep === 5) {
      // TODO: API 연결
      console.log("완료");
      return;
    }

    setCurrentStep(currentStep + 1);
  };

  const handleClickPrev = () => {
    if (currentStep === 1) {
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
      case 5:
        setStep4(initialStepData.step4);
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
      {currentStep === 5 && <Step5 data={step5} setData={setStep5} />}

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white px-4 pb-5 pt-4">
        <Button variant="primary" onClick={handleChangeStep} text={currentStep === 5 ? "완료" : "다음"} />
      </div>
    </div>
  );
}
