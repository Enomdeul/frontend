import {textStyles} from "@/lib/typography";
import type {Step4Data} from "@/types/steps";

interface Step4Props {
  data: Step4Data;
  setData: (data: Step4Data) => void;
}

export function Step4({data, setData}: Step4Props) {
  const {introduction} = data;
  const handleChangeIntroduction = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.slice(0, 75);
    setData({...data, introduction: value});
  };

  return (
    <div>
      <h1 className={`${textStyles.h1} text-gray-800 mb-8 relative z-10`}>
        카드를 완성하기 전에
        <br />
        마지막으로 입력해주세요.
      </h1>
      <div className="flex flex-col gap-2">
        <label className={`${textStyles.body1.semibold} text-gray-900`}>한 줄 소개</label>
        <div className="flex items-center border border-gray-100 rounded-xl bg-white px-4 py-4">
          <textarea
            value={introduction}
            onChange={handleChangeIntroduction}
            placeholder="한 줄 소개를 입력해주세요"
            maxLength={75}
            className={`flex-1 ${textStyles.body2.medium} bg-transparent outline-none placeholder:text-gray-500 resize-none min-h-[113px]`}
          />
        </div>
      </div>
    </div>
  );
}
