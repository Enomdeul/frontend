import type { ReactNode } from 'react';
import { textStyles } from '@/lib/typography';

// 로그인, 회원가입: primary
// 다음, 확인:
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
	variant?: 'primary' | 'secondary' | 'third' | 'fourth';
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
		bg: 'bg-[#668cff] h-12 sm:h-[52px] md:h-14 rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 w-full',
		text: `${textStyles.button.button1} leading-[1.5] text-base sm:text-lg md:text-xl text-white text-center`,
	},
	secondary: {
		bg: 'bg-[#cfcfd7] h-12 sm:h-[52px] md:h-14 rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 w-full',
		text: `${textStyles.button.button1} leading-[1.5] text-base sm:text-lg md:text-xl text-[#63637e] text-center`,
	},
	third: {
		bg: 'bg-[#cfcfd7] h-[54px] sm:h-[58px] md:h-[62px] rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 py-3.5 sm:py-4 md:py-4.5 w-full',
		text: `${textStyles.button.button1} leading-[1.5] text-base sm:text-lg md:text-xl text-[#63637e] text-center`,
	},
	fourth: {
		bg: 'bg-[#f0f4ff] h-10 sm:h-11 md:h-12 rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 w-full',
		text: `${textStyles.button.button1} leading-[1.5] text-sm sm:text-base md:text-lg text-[#668cff] text-center`,
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
	style,
}: CustomButtonProps) {
	const variantClass: VariantStyle = variant ? variantStyles[variant] : { bg: '', text: '', border: '' };

	// variant가 있으면 variant 스타일 우선, 없으면 개별 props 사용
	const buttonClasses = variant 
		? variantClass.bg 
		: [
			width || 'w-full',
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
		<button className={finalButtonClasses} onClick={onClick} style={style}>
			{textClasses ? (
				<span className={textClasses}>{text ?? children}</span>
			) : (
				text ?? children
			)}
		</button>
	);
}
