import type {Step4Data} from "@/types/steps";

interface Step4Props {
  data: Step4Data;
  setData: (data: Step4Data) => void;
}

export function Step4({data, setData}: Step4Props) {
  return (
    <div>
      <h1>Step 4</h1>
    </div>
  );
}
