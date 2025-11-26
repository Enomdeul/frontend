import {useState} from "react";
import Header from "@/components/Header";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import {useNavigate} from "react-router";
import {useCheckIdDuplicate, useCheckEmailDuplicate, useSignup} from "@/service/auth/queries";
import type {ApiErrorResponse} from "@/types/auth";

export function Signup() {
  const checkIdMutation = useCheckIdDuplicate();
  const checkEmailMutation = useCheckEmailDuplicate();
  const signupMutation = useSignup();
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
  }>({});

  const [successes, setSuccesses] = useState<{
    id?: string;
    password?: string;
    passwordConfirm?: string;
    email?: string;
  }>({});

  const clearFieldMessage = (field: keyof typeof errors) => {
    setErrors((prev) => {
      const newErrors = {...prev};
      delete newErrors[field];
      return newErrors;
    });
    setSuccesses((prev) => {
      const newSuccesses = {...prev};
      delete newSuccesses[field];
      return newSuccesses;
    });
  };

  const checkPasswordMatch = (password: string, passwordConfirm: string) => {
    clearFieldMessage("passwordConfirm");

    if (password === passwordConfirm) {
      setSuccesses((prev) => ({
        ...prev,
        passwordConfirm: "비밀번호 설정이 완료됐어요.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        passwordConfirm: "비밀번호가 일치하지 않아요.",
      }));
    }
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setFormData((prev) => ({...prev, [field]: newValue}));

    if (field === "passwordConfirm") {
      checkPasswordMatch(formData.password, newValue);
    } else if (field === "password") {
      if (formData.passwordConfirm) {
        checkPasswordMatch(newValue, formData.passwordConfirm);
      }
    } else {
      clearFieldMessage(field as keyof typeof errors);
    }
  };

  const navigate = useNavigate();

  const isFormValid = !!(successes.id && successes.passwordConfirm && successes.email && formData.id && formData.password && formData.email);

  const handleSignup = async () => {
    // 추가 검증
    if (!formData.id || !formData.password || !formData.email) {
      if (!formData.id) {
        setErrors((prev) => ({...prev, id: "아이디를 입력해주세요."}));
      }
      if (!formData.password) {
        setErrors((prev) => ({...prev, password: "비밀번호를 입력해주세요."}));
      }
      if (!formData.email) {
        setErrors((prev) => ({...prev, email: "이메일을 입력해주세요."}));
      }
      return;
    }

    // 비밀번호 확인 재검증
    if (formData.password !== formData.passwordConfirm) {
      setErrors((prev) => ({
        ...prev,
        passwordConfirm: "비밀번호가 일치하지 않아요.",
      }));
      return;
    }

    try {
      const response = await signupMutation.mutateAsync({
        loginId: formData.id,
        password: formData.password,
        email: formData.email,
      });

      console.log("회원가입 성공:", response);
      navigate("/login");
    } catch (error: unknown) {
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as {response?: {data?: ApiErrorResponse}};
        const errorData = axiosError.response?.data;

        if (errorData) {
          if (errorData.code === "DUPLICATE_LOGIN_ID" || errorData.message?.includes("아이디") || errorData.message?.includes("로그인")) {
            setErrors((prev) => ({
              ...prev,
              id: errorData.message || "이미 존재하는 아이디예요.",
            }));
          } else if (errorData.code === "DUPLICATE_EMAIL" || errorData.message?.includes("이메일") || errorData.message?.includes("email")) {
            setErrors((prev) => ({
              ...prev,
              email: errorData.message || "이미 가입한 이메일이에요.",
            }));
          } else {
            console.error("회원가입 실패:", errorData.message);
          }
        }
      } else {
        console.error("회원가입 중 오류 발생:", error);
      }
    }
  };

  const handleCheckIdDuplicate = async () => {
    if (!formData.id) {
      setErrors((prev) => ({...prev, id: "아이디를 입력해주세요."}));
      return;
    }

    clearFieldMessage("id");

    try {
      const response = await checkIdMutation.mutateAsync(formData.id);

      if (response.result.available) {
        setSuccesses((prev) => ({
          ...prev,
          id: "아이디 설정이 완료됐어요.",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          id: "이미 존재하는 아이디예요.",
        }));
      }
    } catch {
      setErrors((prev) => ({
        ...prev,
        id: "중복 확인 중 오류가 발생했습니다.",
      }));
    }
  };

  const handleCheckEmailDuplicate = async () => {
    if (!formData.email) {
      setErrors((prev) => ({...prev, email: "이메일을 입력해주세요."}));
      return;
    }

    clearFieldMessage("email");

    try {
      const response = await checkEmailMutation.mutateAsync(formData.email);

      if (response.result.available) {
        setSuccesses((prev) => ({
          ...prev,
          email: "이메일 설정이 완료됐어요.",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          email: "이미 가입한 이메일이에요.",
        }));
      }
    } catch {
      setErrors((prev) => ({
        ...prev,
        email: "중복 확인 중 오류가 발생했습니다.",
      }));
    }
  };

  return (
    <div className="bg-white relative w-full min-h-screen flex flex-col">
      <Header content="회원가입" onClick={() => navigate(-1)} />
      {/* 폼 영역 - Login.tsx와 동일한 반응형 구조 */}
      <div className="flex flex-col w-full relative z-10">
        <div className="flex flex-col w-full pt-8">
          <div className="flex flex-col w-full">
            {/* 폼 영역 - 아이디부터 완료 버튼까지 모두 나란하게 */}
            <div className="flex flex-col gap-6 px-4 py-10 w-full">
              {/* 아이디 */}
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
                  onClick: handleCheckIdDuplicate,
                }}
              />

              {/* 비밀번호 */}
              <div className="flex flex-col gap-6">
                <TextField label="비밀번호" value={formData.password} onChange={handleChange("password")} placeholder="비밀번호를 입력해주세요." type="password" variant="signup" />
                <TextField value={formData.passwordConfirm} onChange={handleChange("passwordConfirm")} placeholder="비밀번호 재입력" type="password" variant="signup" error={errors.passwordConfirm} success={successes.passwordConfirm} />
              </div>

              {/* 이메일 */}
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
                  onClick: handleCheckEmailDuplicate,
                }}
              />

              {/* 완료 버튼 */}
              <Button
                variant="primary"
                onClick={handleSignup}
                disabled={!isFormValid || signupMutation.isPending}
                width="w-full"
                style={{
                  height: "48px",
                  padding: "8px 12px",
                }}
              >
                {signupMutation.isPending ? "처리 중..." : "완료"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
