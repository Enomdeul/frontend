import {useState} from "react";
import Header from "@/components/Header";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import {useNavigate} from "react-router";

export function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    password: "",
    passwordConfirm: "",
    email: "",
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({...prev, [field]: e.target.value}));
  };

  return (
    <div className="bg-white relative w-full min-h-screen flex flex-col">
      <Header
        title="회원가입"
        onClick={() => {
          navigate(-1);
        }}
      />
      {/* 폼 영역 */}
      <div className="flex items-center justify-center px-[26px] pt-8 pb-8">
        <div className="flex flex-col gap-[53px] max-w-[340px]">
          {/* 첫 번째 섹션 */}
          <div className="flex flex-col gap-[53px]">
            {/* 아이디 */}
            <div className="flex flex-col gap-[6px] relative">
              <TextField
                label="아이디"
                value={formData.id}
                onChange={handleChange("id")}
                placeholder="아이디"
                variant="signup"
                rightButton={{
                  text: "중복 확인",
                  onClick: () => {
                    // 중복 확인 로직
                    console.log("아이디 중복 확인:", formData.id);
                  },
                }}
              />
            </div>

            {/* 비밀번호 */}
            <div className="flex flex-col gap-[6px] relative">
              <TextField label="비밀번호" value={formData.password} onChange={handleChange("password")} placeholder="비밀번호" type="password" variant="signup" />
              <div className="mt-[6px]">
                <TextField value={formData.passwordConfirm} onChange={handleChange("passwordConfirm")} placeholder="비밀번호 재입력" type="password" variant="signup" />
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
                placeholder="이메일"
                type="email"
                variant="signup"
                rightButton={{
                  text: "중복 확인",
                  onClick: () => {
                    // 중복 확인 로직
                    console.log("이메일 중복 확인:", formData.email);
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 확인 버튼 */}
      <div className="flex items-center justify-center px-[26px] pb-8">
        <Button
          backgroundColor="bg-neutral-100"
          border="border border-black border-solid"
          borderRadius="rounded-[30px]"
          height="h-[49px]"
          width="w-full max-w-[340px]"
          fontColor="text-black"
          fontWeight="text-[17px]"
          onClick={() => {
            // 회원가입 로직
            console.log("회원가입:", formData);
          }}
        >
          확인
        </Button>
      </div>
    </div>
  );
}
