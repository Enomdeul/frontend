import {textStyles} from "@/lib/typography";

export function MyCard() {

    return (
        <div>
            {/* 중앙 프로필 카드 */}
            <div className="flex justify-center ">
                    <div className="bg-[rgba(255,255,255,0.6)] backdrop-blur-sm rounded-[24px] w-full max-w-[358px] overflow-hidden relative">
                        {/* 배경 이미지 */}
                        <div className="absolute flex h-[351.836px] items-center justify-center left-[113.29px] top-[-66px] w-[315.123px] pointer-events-none">
                            <div className="flex-none rotate-[189.973deg] scale-y-[-100%]">
                                <div className="h-[310.575px] relative w-[265.346px]">
                                    <img 
                                        alt=""
                                        src="https://www.figma.com/api/mcp/asset/e5409d3b-ea95-43cf-8505-04ed6dcb7e1c" 
                                        className="absolute inset-0 w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 카드 내용 */}
                        <div className="flex flex-col gap-5 items-start px-7 pt-[71px] pb-6 relative z-10">
                            <div className="flex flex-col gap-3 items-start w-full">
                                <div className="flex flex-col gap-2">
                                    <h2 className={`${textStyles.h1} text-[24px] text-black leading-[1.5]`}>
                                        배윤서 (23)
                                    </h2>
                                    <p className={`${textStyles.body2.regular} text-[14px] text-[#5a5a73] leading-[1.5]`}>
                                        기획자 | 이화여자대학교 융합콘텐츠학과
                                    </p>
                                </div>
                                <div className="backdrop-blur-sm bg-[rgba(255,255,255,0.7)] rounded-[20px] p-4 w-full">
                                    <p className={`${textStyles.body2.medium} text-[14px] text-[#464659] leading-[1.5]`}>
                                        사용자의 관점에서 생각하고, 창의적인 아이디어를 기반으로 유저 프렌들리한 서비스를 만드는 PM 배윤서입니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};