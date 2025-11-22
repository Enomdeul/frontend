import {useIsLogin} from "@/hooks/useIsLogin";

export function Home() {
  useIsLogin();
  return <div className="text-blue-600 text-h3">세상에 이런</div>;
}
