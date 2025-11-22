import { useNavigate } from "react-router";
import asLogo from "@/assets/as_logo.svg";
import { textStyles } from "@/lib/typography";
import Button from "@/components/Button";

export function Splash() {
    const navigate = useNavigate();

    return (
        <div className="bg-white relative w-full h-screen overflow-hidden">
            {/* 배경 원형 그라데이션 - 메인 */}
            <div className="absolute -left-[1.8%] top-[34%] w-[204%] h-[204%] sm:w-[220%] sm:h-[220%] md:w-[240%] md:h-[240%] rounded-full">
                <div 
                    className="absolute inset-[-30.19%] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(102, 140, 255, 0.45) 0%, rgba(102, 140, 255, 0.3) 30%, rgba(133, 163, 255, 0.2) 50%, rgba(133, 163, 255, 0.08) 70%, rgba(133, 163, 255, 0.04) 85%, transparent 100%)'
                    }}
                />
            </div>

            {/* 단계별 원형 그라데이션 레이어들 */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[41.7%] w-[163.6%] h-[163.6%] sm:w-[175%] sm:h-[175%] md:w-[190%] md:h-[190%] rounded-full bg-white/16" />
            <div className="absolute left-1/2 -translate-x-1/2 top-[53.1%] w-[163.6%] h-[163.6%] sm:w-[175%] sm:h-[175%] md:w-[190%] md:h-[190%] rounded-full bg-white/16" />
            <div className="absolute left-1/2 -translate-x-1/2 top-[64.5%] w-[163.6%] h-[163.6%] sm:w-[175%] sm:h-[175%] md:w-[190%] md:h-[190%] rounded-full bg-white/16" />

            {/* 상단 로고 영역 */}
            <div className="absolute left-[5.1%] top-[16.9%] flex flex-col gap-3 sm:gap-4 md:gap-5 w-[45.4%] sm:w-[47%] md:w-[48%]">
                <div className="relative h-12 w-36 sm:h-14 sm:w-40 md:h-16 md:w-44">
                    <img alt="AS Logo" className="block max-w-none size-full object-contain" src={asLogo} />
                </div>
                <p className="font-['Pretendard',sans-serif] font-normal leading-[1.5] text-[#363645] text-center whitespace-pre-wrap text-xl sm:text-2xl md:text-3xl">
                    : Add (  ) Skills
                </p>
            </div>

            {/* 하단 버튼 영역 */}
            <div className="absolute bottom-0 left-0 w-full flex flex-col gap-5 sm:gap-6 md:gap-7 items-center pb-8 sm:pb-10 md:pb-12">
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center w-[91.8%] sm:w-[92%] md:w-[93%] max-w-[358px]">
                    {/* 회원가입 버튼 */}
                    <Button
                        variant="primary"
                        onClick={() => navigate("/signup")}
                        width="w-full"
                        style={{
                            height: '3rem',
                            borderRadius: '0.75rem',
                        }}
                    >
                        회원가입
                    </Button>

                    {/* 로그인 링크 */}
                    <p className={`${textStyles.button.button2} leading-[1.5] text-[#5a5a73] text-center w-full text-sm sm:text-base md:text-lg`}>
                        이미 계정이 있으신가요?{' '}
                        <span 
                            className="underline cursor-pointer hover:text-[#668cff] transition-colors"
                            onClick={() => navigate("/login")}
                        >
                            로그인
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
