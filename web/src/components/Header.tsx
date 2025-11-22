import {ChevronLeft} from "lucide-react";
import {textStyles} from "@/lib/typography";
import type {ReactNode} from "react";

interface HeaderProps {
  content?: ReactNode;
  onClick: () => void;
}

export default function Header({content, onClick}: HeaderProps) {
  return (
    <div className="bg-white flex items-stretch w-full h-[54px] sticky top-0 z-10">
      {/* Left Icon Button */}
      <button className="flex items-center justify-center w-[54px] h-[54px] p-[10px_12px]" onClick={onClick}>
        <ChevronLeft size={24} className="text-[#2A2A35]" />
      </button>

      {/* Center Title */}
      <div className="flex-1 flex items-center justify-center">
        <span className={`${textStyles.subtitle.semibold} text-[18px] leading-[1.5em] text-center text-[#2A2A35]`}>{content}</span>
      </div>

      {/* Right Spacer */}
      <div className="w-[54px] h-[54px] p-3" />
    </div>
  );
}
