import {useEffect} from "react";
import {useNavigate, useLocation} from "react-router";

// 인증이 필요 없는 공개 페이지 목록
const PUBLIC_PAGES = ["/splash", "/signup", "/login"];

export const useIsLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const currentPath = location.pathname;
    const isPublicPage = PUBLIC_PAGES.includes(currentPath);

    // 공개 페이지가 아닌 경우 (보호된 페이지)
    if (!isPublicPage) {
      // accessToken이 없으면 splash로 리다이렉트
      if (!accessToken) {
        navigate("/splash", {replace: true});
        return;
      }
    } else {
      // 공개 페이지인 경우
      // accessToken이 있으면 홈으로 리다이렉트 (이미 로그인한 상태)
      if (accessToken) {
        navigate("/", {replace: true});
        return;
      }
      // accessToken이 없으면 그대로 공개 페이지에 머무름
    }
  }, [location.pathname, navigate]);
};
