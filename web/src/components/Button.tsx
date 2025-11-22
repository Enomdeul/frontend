import type { ReactNode } from 'react';

// 로그인, 회원가입: primary
// 다음, 확인: secondary
interface CustomButtonProps {
	text?: string;
	children?: ReactNode;
	width?: string;
	height?: string;
	padding?: string;
	backgroundColor?: string;
	borderRadius?: string;
	border?: string;
	fontColor?: string;
	fontWeight?: string;
	onClick?: () => void;
	variant?: 'primary' | 'secondary' | 'danger' | 'outline';
	disabled?: boolean;
	style?: React.CSSProperties;
}

type VariantStyle = {
	bg: string;
	text: string;
	border?: string;
};

const variantStyles: Record<NonNullable<CustomButtonProps['variant']>, VariantStyle> = {
	primary: {
		bg: 'border border-black border-solid box-border flex items-center justify-center px-[10px] py-[10px] w-[300px] h-auto',
		text: "font-['Pretendard_Variable',sans-serif] font-normal text-[17px] text-black text-center",
	},
	secondary: {
		bg: 'bg-gray-300',
		text: 'text-gray-800',
	},
	danger: {
		bg: 'bg-red-600',
		text: 'text-white',
	},
	outline: {
		bg: 'bg-white',
		text: 'text-blue-500',
		border: 'border border-blue-500',
	},
};

export default function Button({
	text,
	children,
	width,
	height,
	padding,
	backgroundColor,
	border,
	borderRadius,
	fontColor,
	fontWeight,
	onClick,
	variant,
}: CustomButtonProps) {
	const variantClass: VariantStyle = variant ? variantStyles[variant] : { bg: '', text: '', border: '' };

	// variant가 있으면 variant 스타일 우선, 없으면 개별 props 사용
	const buttonClasses = variant 
		? variantClass.bg 
		: [
			width || 'w-auto',
			height || 'h-auto',
			padding || 'px-4 py-2',
			backgroundColor || '',
			border || variantClass.border || '',
			borderRadius || 'rounded-md',
		].filter(Boolean).join(' ');

	// 텍스트 스타일: variant가 있으면 variant의 text 스타일, 없으면 개별 props
	const textClasses = variant
		? variantClass.text
		: [
			fontColor || '',
			fontWeight || 'text-sm',
		].filter(Boolean).join(' ');

	const baseClasses = 'transition hover:opacity-90 flex items-center justify-center outline-none ring-0 focus:ring-0 focus:outline-none focus:border-transparent';
	const finalButtonClasses = [baseClasses, buttonClasses].filter(Boolean).join(' ');

	return (
		<button className={finalButtonClasses} onClick={onClick}>
			{textClasses ? (
				<span className={textClasses}>{text ?? children}</span>
			) : (
				text ?? children
			)}
		</button>
	);
}
