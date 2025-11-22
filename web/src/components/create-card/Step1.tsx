import {textStyles} from "@/lib/typography";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";
import PlannerIcon from "@/assets/icons/planner.svg";
import DesignerIcon from "@/assets/icons/designer.svg";
import DeveloperIcon from "@/assets/icons/developer.svg";
import MyCardIcon from "@/assets/image/my_card.svg";
import type {Step1Data} from "@/types/steps";

interface Step1Props {
  data: {
    name: string;
    age: string;
    gender: string;
    school: string;
    job: string;
  };
  setData: (data: Step1Data) => void;
}

export function Step1({data, setData}: Step1Props) {
  const {name, age, gender, school, job} = data;

  return (
    <div className="relative px-4 pt-8 pb-32">
      {/* 배경 SVG 이미지 */}
      <img src={MyCardIcon} alt="" className="absolute right-0 top-[-30px] w-[255.55px] h-[183.92px] opacity-40 pointer-events-none" style={{borderRadius: "18.27px"}} />
      <h1 className={`${textStyles.h1} text-gray-800 mb-8 relative z-10`}>
        이제 MY 카드를
        <br />
        만들어볼까요?
      </h1>
      <div className="flex flex-col gap-8 relative z-10">
        <div className="flex flex-col gap-2">
          <label className={`${textStyles.body1.semibold} text-gray-900`}>이름</label>
          <div className="flex items-center border border-gray-100 rounded-xl bg-white px-4 py-4">
            <input type="text" value={name} onChange={(e) => setData({...data, name: e.target.value})} placeholder="이름 입력" className={`flex-1 ${textStyles.body2.medium} bg-transparent outline-none placeholder:text-gray-500`} />
          </div>
        </div>

        {/* 나이 & 성별 Row */}
        <div className="flex items-start gap-3">
          {/* 나이 */}
          <div className="flex flex-col gap-2 w-[105px]">
            <label className={`${textStyles.body1.semibold} text-gray-900`}>나이</label>
            <div className="flex items-center border border-gray-100 rounded-xl bg-white px-4 py-4 gap-2 w-full">
              <input type="number" value={age} onChange={(e) => setData({...data, age: e.target.value})} className={`flex-1 w-[40%] ${textStyles.body2.medium} bg-transparent outline-none`} />
              <span className="text-gray-500 shrink-0 w-fit">세</span>
            </div>
          </div>

          {/* 성별 */}
          <div className="flex flex-col gap-2 flex-1">
            <label className={`${textStyles.body1.semibold} text-gray-900`}>성별</label>
            <div className="flex gap-2">
              <button
                onClick={() => setData({...data, gender: "MALE"})}
                className={`flex-1 flex items-center justify-center gap-3 px-3 py-[15px] rounded-xl transition-colors ${gender === "MALE" ? "bg-blue-500 text-white" : "bg-gray-50 text-gray-500"} ${textStyles.button.button1}`}
              >
                남자
              </button>
              <button
                onClick={() => setData({...data, gender: "FEMALE"})}
                className={`flex-1 flex items-center justify-center gap-3 px-3 py-[15px] rounded-xl transition-colors ${gender === "FEMALE" ? "bg-blue-500 text-white" : "bg-gray-50 text-gray-500"} ${textStyles.button.button1}`}
              >
                여자
              </button>
            </div>
          </div>
        </div>

        {/* 소속 학교 / 회사 */}
        <div className="flex flex-col gap-2">
          <label className={`${textStyles.body1.semibold} text-gray-900`}>소속 학교 / 회사</label>
          <div className="flex items-center border border-gray-100 rounded-xl bg-white px-4 py-4">
            <input
              type="text"
              value={school}
              onChange={(e) => setData({...data, school: e.target.value})}
              placeholder="소속 학교 / 회사 직접 입력"
              className={`flex-1 ${textStyles.body2.medium} bg-transparent outline-none placeholder:text-gray-500`}
            />
          </div>
        </div>

        {/* 직군 */}
        <div className="flex flex-col gap-2">
          <label className={`${textStyles.body1.semibold} text-gray-900`}>직군</label>
          <Select value={job} onValueChange={(value) => setData({...data, job: value})}>
            <SelectTrigger
              className={`w-full border border-gray-100 rounded-xl bg-white p-4 !h-14 text-[14px] ${textStyles.body2.medium} text-gray-900 data-placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 [&_svg]:size-6 [&_svg]:text-gray-900 [&_svg]:opacity-100`}
            >
              <SelectValue placeholder="직군 선택" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border border-gray-100 shadow-e300 bg-white [&>div]:p-0">
              <SelectItem value="기획" className={`${textStyles.body1.medium} text-gray-700 hover:bg-gray-50 py-4 px-5 pr-8 flex items-center gap-3`}>
                <img src={PlannerIcon} alt="기획" className="w-6 h-6 shrink-0" />
                <span>기획</span>
              </SelectItem>
              <SelectItem value="디자인" className={`${textStyles.body1.medium} text-gray-700 hover:bg-gray-50 py-4 px-5 pr-8 flex items-center gap-3`}>
                <img src={DesignerIcon} alt="디자인" className="w-6 h-6 shrink-0" />
                <span>디자인</span>
              </SelectItem>
              <SelectItem value="개발" className={`${textStyles.body1.medium} text-gray-700 hover:bg-gray-50 py-4 px-5 pr-8 flex items-center gap-3`}>
                <img src={DeveloperIcon} alt="개발" className="w-6 h-6 shrink-0" />
                <span>개발</span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
