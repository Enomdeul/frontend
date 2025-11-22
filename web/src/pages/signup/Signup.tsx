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

    const [errors, setErrors] = useState<{
        id?: string;
        password?: string;
        passwordConfirm?: string;
        email?: string;
    }>({
        // id: "이미 존재하는 아이디에요요.",
        // passwordConfirm: "비밀번호가 일치하지 않아요요.",
        // email: "이미 가입한 이메일이에요.",
    });

    const [successes, setSuccesses] = useState<{
        id?: string;
        password?: string;
        passwordConfirm?: string;
        email?: string;
    }>({
        // id: "아이디 설정이 완료됐어요.",
        // passwordConfirm: "비밀번호 설정이 완료됐어요.",
        // email: "이메일 설정이 완료됐어요.",
    });

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
        // 입력 시 해당 필드의 에러 및 성공 메시지 제거
        if (errors[field as keyof typeof errors]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field as keyof typeof errors];
                return newErrors;
            });
        }
        if (successes[field as keyof typeof successes]) {
            setSuccesses(prev => {
                const newSuccesses = { ...prev };
                delete newSuccesses[field as keyof typeof successes];
                return newSuccesses;
            });
        }
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
                                error={errors.id}
                                success={successes.id}
                                rightButton={{
                                    text: "중복 확인",
                                    onClick: () => {
                                        // 중복 확인 로직
                                        // 테스트용: 성공 케이스 표시
                                        // setSuccesses(prev => ({ ...prev, id: "아이디 설정이 완료됐어요." }));
                                        // 테스트용: 에러 케이스 표시
                                        // setErrors(prev => ({ ...prev, id: "이미 존재하는 아이디예요." }));
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
                                    error={errors.passwordConfirm}
                                    success={successes.passwordConfirm}
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
                                error={errors.email}
                                success={successes.email}
                                rightButton={{
                                    text: "중복 확인",
                                    onClick: () => {
                                        // 중복 확인 로직
                                        // 테스트용: 성공 케이스 표시
                                        // setSuccesses(prev => ({ ...prev, email: "이메일 설정이 완료됐어요." }));
                                        // 테스트용: 에러 케이스 표시
                                        // setErrors(prev => ({ ...prev, email: "이미 가입한 이메일이에요." }));
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
