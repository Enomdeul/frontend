import { useState } from "react";
import Header from "@/components/Header";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import { useNavigate } from "react-router";

export function Signup() {
    const [formData, setFormData] = useState({
        id: "",
        password: "",
        passwordConfirm: "",
        email: "",
    });

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    const navigate = useNavigate();

    return (
        <div className="bg-white relative w-full min-h-screen flex flex-col">
            <Header />
            {/* 폼 영역 */}
            <div className="flex items-center justify-center px-6 sm:px-7 md:px-8 pt-8 pb-24">
                <div className="flex flex-col gap-12 sm:gap-14 md:gap-16 w-full max-w-[340px] sm:max-w-[360px] md:max-w-[380px]">
                    {/* 첫 번째 섹션 */}
                    <div className="flex flex-col gap-12 sm:gap-14 md:gap-16">
                        {/* 아이디 */}
                        <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-2.5 relative">
                            <TextField
                                label="아이디"
                                value={formData.id}
                                onChange={handleChange("id")}
                                placeholder="아이디를 입력해주세요."
                                variant="signup"
                                rightButton={{
                                    text: "중복 확인",
                                    onClick: () => {
                                        // 중복 확인 로직
                                        console.log("아이디 중복 확인:", formData.id);
                                    }
                                }}
                            />
                        </div>

                        {/* 비밀번호 */}
                        <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-2.5 relative">
                            <TextField
                                label="비밀번호"
                                value={formData.password}
                                onChange={handleChange("password")}
                                placeholder="비밀번호를 입력해주세요."
                                type="password"
                                variant="signup"
                            />
                            <div className="mt-1.5 sm:mt-2 md:mt-2.5">
                                <TextField
                                    value={formData.passwordConfirm}
                                    onChange={handleChange("passwordConfirm")}
                                    placeholder="비밀번호 재입력"
                                    type="password"
                                    variant="signup"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 두 번째 섹션 */}
                    <div className="flex flex-col gap-[53px]">
                        {/* 이메일 */}
                        <div className="flex flex-col gap-[6px] relative">
                            <TextField
                                label="이메일"
                                value={formData.email}
                                onChange={handleChange("email")}
                                placeholder="이메일을 입력해주세요."
                                type="email"
                                variant="signup"
                                rightButton={{
                                    text: "중복 확인",
                                    onClick: () => {
                                        // 중복 확인 로직
                                        console.log("이메일 중복 확인:", formData.email);
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 w-full flex justify-center items-center px-3 sm:px-4 md:px-5 py-2">
                <div className="w-full sm:gap-4 md:gap-5 items-center w-[91.8%] sm:w-[92%] md:w-[93%] max-w-[358px]">
                    <Button
                        variant="primary"
                        onClick={() => navigate("/signup")}
                        width="w-full"
                        style={{
                            height: '48px',
                            padding: '8px 12px',
                        }}
                    >
                        완료
                    </Button>
                </div>
            </div>
        </div>
    );
}
