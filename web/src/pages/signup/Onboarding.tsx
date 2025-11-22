import Button from "@/components/Button";
import { useNavigate } from "react-router";

export function Onboarding() {
    const navigate = useNavigate();

    return (
        <div className="bg-white relative w-full h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col mb-[200px]">
                <p className="font-['Pretendard_Variable',sans-serif] font-extrabold text-[50px] text-black mb-0">
                    AS
                </p>
                <p className="font-['Pretendard_Variable',sans-serif] font-normal text-[30px] text-black">
                    : Add your Skills
                </p>
            </div>
            
            <div className="flex flex-col gap-[10px]">
                <Button variant="primary" onClick={() => navigate("/")}>
                    로그인
                </Button>
                
                <Button variant="primary" onClick={() => navigate("/signup")}>
                    회원가입
                </Button>
            </div>
        </div>
    );
}
