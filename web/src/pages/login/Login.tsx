import { useState } from "react";
import Header from "@/components/Header";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import { textStyles } from "@/lib/typography";

export function Login() {
    const [formData, setFormData] = useState({
        id: "",
        password: "",
    });

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handleLogin = () => {
        // 로그인 로직
        console.log("로그인:", formData);
    };

    return (
        <div className="bg-white relative w-full min-h-screen flex flex-col overflow-hidden">
            {/* 배경 그라데이션 원형 요소들 */}
            <div className="absolute right-[calc(87.5%-15.75px)] top-[74px] w-[545px] h-[545px] translate-x-[-50%] opacity-30">
                <div className="absolute inset-[-44.04%]">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#85A3FF] to-[#668CFF] opacity-20"></div>
                </div>
            </div>
            <div className="absolute left-[-27.76px] top-[546.08px] w-[338.425px] h-[334.919px] opacity-20">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#85A3FF] to-[#668CFF] opacity-30"></div>
            </div>

            <Header />
            
            {/* 메인 콘텐츠 */}
            <div className="flex flex-col items-start w-full px-4 pt-8 pb-24 relative z-10">
                {/* 제목 섹션 */}
                <div className="flex flex-col gap-1 mb-16 w-full">
                    <h1 className={`${textStyles.subtitle.semibold} text-[28px] text-[#363645] leading-[1.5]`}>
                        Welcome to AS
                    </h1>
                    <p className={`${textStyles.body2.medium} text-sm text-[#464659] leading-[1.5]`}>
                        AS 사용을 위한 로그인을 먼저 해주세요.
                    </p>
                </div>

                {/* 폼 영역 */}
                <div className="flex flex-col gap-6 w-full max-w-[358px]">
                    {/* 아이디 입력 */}
                    <TextField
                        label="아이디"
                        value={formData.id}
                        onChange={handleChange("id")}
                        placeholder="아이디 입력"
                        variant="login"
                    />

                    {/* 비밀번호 입력 */}
                    <TextField
                        label="비밀번호"
                        value={formData.password}
                        onChange={handleChange("password")}
                        placeholder="비밀번호 입력"
                        type="password"
                        variant="login"
                    />

                    {/* 로그인 버튼 */}
                    <div className="mt-2">
                        <Button
                            variant="primary"
                            onClick={handleLogin}
                            style={{
                                height: '48px',
                                padding: '8px 12px',
                            }}
                        >
                            로그인
                        </Button>
                    </div>
                </div>
            </div>

            {/* 하단 그라데이션 오버레이 */}
            <div className="fixed bottom-0 left-0 right-0 h-[195px] bg-gradient-to-b from-transparent to-white pointer-events-none z-0"></div>
        </div>
    );
}
