import { useNavigate, useLocation } from "react-router";
import { ChevronLeft } from 'lucide-react';
import type { ReactNode } from "react";
import { textStyles } from "@/lib/typography";

const backComponentMap: Record<string, ReactNode> = {
	'/createcard': <span className={textStyles.subtitle.semibold}>My카드만들기</span>,
	'/signup': <span className={textStyles.subtitle.semibold}>회원가입</span>,
};

// 뒤로가기만 필요한 경로들
const backOnlyPaths = ['/login'];

export default function Header() {
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname;

	// splash, root 경로에서는 Header 숨김
	if (path === '/splash' || path === '/') return null;

	const centerComponent = backComponentMap[path];
	const isBackOnly = backOnlyPaths.includes(path);

	// 뒤로가기만 필요한 경우 또는 중앙 컴포넌트가 있는 경우
	if (isBackOnly || centerComponent) {
		return (
			<div className="bg-white p-3 flex items-center h-16">
				<button
					className="w-[30%] bg-white text-xl font-basic flex items-center gap-2"
					onClick={() => navigate(-1)}
				>
					<ChevronLeft size={20} color="#000" />
				</button>

				{centerComponent && (
					<div className="w-[40%] flex items-center justify-center">
						{centerComponent}
					</div>
				)}
			</div>
		);
	}

	return null;
}
