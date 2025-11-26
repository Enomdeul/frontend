import {useState} from "react";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import {textStyles} from "@/lib/typography";
import {useNavigate} from "react-router";
import {useLogin} from "@/service/auth/queries";
import type {ApiErrorResponse} from "@/types/auth";

export function Login() {
  const loginMutation = useLogin();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({...prev, [field]: e.target.value}));
    if (error) {
      setError("");
    }
  };

  const isFormValid = !!(formData.id && formData.password);

  const handleLogin = async () => {
    if (!formData.id || !formData.password) {
      setError("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    setError("");

    try {
      const response = await loginMutation.mutateAsync({
        id: formData.id,
        password: formData.password,
      });

      localStorage.setItem("accessToken", response.result.accessToken);
      navigate("/card/create");
    } catch (error: unknown) {
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as {response?: {data?: ApiErrorResponse}};
        const errorData = axiosError.response?.data;

        if (errorData) {
          setError(errorData.message || "로그인에 실패했습니다.");
        } else {
          setError("로그인 중 오류가 발생했습니다.");
        }
      } else {
        setError("로그인 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div className="bg-white relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* 배경 그라데이션 원형 요소들 - 하단 배치 */}
      <div className="absolute left-[calc(87.5%-15.75px)] bottom-0 w-[545px] h-[545px] translate-x-[-50%]">
        <div className="absolute inset-[-44.04%]">
          <img alt="" src="https://www.figma.com/api/mcp/asset/77ed3e49-09cc-4e45-8bef-94ddfe09ca36" className="block max-w-none w-full h-full" />
        </div>
      </div>
      <div className="absolute left-[-27.76px] bottom-0 w-[338.425px] h-[334.919px]">
        <img alt="" src="https://www.figma.com/api/mcp/asset/0d61b6f3-76c4-4e7a-98ef-2335660aca96" className="block max-w-none w-full h-full" />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="flex flex-col w-full relative z-10">
        {/* 제목 섹션 - Figma 디자인에 맞게 gap-[64px] 적용 */}
        <div className="flex flex-col gap-[64px] w-full pt-[21px]">
          <div className="h-[33px]"></div>

          {/* 제목과 폼 영역 */}
          <div className="flex flex-col w-full">
            {/* 제목 섹션 */}
            <div className="flex flex-col gap-1 px-4 w-full mb-10">
              <h1 className={`${textStyles.h1} text-[28px] text-[#363645] leading-[1.5]`}>Welcome to AS</h1>
              <p className={`${textStyles.body2.medium} text-sm text-[#464659] leading-[1.5]`}>AS 사용을 위한 로그인을 먼저 해주세요.</p>
            </div>

            {/* 폼 영역 - 아이디부터 로그인 버튼까지 모두 나란하게 */}
            <div className="flex flex-col gap-6 px-4 py-10 w-full">
              {/* 아이디 입력 */}
              <TextField label="아이디" value={formData.id} onChange={handleChange("id")} placeholder="아이디 입력" variant="signup" error={error && !formData.id ? error : undefined} />

              {/* 비밀번호 입력 */}
              <TextField label="비밀번호" value={formData.password} onChange={handleChange("password")} placeholder="비밀번호 입력" type="password" variant="signup" error={error && formData.id ? error : undefined} />

              {/* 로그인 버튼 */}
              <Button
                variant="primary"
                onClick={handleLogin}
                disabled={!isFormValid || loginMutation.isPending}
                width="w-full"
                style={{
                  height: "48px",
                  padding: "8px 12px",
                }}
              >
                {loginMutation.isPending ? "처리 중..." : "로그인"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 그라데이션 오버레이 */}
      <div className="absolute bottom-0 left-0 right-0 h-[195px] bg-gradient-to-b from-transparent to-white pointer-events-none z-0"></div>
    </div>
  );
}
